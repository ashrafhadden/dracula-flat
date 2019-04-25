<!-- TODO: Replace `Dracula Flat Theme` link in Colors section w/ marketplace URL -->

# Dracula Flat Theme for [Visual Studio Code](http://code.visualstudio.com)

> A dark theme for [Visual Studio Code](http://code.visualstudio.com)

- Dracula theme + Dracula Flat background color
- Designed to match with my [Dracula Flat chrome themes](https://www.themebeta.com/chrome/user/510929)

Also checkout...

- [DarkModeList.com](https://darkmodelist.com/)
- [awesome-dark-mode list](https://github.com/ashrafhadden/awesome-dark-mode)

![Screenshot](https://draculatheme.com/assets/img/screenshots/vscode.png)

### Colors

The only difference between [Dracula](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula)
and [Dracula Flat Theme](https://github.com/ashrafhadden/dracula-flat-theme) are the background colors which are listed here...

| Theme                                              | Hex       | RGB        | HSL            | ![Color Picker Boxes](https://draculatheme.com/assets/img/color-boxes/eyedropper.png) |
| -------------------------------------------------- | --------- | ---------- | -------------- | ------------------------------------------------------------------------------------- |
| Dracula                                            | `#282a36` | `40 42 54` | `231° 15% 18%` | ![Background Color](https://draculatheme.com/assets/img/color-boxes/background.png)   |
| Dracula Flat Theme                                | `#181A1B` | `RGB`      | `HSL`          | colorimage                                                                            |
| Dracula Flat Theme (Brightness +50)               | `#242729` | `RGB`      | `HSL`          | colorimage                                                                            |
| Dracula Flat Theme (Brightness +50 contrast +25) | `#191b21` | `RGB`      | `HSL`          | colorimage                                                                            |

## Install

### Light Install
> For those who prefer [tweaking themes via settings](https://code.visualstudio.com/docs/getstarted/themes#_customizing-a-color-theme)
> This has the added advantage of automatically including the latest Dracula Official theme updates

Paste the following into your `settings.json` and set VSCode theme to [Dracula](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula).

```json
// settings.json
// ...

  "workbench.colorCustomizations": {
    "[Dracula]": {
      /// Dracula Flat (Brightness +50)
      "breadcrumb.background": "'#282A36",
      "editor.background": "'#282A36",
      "editorGroupHeader.tabsBackground": "'#282A36",
      "panel.background": "'#282A36",
      "sideBar.background": "'#282A36",
      "sideBar.border": "'#282A36",
      "sideBarSectionHeader.background": "'#282A36",
      "sideBarSectionHeader.border": "'#282A36",
      "statusBar.background": "'#282A36",
      "statusBar.border": "'#282A36",
      "statusBar.noFolderBackground": "'#282A36",
      "tab.activeBackground": "'#282A36",
      "tab.border": "'#282A36",
      "tab.inactiveBackground": "'#282A36",
      "terminal.background": "'#282A36",
      "terminal.border": "'#282A36",
      "titleBar.activeBackground": "'#282A36",
      "titleBar.inactiveBackground": "'#282A36"
    }
  },
}

```
> To toggle it on and off just surround it and `Toggle Block Comment` ⇧⌥A

## Feedback

Let me know what you think! Feel free to open issues and PR's over at https://github.com/ashrafhadden/dracula-flat-theme
