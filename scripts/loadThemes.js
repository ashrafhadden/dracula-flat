'use strict'
const { loadJSON } = require('./yaml')
const chroma = require('chroma-js')
const fs = require('fs')

/**
 * On dev mode, sometimes when we read the file the return value of readFile
 * is an empty string. In those cases we need to read the file again
 */
async function readFileRetrying(filePathYAML) {
  const yaml = await fs.readFileSync(filePathYAML, 'utf8')
  if (!yaml) {
    return readFileRetrying(filePathYAML)
  }
  return yaml
}

async function loadTheme(filePathYAML) {
  const yaml = await readFileRetrying(filePathYAML)
  const json = await loadJSON(yaml)

  const yaml_light = getVariant(yaml, json, 'light')
  const json_light = await loadJSON(yaml_light)

  const yaml_lightDarker = getVariant(yaml, json, 'light-darker')
  const json_lightDarker = await loadJSON(yaml_lightDarker)

  const yaml_white = getVariant(yaml, json, 'white')
  const json_white = await loadJSON(yaml_white)

  const yaml_whiteDarker = getVariant(yaml, json, 'white-darker')
  const json_whiteDarker = await loadJSON(yaml_whiteDarker)

  return { json, json_light, json_lightDarker, json_white, json_whiteDarker }
}

function getVariant(yaml, json, variant) {
  const BG = json.dracula.base[0]
  const FG = json.dracula.base[1]
  const SELECTION = json.dracula.base[2]
  const otherBG = json.dracula.other.slice(4, 6)
  const allBG = [BG, ...otherBG]

  /// Darken colors until constrast ratio complies with WCAG
  // https://vis4.net/chromajs/#chroma-contrast
  // Minimum (Level AA) 4.5
  // Enhanced (Level AAA) 7
  const resolution = 0.001
  // ratioTargetMap determines the minimum
  const ratioTargetMap = {
    'light': 4.5,
    'light-darker': 7,
    'white': 4.5,
    'white-darker': 7,
  }

  const variantDisplayName = variant
    .toLowerCase()
    .split('-')
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ')
  const background = `${variant.includes('light') ? '#282a36' : '#ffffff'}`
  let MDTable = `\
### ${variantDisplayName}

| Name | [Original (Dracula)](https://github.com/dracula/visual-studio-code/blob/master/src/dracula.yml#L6) | Hex | Darkened | Hex | Ratio to Background (${background}) | Difference   |
|------|----------------------------------------------------------------------------------------------------|-----|----------|-----|-------------------------------------|--------------|`

  const regex = /#[0-9A-F]{3,}/gi // https://regexr.com/4cue7
  let yamlVariant = yaml.replace(regex, color => {
    const originalColor = color
    // Replace Dracula Foreground w/ Background (#F8F8F2 -> #282A36)
    if (color === FG) return BG
    if (allBG.includes(color)) {
      if (variant === 'white' || variant === 'white-darker') {
        return '#FFFFFF'
      } else {
        return FG
      }
    }
    if (color === SELECTION) return smartDarkenSelection()

    function smartDarkenSelection() {
      // Get the ratio between Dracula Official selection and background colors (1.56 as of 5/3/19)
      const draculaOfficialRatio = chroma.contrast(SELECTION, BG)
      color = SELECTION
      while (chroma.contrast(color, FG) > draculaOfficialRatio) {
        color = chroma(color).brighten(resolution) // lower = more accurate
      }
      return color
    }

    // prettier-ignore
    switch (variant) {
      case 'light'       : return smartDarken()
      case 'light-darker': return smartDarken()
      case 'white'       : return smartDarken()
      case 'white-darker': return smartDarken()
    }

    function smartDarken() {
      while (chroma.contrast(color, FG) < ratioTargetMap[variant]) {
        color = chroma(color).darken(resolution) // lower = more accurate
      }

      /// generate Markdown Table for use in "## Colors Used" section of README.md
      // prettier-ignore
      const colorTypeMap = { '#282A36': 'BG', '#F8F8F2': 'FG', '#44475A': 'SELECTION', '#6272A4': 'COMMENT', '#8BE9FD': 'CYAN', '#50FA7B': 'GREEN', '#FFB86C': 'ORANGE', '#FF79C6': 'PINK', '#BD93F9': 'PURPLE', '#FF5555': 'RED', '#F1FA8C': 'YELLOW', '#21222C': 'COLOR0', '#FF5555': 'COLOR1', '#50FA7B': 'COLOR2', '#F1FA8C': 'COLOR3', '#BD93F9': 'COLOR4', '#FF79C6': 'COLOR5', '#8BE9FD': 'COLOR6', '#F8F8F2': 'COLOR7', '#6272A4': 'COLOR8', '#FF6E6E': 'COLOR9', '#69FF94': 'COLOR10', '#FFFFA5': 'COLOR11', '#D6ACFF': 'COLOR12', '#FF92DF': 'COLOR13', '#A4FFFF': 'COLOR14', '#FFFFFF': 'COLOR15', '#E9F284': 'TEMP_QUOTES', '#8BE9FE': 'TEMP_PROPERTY_QUOTES', '#44475A75': 'LineHighlight', '#424450': 'NonText', '#FFFFFF': 'WHITE', '#44475A70': 'TAB_DROP_BG', '#424450': 'BGLighter', '#343746': 'BGLight', '#282A36': 'BGDark', '#282A36': 'BGDarker', }
      const name = colorTypeMap[originalColor]
      const darkenedColor = chroma(color).hex()
      const darkenedColor_noHex = darkenedColor.substring(1)
      const originalColorLC = originalColor.toLowerCase()
      const originalColorLC_noHex = originalColorLC.substring(1)
      const ratioToBackground = Math.round(chroma.contrast(darkenedColor, FG) * 10) / 10
      MDTable += `\n| ${name} | ![${originalColorLC}](https://placehold.it/16/${originalColorLC_noHex}/000000?text=+) | ${originalColorLC} | ![${darkenedColor}](https://placehold.it/15/${darkenedColor_noHex}/000000?text=+) | ${darkenedColor} | ${ratioToBackground} |`

      return color
    }
  })

  MDTable += '\n\n'
  fs.appendFile(`colors-used-table.md`, MDTable, err => {
    if (err) throw err
  })

  return yamlVariant.replace('Dracula.min Theme', `Dracula.min ${variantDisplayName} Theme`)
}

module.exports = loadTheme
