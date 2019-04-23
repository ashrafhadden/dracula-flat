'use strict';

const path = require('path');
const fsp = require('./fsp');
const loadThemes = require('./loadThemes');

const THEME_DIR = path.join(__dirname, '..', 'theme');
const THEME_YAML_FILE = path.join(__dirname, '..', 'src', 'dracula.yml');

function toJSON(theme) {
    return JSON.stringify(theme, null, 4);
}

async function build() {
    if (!(await fsp.exists(THEME_DIR))) {
        await fsp.mkdir(THEME_DIR);
    }

    const extensionName = 'dracula-flat'
    const { standardTheme, lightTheme, lightContrastTheme } = await loadThemes(THEME_YAML_FILE);
    const standardThemePath = path.join(THEME_DIR, `${extensionName}.json`);
    const lightThemePath = path.join(THEME_DIR, `${extensionName}-light.json`);
    const lightContrastThemePath = path.join(THEME_DIR, `${extensionName}-light-contrast.json`);

    await Promise.all([
        fsp.writeFile(standardThemePath, toJSON(standardTheme)),
        fsp.writeFile(lightThemePath, toJSON(lightTheme)),
        fsp.writeFile(lightContrastThemePath, toJSON(lightContrastTheme)),
    ]);
}

module.exports = {
    build,
};

build();
