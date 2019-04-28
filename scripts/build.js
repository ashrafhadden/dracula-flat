'use strict';

const path = require('path');
const fsp = require('./fsp');
const loadThemes = require('./loadThemes');

const THEME_DIR = path.join(__dirname, '..', 'themes');
const THEME_YAML_FILE = path.join(__dirname, '..', 'src', 'dracula.yml');

function toJSON(theme) {
    return JSON.stringify(theme, null, 4);
}

async function build() {
    if (!(await fsp.exists(THEME_DIR))) {
        await fsp.mkdir(THEME_DIR);
    }

    const extensionName = process.env.npm_package_name
    const { standardTheme, lightTheme, lightDarkerTheme } = await loadThemes(THEME_YAML_FILE);
    const standardThemePath = path.join(THEME_DIR, `${extensionName}.json`);
    const lightThemePath = path.join(THEME_DIR, `${extensionName}-light.json`);
    const lightDarkerThemePath = path.join(THEME_DIR, `${extensionName}-light-darker.json`);

    await Promise.all([
        fsp.writeFile(standardThemePath, toJSON(standardTheme)),
        fsp.writeFile(lightThemePath, toJSON(lightTheme)),
        fsp.writeFile(lightDarkerThemePath, toJSON(lightDarkerTheme)),
    ]);
}

module.exports = {
    build,
};

build();
