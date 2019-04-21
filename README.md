<!-- TODO: Replace `Dark Reader Theme` link in Colors section w/ marketplace URL -->

# Dark Reader Theme for [Visual Studio Code](http://code.visualstudio.com)

> A dark theme for [Visual Studio Code](http://code.visualstudio.com)

- Dracula theme + Dark Reader background color
- Designed to match with my [Dark Reader chrome themes](https://www.themebeta.com/chrome/user/510929)

Also checkout...

- [DarkModeList.com](https://darkmodelist.com/)
- [awesome-dark-mode list](https://github.com/ashrafhadden/awesome-dark-mode)

![Screenshot](https://draculatheme.com/assets/img/screenshots/vscode.png)

## About

In my love for all things dark mode I decided to create a VSCode theme that would perfectly
match [Dark Reader](https://darkreader.org/) and my [Dark Reader chrome themes](https://www.themebeta.com/chrome/user/510929)
using my favorite syntax highlight colors [Dracula](https://draculatheme.com/).

I find that its much easier on the eyes when tabbing back and forth between Chrome and
VSCode when all the background colors are the same. Not to mention the pleasing effect
of having all your apps the same color!

### Colors

The only difference between [Dracula](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula)
and [Dark Reader Theme](https://github.com/ashrafhadden/dark-reader-theme) are the background colors which are listed here...

| Theme                                              | Hex       | RGB        | HSL            | ![Color Picker Boxes](https://draculatheme.com/assets/img/color-boxes/eyedropper.png) |
| -------------------------------------------------- | --------- | ---------- | -------------- | ------------------------------------------------------------------------------------- |
| Dracula                                            | `#282a36` | `40 42 54` | `231° 15% 18%` | ![Background Color](https://draculatheme.com/assets/img/color-boxes/background.png)   |
| Dark Reader Theme                                | `#181A1B` | `RGB`      | `HSL`          | colorimage                                                                            |
| Dark Reader Theme (Brightness +50)               | `#242729` | `RGB`      | `HSL`          | colorimage                                                                            |
| Dark Reader Theme (Brightness +50 contrast +25) | `#191b21` | `RGB`      | `HSL`          | colorimage                                                                            |

## Install

### Light Install
> For those who prefer [tweaking themes via settings](https://code.visualstudio.com/docs/getstarted/themes#_customizing-a-color-theme)

Paste the following into your `settings.json` and set the theme to [Dracula](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula).

```json
// settings.json
// ...

  "workbench.colorCustomizations": {
    "[Dracula]": {
      /// Dark Reader (Brightness +50)
      "breadcrumb.background": "#242729",
      "editor.background": "#242729",
      "editorGroupHeader.tabsBackground": "#242729",
      "panel.background": "#242729",
      "sideBar.background": "#242729",
      "sideBar.border": "#242729",
      "sideBarSectionHeader.background": "#242729",
      "sideBarSectionHeader.border": "#242729",
      "statusBar.background": "#242729",
      "statusBar.border": "#242729",
      "statusBar.noFolderBackground": "#242729",
      "tab.activeBackground": "#242729",
      "tab.border": "#242729",
      "tab.inactiveBackground": "#242729",
      "terminal.background": "#242729",
      "terminal.border": "#242729",
      "titleBar.activeBackground": "#242729",
      "titleBar.inactiveBackground": "#242729"
    }
  },
}

```
> To toggle it on and off just surround it and `Toggle Block Comment` ⇧⌥A

## Feedback

Let me know what you think! Feel free to open issues and PR's over at https://github.com/ashrafhadden/dark-reader-theme
