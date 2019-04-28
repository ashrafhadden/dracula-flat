<!-- TODO: Replace `Dracula Flat Theme` link in Colors section w/ marketplace URL -->

# [Flat](https://en.wikipedia.org/wiki/Flat_design)-style [Dracula](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula) theme for [VSCode](http://code.visualstudio.com)

## Dracula Flat

![Screenshot](https://raw.githubusercontent.com/ashrafhadden/dracula-flat/master/screenshots/Dracula%20Flat.png)

## Dracula Flat Light

![Screenshot](https://raw.githubusercontent.com/ashrafhadden/dracula-flat/master/screenshots/Dracula%20Flat%20Light.png)

## Dracula Flat Light Darker
> Same as Dracula Flat Light but with slightly darker syntax highlight colors

![Screenshot](https://raw.githubusercontent.com/ashrafhadden/dracula-flat/master/screenshots/Dracula%20Flat%20Light%20Darker.png)

## Install

<!-- ### Marketplace -->

### Quick Open <kbd>⌘</kbd> <kbd>P</kbd>
```
ext install ashrafhadden.dracula-flat
```

### Command Line
```bash
code --install-extension ashrafhadden.dracula-flat
```

### settings.json
> For those who prefer [tweaking themes via `settings.json`](https://code.visualstudio.com/docs/getstarted/themes#_customizing-a-color-theme)
> This has the added advantage of automatically including the latest Dracula Official theme updates as well as being able to customize at your leisure

> **Enable/Disable**: surround and `Toggle Block Comment` <kbd>⇧</kbd> <kbd>⌥</kbd> <kbd>A</kbd>

Paste the following into your `settings.json` and set VSCode theme to [Dracula](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula).


```jsonc
// settings.json
// ...

  "workbench.colorCustomizations": {
    "[Dracula]": {
      // https://github.com/ashrafhadden/dracula-flat#settingsjson
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
  },
}

```

## Methodology



## Feedback

Let me know what you think! Feel free to open issues and PR's over at https://github.com/ashrafhadden/dracula-flat
