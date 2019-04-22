'use strict';

// const fs = require('fs');
const fsp = require('./fsp');
const chroma = require('chroma-js');
const { loadYAML } = require('./yaml');

/**
 * On dev mode, sometimes when we read the file the return value of readFile
 * is an empty string. In those cases we need to read the file again
 */
async function readFileRetrying(yamlFilePath) {
    const standardThemeYAML = await fsp.readFile(yamlFilePath, 'utf8');
    if (!standardThemeYAML) {
        return readFileRetrying(yamlFilePath);
    }
    return standardThemeYAML;
}

async function loadTheme(yamlFilePath) {
    const standardThemeYAML = await readFileRetrying(yamlFilePath);
    const standardTheme = await loadYAML(standardThemeYAML);

    const lightThemeYAML = getLightThemeYAML(standardThemeYAML, standardTheme);
    const lightTheme = await loadYAML(lightThemeYAML);

    return { standardTheme, lightTheme };
}

function getLightThemeYAML(fileContent, standardTheme) {
    // fs.writeFileSync('fileContentBefore.js', fileContent);
    const BG = standardTheme.dracula.base[0];
    const FG = standardTheme.dracula.base[1];
    const YELLOW = standardTheme.dracula.base[10];
    const ansiBrightYellow = standardTheme.dracula.ansi[11];

    const _backgroundColorsOther = standardTheme.dracula.other.slice(4, 6);
    const backgroundColors = [BG, ..._backgroundColorsOther];
    console.log(`backgroundColors = ${backgroundColors}`);

    return fileContent.replace(/#[0-9A-F]{6}/g, color => {
        if (color === '#FFFFFF') {
            return BG;
        } else if (backgroundColors.includes(color)) {
            // console.log(`${color} -> ${FG}`);
            return FG;
        }
        return chroma(color).darken(0.66);
    });

    // fs.writeFileSync('fileContentAfter.js', fileContent);
}

module.exports = loadTheme;
