'use strict';

const { inspect } = require('util');
const { loadYAML } = require('./yaml');
const chroma = require('chroma-js');
const fs = require('fs');
const fsp = require('./fsp');

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

    const lightDarkerThemeYAML = getLightDarkerThemeYAML(
        standardThemeYAML,
        standardTheme
    );
    const lightDarkerTheme = await loadYAML(lightDarkerThemeYAML);

    return { standardTheme, lightTheme, lightDarkerTheme };
}

function getLightThemeYAML(fileContent, standardTheme) {
    fs.writeFileSync('fileContent.yml', fileContent);
    fs.writeFileSync('standardTheme', inspect(standardTheme));
    const BG = standardTheme.dracula.base[0];
    const FG = standardTheme.dracula.base[1];

    const otherBG = standardTheme.dracula.other.slice(4, 6);
    const allBG = [BG, ...otherBG];

    let contrastReport = [];
    const regex = /#[0-9A-F]{3,}/gi; // https://regexr.com/4cue7
    const fileContentModified = fileContent.replace(regex, color => {
        // Replace Dracula Foreground w/ Background #F8F8F2 -> #282A36
        if (color === FG) return BG;
        if (allBG.includes(color)) return FG;

        // Darken colors until constrast ratio compliant with WCAG
        // https://vis4.net/chromajs/#chroma-contrast
        // Minimum (Level AA) 4.5
        // Enhanced (Level AAA) 7
        let originalColor = color;
        let timesDarkened = 0;
        while (chroma.contrast(color, FG) < 4.5) {
            timesDarkened++;
            color = chroma(color).darken(0.001); // lower = more accurate
        }
        contrastReport.push({
            Original: originalColor,
            Darkened: chroma(color).hex(),
            WCAG: chroma.contrast(color, FG),
            timesDarkened: timesDarkened,
        });

        return color;
    });

    contrastReport.unshift({
        theme: `${process.env.npm_package_name} Light`,
        contrastRatioTarget: 4.5,
    });
    fs.writeFileSync('contrastReport.js', inspect(contrastReport));

    return fileContentModified;
}

function getLightDarkerThemeYAML(fileContent, standardTheme) {
    const BG = standardTheme.dracula.base[0];
    const FG = standardTheme.dracula.base[1];

    const otherBG = standardTheme.dracula.other.slice(4, 6);
    const allBG = [BG, ...otherBG];

    let contrastReport = [];
    const fileContentModified = fileContent.replace(/#[0-9A-F]{6}/g, color => {
        if (color === FG) return BG; // invert Dracula foreground #F8F8F2
        if (allBG.includes(color)) return FG; // invert Dracula background #282A36

        // Darken colors until constrast ratio compliant with WCAG
        // https://vis4.net/chromajs/#chroma-contrast
        // Minimum (Level AA) 4.5
        // Enhanced (Level AAA) 7
        let originalColor = color;
        let timesDarkened = 0;
        while (chroma.contrast(color, FG) < 7) {
            timesDarkened++;
            color = chroma(color).darken(0.001); // lower = more accurate
        }
        contrastReport.push({
            Original: originalColor,
            Darkened: chroma(color).hex(),
            WCAG: chroma.contrast(color, FG),
            timesDarkened: timesDarkened,
        });

        return color;
    });

    contrastReport.unshift({
        theme: `${process.env.npm_package_name} Light Darker`,
        contrastRatioTarget: 7,
    });
    fs.writeFileSync('contrastReport2.js', inspect(contrastReport));

    return fileContentModified;
}

module.exports = loadTheme;
