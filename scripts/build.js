'use strict'

const path = require('path')
const fsp = require('./fsp')
const loadThemes = require('./loadThemes')

const THEME_DIR = path.join(__dirname, '..', 'themes')
const THEME_YAML_FILE = path.join(__dirname, '..', 'src', 'dracula.yml')

function toJSON(theme) {
  return JSON.stringify(theme, null, 4)
}

async function build() {
  if (!(await fsp.exists(THEME_DIR))) {
    await fsp.mkdir(THEME_DIR)
  }

  const extensionName = process.env.npm_package_name
  const { json, json_light, json_lightDarker, json_white, json_whiteDarker } = await loadThemes(THEME_YAML_FILE)
  const themePath = path.join(THEME_DIR, `${extensionName}.json`)
  const themePath_light = path.join(THEME_DIR, `${extensionName}-light.json`)
  const themePath_lightDarker = path.join(THEME_DIR, `${extensionName}-light-darker.json`)
  const themePath_white = path.join(THEME_DIR, `${extensionName}-white.json`)
  const themePath_whiteDarker = path.join(THEME_DIR, `${extensionName}-white-darker.json`)

  await Promise.all([
    fsp.writeFile(themePath, toJSON(json)),
    fsp.writeFile(themePath_light, toJSON(json_light)),
    fsp.writeFile(themePath_lightDarker, toJSON(json_lightDarker)),
    fsp.writeFile(themePath_white, toJSON(json_white)),
    fsp.writeFile(themePath_whiteDarker, toJSON(json_whiteDarker)),
  ])
}

module.exports = {
  build,
}

build()
