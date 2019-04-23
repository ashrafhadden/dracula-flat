'use strict';

const { exec } = require('child_process');
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

    return { standardTheme, lightTheme };
}

function getLightThemeYAML(fileContent, standardTheme) {
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

    function getDateTime() {
        const date = new Date();
        let hour = date.getHours();
        hour = (hour < 10 ? '0' : '') + hour;
        let min = date.getMinutes();
        min = (min < 10 ? '0' : '') + min;
        let sec = date.getSeconds();
        sec = (sec < 10 ? '0' : '') + sec;
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        month = (month < 10 ? '0' : '') + month;
        let day = date.getDate();
        day = (day < 10 ? '0' : '') + day;
        return (
            year + ':' + month + ':' + day + ':' + hour + ':' + min + ':' + sec
        );
    }

    contrastReport.unshift({
        contrastRatioTarget: 4.5,
        created: getDateTime(),
    });
    console.log(inspect(contrastReport));
    fs.writeFileSync('contrastReport.js', inspect(contrastReport));
    exec('code contrastReport.js')
    exec('printf "done"')

    return fileContentModified;
}

module.exports = loadTheme;
