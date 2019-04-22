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

    const extensionName = 'dracula-flat-theme'
    const { standardTheme, b50Theme, b50c25Theme } = await loadThemes(THEME_YAML_FILE);
    const standardThemePath = path.join(THEME_DIR, `${extensionName}.json`);
    const b50ThemePath = path.join(THEME_DIR, `${extensionName}-b50.json`);
    const b50c25ThemePath = path.join(THEME_DIR, `${extensionName}-b50-c25.json`);

    await Promise.all([
        fsp.writeFile(standardThemePath, toJSON(standardTheme)),
        fsp.writeFile(b50ThemePath, toJSON(b50Theme)),
        fsp.writeFile(b50c25ThemePath, toJSON(b50c25Theme)),
    ]);
}

module.exports = {
    build,
};

build();
