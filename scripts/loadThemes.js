const { inspect } = require('util')
const { loadJSON } = require('./yaml')
const chroma = require('chroma-js')
const fsp = require('./fsp')

/**
 * On dev mode, sometimes when we read the file the return value of readFile
 * is an empty string. In those cases we need to read the file again
 */
async function readFileRetrying(filePathYAML) {
  const yaml = await fsp.readFile(filePathYAML, 'utf8')
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
  // ratioTargetMap determines the minimum
  const ratioTargetMap = {
    'light': 4.5,
    'light-darker': 7,
    'white': 4.5,
    'white-darker': 7,
  }

  let contrastReport = []
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
        color = chroma(color).brighten(0.01) // lower = more accurate
      }
      return color
    }

    function smartDarken() {
      let timesDarkened = 0
      while (chroma.contrast(color, FG) < ratioTargetMap[variant]) {
        color = chroma(color).darken(0.01) // lower = more accurate
        timesDarkened++
      }
      // prettier-ignore
      contrastReport.push({
        Original     : originalColor,
        Darkened     : chroma(color).hex(),
        Ratio         : chroma.contrast(color, FG),
        timesDarkened: timesDarkened,
      })
      return color
    }
    // prettier-ignore
    switch (variant) {
      case 'light'       : return smartDarken()
      case 'light-darker': return smartDarken()
      case 'white'       : return smartDarken()
      case 'white-darker': return smartDarken()
    }
  })

  const variantDisplayName = variant
    .toLowerCase()
    .split('-')
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ')

  /// Generate contrastReports
  contrastReport.unshift({
    variant: variantDisplayName,
    contrastRatioTarget: ratioTargetMap[variant],
  })
  fsp.writeFile(`contrastReport-${variant}.js`, inspect(contrastReport))

  return yamlVariant.replace('Dracula Flat Theme', `Dracula Flat ${variantDisplayName} Theme`)
}

module.exports = loadTheme
