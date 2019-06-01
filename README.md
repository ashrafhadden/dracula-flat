# Dracula.min
_[Dracula](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula) minified 📦 Less GUI, more code._

Minimal 🌙Dark & 🔆Light themes for [VSCode](https://code.visualstudio.com)

- Flat
- Borderless
- All-one-color

Dracula.min is a minimal version of [Dracula Official](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula) for [VSCode](https://code.visualstudio.com/). I was inspired by the beautiful seamless style of [Material Theme](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme) which I fell in love with for its immersive feeling and distraction-free UI.

### Dracula.min 

![Dracula.min Screenshot](https://raw.githubusercontent.com/ashrafhadden/dracula.min/master/screenshots/dracula-dot-min.png)

### Dracula.min Light

![Dracula.min Light Screenshot](https://raw.githubusercontent.com/ashrafhadden/dracula.min/master/screenshots/dracula-dot-min-light.png)

### Dracula.min Light Darker

![Dracula.min Light Darker Screenshot](https://raw.githubusercontent.com/ashrafhadden/dracula.min/master/screenshots/dracula-dot-min-light-darker.png)

### Dracula.min White

![Dracula.min White Screenshot](https://raw.githubusercontent.com/ashrafhadden/dracula.min/master/screenshots/dracula-dot-min-white.png)

### Dracula.min White Darker

![Dracula.min White Darker Screenshot](https://raw.githubusercontent.com/ashrafhadden/dracula.min/master/screenshots/dracula-dot-min-white-darker.png)

## Install

### Marketplace

Go to this theme's VSCode Marketplace [extension page](https://marketplace.visualstudio.com/items?itemName=ashrafhadden.dracula-dot-min) and click `install`

### Quick Open <kbd>⌘</kbd> <kbd>P</kbd>

```
ext install ashrafhadden.dracula-dot-min
```

### Command Line

```bash
code --install-extension ashrafhadden.dracula-dot-min
```

### settings.json

For those who prefer [tweaking themes via `settings.json`](https://code.visualstudio.com/docs/getstarted/themes#_customizing-a-color-theme), here are all the settings you need to mimic this theme. This has the added advantage of automatically including the latest [Dracula Official](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula) theme updates.

**Enable/Disable**: surround and `Toggle Block Comment` <kbd>⇧</kbd> <kbd>⌥</kbd> <kbd>A</kbd>

1. Set theme to [Dracula](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula)
2. Paste the following into your `settings.json`...

```jsonc
// settings.json
// ...

  "workbench.colorCustomizations": {
    "[Dracula]": {
      // Dracula.min
      // https://github.com/ashrafhadden/dracula.min#settingsjson
      "breadcrumb.background": "#282a36",
      "editor.background": "#282a36",
      "editorGroupHeader.tabsBackground": "#282a36",
      "panel.background": "#282a36",
      "sideBar.background": "#282a36",
      "sideBar.border": "#282a36",
      "sideBarSectionHeader.background": "#282a36",
      "sideBarSectionHeader.border": "#282a36",
      "statusBar.background": "#282a36",
      "statusBar.border": "#282a36",
      "statusBar.noFolderBackground": "#282a36",
      "tab.activeBackground": "#282a36",
      "tab.border": "#282a36",
      "tab.inactiveBackground": "#282a36",
      "terminal.background": "#282a36",
      "terminal.border": "#282a36",
      "titleBar.activeBackground": "#282a36",
      "titleBar.inactiveBackground": "#282a36"
    }
  }
```

## Colors Used

### Light

| Name | [Original (Dracula)](https://github.com/dracula/visual-studio-code/blob/master/src/dracula.yml#L6) | Hex | Darkened | Hex | Ratio to Background (#282a36) |
|------|----------------------------------------------------------------------------------------------------|-----|----------|-----|-------------------------------------|
| COLOR8 | ![#6272a4](https://placehold.it/16/6272a4/000000?text=+) | #6272a4 | ![#6171a3](https://placehold.it/15/6171a3/000000?text=+) | #6171a3 | 4.5 |
| COLOR6 | ![#8be9fd](https://placehold.it/16/8be9fd/000000?text=+) | #8be9fd | ![#007e90](https://placehold.it/15/007e90/000000?text=+) | #007e90 | 4.5 |
| COLOR2 | ![#50fa7b](https://placehold.it/16/50fa7b/000000?text=+) | #50fa7b | ![#008504](https://placehold.it/15/008504/000000?text=+) | #008504 | 4.5 |
| ORANGE | ![#ffb86c](https://placehold.it/16/ffb86c/000000?text=+) | #ffb86c | ![#a0651b](https://placehold.it/15/a0651b/000000?text=+) | #a0651b | 4.5 |
| COLOR5 | ![#ff79c6](https://placehold.it/16/ff79c6/000000?text=+) | #ff79c6 | ![#c13f8e](https://placehold.it/15/c13f8e/000000?text=+) | #c13f8e | 4.5 |
| COLOR4 | ![#bd93f9](https://placehold.it/16/bd93f9/000000?text=+) | #bd93f9 | ![#855fbf](https://placehold.it/15/855fbf/000000?text=+) | #855fbf | 4.5 |
| COLOR1 | ![#ff5555](https://placehold.it/16/ff5555/000000?text=+) | #ff5555 | ![#d82f39](https://placehold.it/15/d82f39/000000?text=+) | #d82f39 | 4.5 |
| COLOR3 | ![#f1fa8c](https://placehold.it/16/f1fa8c/000000?text=+) | #f1fa8c | ![#6c7908](https://placehold.it/15/6c7908/000000?text=+) | #6c7908 | 4.5 |
| COLOR0 | ![#21222c](https://placehold.it/16/21222c/000000?text=+) | #21222c | ![#21222c](https://placehold.it/15/21222c/000000?text=+) | #21222c | 14.8 |
| COLOR1 | ![#ff5555](https://placehold.it/16/ff5555/000000?text=+) | #ff5555 | ![#d82f39](https://placehold.it/15/d82f39/000000?text=+) | #d82f39 | 4.5 |
| COLOR2 | ![#50fa7b](https://placehold.it/16/50fa7b/000000?text=+) | #50fa7b | ![#008504](https://placehold.it/15/008504/000000?text=+) | #008504 | 4.5 |
| COLOR3 | ![#f1fa8c](https://placehold.it/16/f1fa8c/000000?text=+) | #f1fa8c | ![#6c7908](https://placehold.it/15/6c7908/000000?text=+) | #6c7908 | 4.5 |
| COLOR4 | ![#bd93f9](https://placehold.it/16/bd93f9/000000?text=+) | #bd93f9 | ![#855fbf](https://placehold.it/15/855fbf/000000?text=+) | #855fbf | 4.5 |
| COLOR5 | ![#ff79c6](https://placehold.it/16/ff79c6/000000?text=+) | #ff79c6 | ![#c13f8e](https://placehold.it/15/c13f8e/000000?text=+) | #c13f8e | 4.5 |
| COLOR6 | ![#8be9fd](https://placehold.it/16/8be9fd/000000?text=+) | #8be9fd | ![#007e90](https://placehold.it/15/007e90/000000?text=+) | #007e90 | 4.5 |
| COLOR8 | ![#6272a4](https://placehold.it/16/6272a4/000000?text=+) | #6272a4 | ![#6171a3](https://placehold.it/15/6171a3/000000?text=+) | #6171a3 | 4.5 |
| COLOR9 | ![#ff6e6e](https://placehold.it/16/ff6e6e/000000?text=+) | #ff6e6e | ![#cb4046](https://placehold.it/15/cb4046/000000?text=+) | #cb4046 | 4.5 |
| COLOR10 | ![#69ff94](https://placehold.it/16/69ff94/000000?text=+) | #69ff94 | ![#008525](https://placehold.it/15/008525/000000?text=+) | #008525 | 4.5 |
| COLOR11 | ![#ffffa5](https://placehold.it/16/ffffa5/000000?text=+) | #ffffa5 | ![#727724](https://placehold.it/15/727724/000000?text=+) | #727724 | 4.5 |
| COLOR12 | ![#d6acff](https://placehold.it/16/d6acff/000000?text=+) | #d6acff | ![#8762ae](https://placehold.it/15/8762ae/000000?text=+) | #8762ae | 4.5 |
| COLOR13 | ![#ff92df](https://placehold.it/16/ff92df/000000?text=+) | #ff92df | ![#b34b97](https://placehold.it/15/b34b97/000000?text=+) | #b34b97 | 4.5 |
| COLOR14 | ![#a4ffff](https://placehold.it/16/a4ffff/000000?text=+) | #a4ffff | ![#157f80](https://placehold.it/15/157f80/000000?text=+) | #157f80 | 4.5 |
| WHITE | ![#ffffff](https://placehold.it/16/ffffff/000000?text=+) | #ffffff | ![#727272](https://placehold.it/15/727272/000000?text=+) | #727272 | 4.5 |
| TEMP_QUOTES | ![#e9f284](https://placehold.it/16/e9f284/000000?text=+) | #e9f284 | ![#6c7907](https://placehold.it/15/6c7907/000000?text=+) | #6c7907 | 4.5 |
| TEMP_PROPERTY_QUOTES | ![#8be9fe](https://placehold.it/16/8be9fe/000000?text=+) | #8be9fe | ![#007e91](https://placehold.it/15/007e91/000000?text=+) | #007e91 | 4.5 |
| LineHighlight | ![#44475a75](https://placehold.it/16/44475a75/000000?text=+) | #44475a75 | ![#44475a75](https://placehold.it/15/44475a75/000000?text=+) | #44475a75 | 8.6 |
| WHITE | ![#ffffff](https://placehold.it/16/ffffff/000000?text=+) | #ffffff | ![#727272](https://placehold.it/15/727272/000000?text=+) | #727272 | 4.5 |
| TAB_DROP_BG | ![#44475a70](https://placehold.it/16/44475a70/000000?text=+) | #44475a70 | ![#44475a70](https://placehold.it/15/44475a70/000000?text=+) | #44475a70 | 8.6 |

### Light Darker

| Name | [Original (Dracula)](https://github.com/dracula/visual-studio-code/blob/master/src/dracula.yml#L6) | Hex | Darkened | Hex | Ratio to Background (#282a36) |
|------|----------------------------------------------------------------------------------------------------|-----|----------|-----|-------------------------------------|
| COLOR8 | ![#6272a4](https://placehold.it/16/6272a4/000000?text=+) | #6272a4 | ![#425483](https://placehold.it/15/425483/000000?text=+) | #425483 | 7 |
| COLOR6 | ![#8be9fd](https://placehold.it/16/8be9fd/000000?text=+) | #8be9fd | ![#005d6f](https://placehold.it/15/005d6f/000000?text=+) | #005d6f | 7 |
| COLOR2 | ![#50fa7b](https://placehold.it/16/50fa7b/000000?text=+) | #50fa7b | ![#006400](https://placehold.it/15/006400/000000?text=+) | #006400 | 7 |
| ORANGE | ![#ffb86c](https://placehold.it/16/ffb86c/000000?text=+) | #ffb86c | ![#7d4800](https://placehold.it/15/7d4800/000000?text=+) | #7d4800 | 7 |
| COLOR5 | ![#ff79c6](https://placehold.it/16/ff79c6/000000?text=+) | #ff79c6 | ![#9f1670](https://placehold.it/15/9f1670/000000?text=+) | #9f1670 | 7 |
| COLOR4 | ![#bd93f9](https://placehold.it/16/bd93f9/000000?text=+) | #bd93f9 | ![#64429e](https://placehold.it/15/64429e/000000?text=+) | #64429e | 7 |
| COLOR1 | ![#ff5555](https://placehold.it/16/ff5555/000000?text=+) | #ff5555 | ![#ae001c](https://placehold.it/15/ae001c/000000?text=+) | #ae001c | 7 |
| COLOR3 | ![#f1fa8c](https://placehold.it/16/f1fa8c/000000?text=+) | #f1fa8c | ![#4c5b00](https://placehold.it/15/4c5b00/000000?text=+) | #4c5b00 | 7 |
| COLOR0 | ![#21222c](https://placehold.it/16/21222c/000000?text=+) | #21222c | ![#21222c](https://placehold.it/15/21222c/000000?text=+) | #21222c | 14.8 |
| COLOR1 | ![#ff5555](https://placehold.it/16/ff5555/000000?text=+) | #ff5555 | ![#ae001c](https://placehold.it/15/ae001c/000000?text=+) | #ae001c | 7 |
| COLOR2 | ![#50fa7b](https://placehold.it/16/50fa7b/000000?text=+) | #50fa7b | ![#006400](https://placehold.it/15/006400/000000?text=+) | #006400 | 7 |
| COLOR3 | ![#f1fa8c](https://placehold.it/16/f1fa8c/000000?text=+) | #f1fa8c | ![#4c5b00](https://placehold.it/15/4c5b00/000000?text=+) | #4c5b00 | 7 |
| COLOR4 | ![#bd93f9](https://placehold.it/16/bd93f9/000000?text=+) | #bd93f9 | ![#64429e](https://placehold.it/15/64429e/000000?text=+) | #64429e | 7 |
| COLOR5 | ![#ff79c6](https://placehold.it/16/ff79c6/000000?text=+) | #ff79c6 | ![#9f1670](https://placehold.it/15/9f1670/000000?text=+) | #9f1670 | 7 |
| COLOR6 | ![#8be9fd](https://placehold.it/16/8be9fd/000000?text=+) | #8be9fd | ![#005d6f](https://placehold.it/15/005d6f/000000?text=+) | #005d6f | 7 |
| COLOR8 | ![#6272a4](https://placehold.it/16/6272a4/000000?text=+) | #6272a4 | ![#425483](https://placehold.it/15/425483/000000?text=+) | #425483 | 7 |
| COLOR9 | ![#ff6e6e](https://placehold.it/16/ff6e6e/000000?text=+) | #ff6e6e | ![#a7192c](https://placehold.it/15/a7192c/000000?text=+) | #a7192c | 7 |
| COLOR10 | ![#69ff94](https://placehold.it/16/69ff94/000000?text=+) | #69ff94 | ![#006400](https://placehold.it/15/006400/000000?text=+) | #006400 | 7 |
| COLOR11 | ![#ffffa5](https://placehold.it/16/ffffa5/000000?text=+) | #ffffa5 | ![#535901](https://placehold.it/15/535901/000000?text=+) | #535901 | 7 |
| COLOR12 | ![#d6acff](https://placehold.it/16/d6acff/000000?text=+) | #d6acff | ![#68448e](https://placehold.it/15/68448e/000000?text=+) | #68448e | 7 |
| COLOR13 | ![#ff92df](https://placehold.it/16/ff92df/000000?text=+) | #ff92df | ![#912a78](https://placehold.it/15/912a78/000000?text=+) | #912a78 | 7 |
| COLOR14 | ![#a4ffff](https://placehold.it/16/a4ffff/000000?text=+) | #a4ffff | ![#005f60](https://placehold.it/15/005f60/000000?text=+) | #005f60 | 7 |
| WHITE | ![#ffffff](https://placehold.it/16/ffffff/000000?text=+) | #ffffff | ![#555555](https://placehold.it/15/555555/000000?text=+) | #555555 | 7 |
| TEMP_QUOTES | ![#e9f284](https://placehold.it/16/e9f284/000000?text=+) | #e9f284 | ![#4c5b00](https://placehold.it/15/4c5b00/000000?text=+) | #4c5b00 | 7 |
| TEMP_PROPERTY_QUOTES | ![#8be9fe](https://placehold.it/16/8be9fe/000000?text=+) | #8be9fe | ![#005d70](https://placehold.it/15/005d70/000000?text=+) | #005d70 | 7 |
| LineHighlight | ![#44475a75](https://placehold.it/16/44475a75/000000?text=+) | #44475a75 | ![#44475a75](https://placehold.it/15/44475a75/000000?text=+) | #44475a75 | 8.6 |
| WHITE | ![#ffffff](https://placehold.it/16/ffffff/000000?text=+) | #ffffff | ![#555555](https://placehold.it/15/555555/000000?text=+) | #555555 | 7 |
| TAB_DROP_BG | ![#44475a70](https://placehold.it/16/44475a70/000000?text=+) | #44475a70 | ![#44475a70](https://placehold.it/15/44475a70/000000?text=+) | #44475a70 | 8.6 |

### White

| Name | [Original (Dracula)](https://github.com/dracula/visual-studio-code/blob/master/src/dracula.yml#L6) | Hex | Darkened | Hex | Ratio to Background (#ffffff) |
|------|----------------------------------------------------------------------------------------------------|-----|----------|-----|-------------------------------------|
| COLOR8 | ![#6272a4](https://placehold.it/16/6272a4/000000?text=+) | #6272a4 | ![#6171a3](https://placehold.it/15/6171a3/000000?text=+) | #6171a3 | 4.5 |
| COLOR6 | ![#8be9fd](https://placehold.it/16/8be9fd/000000?text=+) | #8be9fd | ![#007e90](https://placehold.it/15/007e90/000000?text=+) | #007e90 | 4.5 |
| COLOR2 | ![#50fa7b](https://placehold.it/16/50fa7b/000000?text=+) | #50fa7b | ![#008504](https://placehold.it/15/008504/000000?text=+) | #008504 | 4.5 |
| ORANGE | ![#ffb86c](https://placehold.it/16/ffb86c/000000?text=+) | #ffb86c | ![#a0651b](https://placehold.it/15/a0651b/000000?text=+) | #a0651b | 4.5 |
| COLOR5 | ![#ff79c6](https://placehold.it/16/ff79c6/000000?text=+) | #ff79c6 | ![#c13f8e](https://placehold.it/15/c13f8e/000000?text=+) | #c13f8e | 4.5 |
| COLOR4 | ![#bd93f9](https://placehold.it/16/bd93f9/000000?text=+) | #bd93f9 | ![#855fbf](https://placehold.it/15/855fbf/000000?text=+) | #855fbf | 4.5 |
| COLOR1 | ![#ff5555](https://placehold.it/16/ff5555/000000?text=+) | #ff5555 | ![#d82f39](https://placehold.it/15/d82f39/000000?text=+) | #d82f39 | 4.5 |
| COLOR3 | ![#f1fa8c](https://placehold.it/16/f1fa8c/000000?text=+) | #f1fa8c | ![#6c7908](https://placehold.it/15/6c7908/000000?text=+) | #6c7908 | 4.5 |
| COLOR0 | ![#21222c](https://placehold.it/16/21222c/000000?text=+) | #21222c | ![#21222c](https://placehold.it/15/21222c/000000?text=+) | #21222c | 14.8 |
| COLOR1 | ![#ff5555](https://placehold.it/16/ff5555/000000?text=+) | #ff5555 | ![#d82f39](https://placehold.it/15/d82f39/000000?text=+) | #d82f39 | 4.5 |
| COLOR2 | ![#50fa7b](https://placehold.it/16/50fa7b/000000?text=+) | #50fa7b | ![#008504](https://placehold.it/15/008504/000000?text=+) | #008504 | 4.5 |
| COLOR3 | ![#f1fa8c](https://placehold.it/16/f1fa8c/000000?text=+) | #f1fa8c | ![#6c7908](https://placehold.it/15/6c7908/000000?text=+) | #6c7908 | 4.5 |
| COLOR4 | ![#bd93f9](https://placehold.it/16/bd93f9/000000?text=+) | #bd93f9 | ![#855fbf](https://placehold.it/15/855fbf/000000?text=+) | #855fbf | 4.5 |
| COLOR5 | ![#ff79c6](https://placehold.it/16/ff79c6/000000?text=+) | #ff79c6 | ![#c13f8e](https://placehold.it/15/c13f8e/000000?text=+) | #c13f8e | 4.5 |
| COLOR6 | ![#8be9fd](https://placehold.it/16/8be9fd/000000?text=+) | #8be9fd | ![#007e90](https://placehold.it/15/007e90/000000?text=+) | #007e90 | 4.5 |
| COLOR8 | ![#6272a4](https://placehold.it/16/6272a4/000000?text=+) | #6272a4 | ![#6171a3](https://placehold.it/15/6171a3/000000?text=+) | #6171a3 | 4.5 |
| COLOR9 | ![#ff6e6e](https://placehold.it/16/ff6e6e/000000?text=+) | #ff6e6e | ![#cb4046](https://placehold.it/15/cb4046/000000?text=+) | #cb4046 | 4.5 |
| COLOR10 | ![#69ff94](https://placehold.it/16/69ff94/000000?text=+) | #69ff94 | ![#008525](https://placehold.it/15/008525/000000?text=+) | #008525 | 4.5 |
| COLOR11 | ![#ffffa5](https://placehold.it/16/ffffa5/000000?text=+) | #ffffa5 | ![#727724](https://placehold.it/15/727724/000000?text=+) | #727724 | 4.5 |
| COLOR12 | ![#d6acff](https://placehold.it/16/d6acff/000000?text=+) | #d6acff | ![#8762ae](https://placehold.it/15/8762ae/000000?text=+) | #8762ae | 4.5 |
| COLOR13 | ![#ff92df](https://placehold.it/16/ff92df/000000?text=+) | #ff92df | ![#b34b97](https://placehold.it/15/b34b97/000000?text=+) | #b34b97 | 4.5 |
| COLOR14 | ![#a4ffff](https://placehold.it/16/a4ffff/000000?text=+) | #a4ffff | ![#157f80](https://placehold.it/15/157f80/000000?text=+) | #157f80 | 4.5 |
| WHITE | ![#ffffff](https://placehold.it/16/ffffff/000000?text=+) | #ffffff | ![#727272](https://placehold.it/15/727272/000000?text=+) | #727272 | 4.5 |
| TEMP_QUOTES | ![#e9f284](https://placehold.it/16/e9f284/000000?text=+) | #e9f284 | ![#6c7907](https://placehold.it/15/6c7907/000000?text=+) | #6c7907 | 4.5 |
| TEMP_PROPERTY_QUOTES | ![#8be9fe](https://placehold.it/16/8be9fe/000000?text=+) | #8be9fe | ![#007e91](https://placehold.it/15/007e91/000000?text=+) | #007e91 | 4.5 |
| LineHighlight | ![#44475a75](https://placehold.it/16/44475a75/000000?text=+) | #44475a75 | ![#44475a75](https://placehold.it/15/44475a75/000000?text=+) | #44475a75 | 8.6 |
| WHITE | ![#ffffff](https://placehold.it/16/ffffff/000000?text=+) | #ffffff | ![#727272](https://placehold.it/15/727272/000000?text=+) | #727272 | 4.5 |
| TAB_DROP_BG | ![#44475a70](https://placehold.it/16/44475a70/000000?text=+) | #44475a70 | ![#44475a70](https://placehold.it/15/44475a70/000000?text=+) | #44475a70 | 8.6 |

### White Darker

| Name | [Original (Dracula)](https://github.com/dracula/visual-studio-code/blob/master/src/dracula.yml#L6) | Hex | Darkened | Hex | Ratio to Background (#ffffff) |
|------|----------------------------------------------------------------------------------------------------|-----|----------|-----|-------------------------------------|
| COLOR8 | ![#6272a4](https://placehold.it/16/6272a4/000000?text=+) | #6272a4 | ![#425483](https://placehold.it/15/425483/000000?text=+) | #425483 | 7 |
| COLOR6 | ![#8be9fd](https://placehold.it/16/8be9fd/000000?text=+) | #8be9fd | ![#005d6f](https://placehold.it/15/005d6f/000000?text=+) | #005d6f | 7 |
| COLOR2 | ![#50fa7b](https://placehold.it/16/50fa7b/000000?text=+) | #50fa7b | ![#006400](https://placehold.it/15/006400/000000?text=+) | #006400 | 7 |
| ORANGE | ![#ffb86c](https://placehold.it/16/ffb86c/000000?text=+) | #ffb86c | ![#7d4800](https://placehold.it/15/7d4800/000000?text=+) | #7d4800 | 7 |
| COLOR5 | ![#ff79c6](https://placehold.it/16/ff79c6/000000?text=+) | #ff79c6 | ![#9f1670](https://placehold.it/15/9f1670/000000?text=+) | #9f1670 | 7 |
| COLOR4 | ![#bd93f9](https://placehold.it/16/bd93f9/000000?text=+) | #bd93f9 | ![#64429e](https://placehold.it/15/64429e/000000?text=+) | #64429e | 7 |
| COLOR1 | ![#ff5555](https://placehold.it/16/ff5555/000000?text=+) | #ff5555 | ![#ae001c](https://placehold.it/15/ae001c/000000?text=+) | #ae001c | 7 |
| COLOR3 | ![#f1fa8c](https://placehold.it/16/f1fa8c/000000?text=+) | #f1fa8c | ![#4c5b00](https://placehold.it/15/4c5b00/000000?text=+) | #4c5b00 | 7 |
| COLOR0 | ![#21222c](https://placehold.it/16/21222c/000000?text=+) | #21222c | ![#21222c](https://placehold.it/15/21222c/000000?text=+) | #21222c | 14.8 |
| COLOR1 | ![#ff5555](https://placehold.it/16/ff5555/000000?text=+) | #ff5555 | ![#ae001c](https://placehold.it/15/ae001c/000000?text=+) | #ae001c | 7 |
| COLOR2 | ![#50fa7b](https://placehold.it/16/50fa7b/000000?text=+) | #50fa7b | ![#006400](https://placehold.it/15/006400/000000?text=+) | #006400 | 7 |
| COLOR3 | ![#f1fa8c](https://placehold.it/16/f1fa8c/000000?text=+) | #f1fa8c | ![#4c5b00](https://placehold.it/15/4c5b00/000000?text=+) | #4c5b00 | 7 |
| COLOR4 | ![#bd93f9](https://placehold.it/16/bd93f9/000000?text=+) | #bd93f9 | ![#64429e](https://placehold.it/15/64429e/000000?text=+) | #64429e | 7 |
| COLOR5 | ![#ff79c6](https://placehold.it/16/ff79c6/000000?text=+) | #ff79c6 | ![#9f1670](https://placehold.it/15/9f1670/000000?text=+) | #9f1670 | 7 |
| COLOR6 | ![#8be9fd](https://placehold.it/16/8be9fd/000000?text=+) | #8be9fd | ![#005d6f](https://placehold.it/15/005d6f/000000?text=+) | #005d6f | 7 |
| COLOR8 | ![#6272a4](https://placehold.it/16/6272a4/000000?text=+) | #6272a4 | ![#425483](https://placehold.it/15/425483/000000?text=+) | #425483 | 7 |
| COLOR9 | ![#ff6e6e](https://placehold.it/16/ff6e6e/000000?text=+) | #ff6e6e | ![#a7192c](https://placehold.it/15/a7192c/000000?text=+) | #a7192c | 7 |
| COLOR10 | ![#69ff94](https://placehold.it/16/69ff94/000000?text=+) | #69ff94 | ![#006400](https://placehold.it/15/006400/000000?text=+) | #006400 | 7 |
| COLOR11 | ![#ffffa5](https://placehold.it/16/ffffa5/000000?text=+) | #ffffa5 | ![#535901](https://placehold.it/15/535901/000000?text=+) | #535901 | 7 |
| COLOR12 | ![#d6acff](https://placehold.it/16/d6acff/000000?text=+) | #d6acff | ![#68448e](https://placehold.it/15/68448e/000000?text=+) | #68448e | 7 |
| COLOR13 | ![#ff92df](https://placehold.it/16/ff92df/000000?text=+) | #ff92df | ![#912a78](https://placehold.it/15/912a78/000000?text=+) | #912a78 | 7 |
| COLOR14 | ![#a4ffff](https://placehold.it/16/a4ffff/000000?text=+) | #a4ffff | ![#005f60](https://placehold.it/15/005f60/000000?text=+) | #005f60 | 7 |
| WHITE | ![#ffffff](https://placehold.it/16/ffffff/000000?text=+) | #ffffff | ![#555555](https://placehold.it/15/555555/000000?text=+) | #555555 | 7 |
| TEMP_QUOTES | ![#e9f284](https://placehold.it/16/e9f284/000000?text=+) | #e9f284 | ![#4c5b00](https://placehold.it/15/4c5b00/000000?text=+) | #4c5b00 | 7 |
| TEMP_PROPERTY_QUOTES | ![#8be9fe](https://placehold.it/16/8be9fe/000000?text=+) | #8be9fe | ![#005d70](https://placehold.it/15/005d70/000000?text=+) | #005d70 | 7 |
| LineHighlight | ![#44475a75](https://placehold.it/16/44475a75/000000?text=+) | #44475a75 | ![#44475a75](https://placehold.it/15/44475a75/000000?text=+) | #44475a75 | 8.6 |
| WHITE | ![#ffffff](https://placehold.it/16/ffffff/000000?text=+) | #ffffff | ![#555555](https://placehold.it/15/555555/000000?text=+) | #555555 | 7 |
| TAB_DROP_BG | ![#44475a70](https://placehold.it/16/44475a70/000000?text=+) | #44475a70 | ![#44475a70](https://placehold.it/15/44475a70/000000?text=+) | #44475a70 | 8.6 |

## Light Theme Methodology

When I first attempted to create a Dracula Light theme I simply switched the background [`#282a36`](https://github.com/dracula/dracula-theme#color-palette) and foreground [`#f8f8f2`](https://github.com/dracula/dracula-theme#color-palette) colors to see what would hapen.

![Dracula.min Light (no contrast adjust) Screenshot](https://raw.githubusercontent.com/ashrafhadden/dracula.min/master/screenshots/dracula-dot-min-light_no_contrast_adjust.png)

As it turns out, most dark theme colors only work for dark themes 🤷‍♂️ When you only switch the background and foreground, the syntax hightlighting colors
are often left with very poor contrast. In the screenshot above, Yellow is nearly invisible.

### [Chroma.js](https://vis4.net/chromajs) to the rescue!

Thanks to the powerful color manipulation library [Chroma.js](https://github.com/gka/chroma.js), I was able to darken all the syntax colors using it's [color.darken()](https://vis4.net/chromajs/#color-darken) method.

```js
currentColor = chroma(currentColor).darken(1.5);
```

![Dracula.min (darken equally) Screenshot](https://raw.githubusercontent.com/ashrafhadden/dracula.min/master/screenshots/dracula-dot-min_darken_equally.png)

However as you can see, darkening all the syntax colors equally doesn't quite cut it. The yellows are still a bit too light and the file explorer selection highlight on the left is difficult to see. Darkening each color manually and checking by eye seemed like hard work 👀, so being the lazy programmer that I am, I decided to try and automate it!

![patrick technology GIF](https://media1.tenor.com/images/b7a43f2a884a5469c505b3b0838b6aa2/tenor.gif?itemid=5567497)

#### [chroma.contrast()](https://vis4.net/chromajs/#chroma-contrast)

Using Chroma's [.contrast method](https://vis4.net/chromajs/#chroma-contrast) I was able to create a [`while` loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) that darkened each syntax color indefinitely until it's contrast ratio reached 4.5. 4.5:1 is the WCAG's [_"Contrast (Minimum)"_](https://www.w3.org/TR/WCAG21/#contrast-minimum) recommendation for text.

```js
while (chroma.contrast(currentColor, foregroundColor) < 4.5) {
    currentColor = chroma(currentColor).darken(0.001);
}
```

> While the contrast ratio between `currentColor` and `foregroundColor` is less than 4.5, darken the `currentColor` by 0.1%

Which results in [Dracula.min Light](#dracula.min-Light).

### Light Theme Darker

The WCAG also has a AAA or [_"Contrast (Enhanced)"_](https://www.w3.org/TR/WCAG21/#contrast-enhanced) recommendation of 7:1. Using the same method as above we can do the following to create a slightly darker syntax variant of the Light Theme:

```js
while (chroma.contrast(currentColor, foregroundColor) < 7) {
    currentColor = chroma(currentColor).darken(0.001);
}
```

Which results in [Dracula.min Light Darker](#dracula.min-Light-Darker).
This provides an even darker color syntax for those who prefer it.

## Learn more about WCAG

-   [Color contrast checker playground](https://webaim.org/resources/contrastchecker/)
-   [Accessible color palette generator](http://colorsafe.co/)
-   [Fantastic human-readable article on Contrast and Color Accessibility](https://webaim.org/articles/contrast/)
-   Gregor Aisch's articles on his inspiration behind Chroma.js
    -   [How To Avoid Equidistant HSV Colors](https://www.vis4.net/blog/2011/12/avoid-equidistant-hsv-colors/)
    -   [Mastering Multi-hued Color Scales with Chroma.js](https://www.vis4.net/blog/2013/09/mastering-multi-hued-color-scales/)

## Roadmap
- Settings to control which themes are visible and registered (declutter themepicker menu)

## Special thanks to...

-   ![Derek Sifford](https://github.com/dsifford.png?size=16) [Derek Sifford](https://github.com/dsifford) for [dracula/visual-studio-code](https://github.com/dracula/visual-studio-code) and his auto-magical build process
-   ![Gregor Aisch](https://github.com/gka.png?size=16) [Gregor Aisch](https://github.com/gka) and his passion for colors that led to [Chroma.js](https://vis4.net/chromajs/)

## Feedback

Let me know what you think! Feel free to open issues and PR's over at https://github.com/ashrafhadden/dracula.min
