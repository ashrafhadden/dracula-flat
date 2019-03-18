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
| Dark Reader Theme                                | `#17181c` | `RGB`      | `HSL`          | colorimage                                                                            |
| Dark Reader Theme (Brightness +50)               | `#23242a` | `RGB`      | `HSL`          | colorimage                                                                            |
| Dark Reader Theme (Brightness +50 Contrast +10) | `#191b21` | `RGB`      | `HSL`          | colorimage                                                                            |

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
      "breadcrumb.background": "#23242a",
      "editor.background": "#23242a",
      "editorGroupHeader.tabsBackground": "#23242a",
      "panel.background": "#23242a",
      "sideBar.background": "#23242a",
      "sideBar.border": "#23242a",
      "sideBarSectionHeader.background": "#23242a",
      "sideBarSectionHeader.border": "#23242a",
      "statusBar.background": "#23242a",
      "statusBar.border": "#23242a",
      "statusBar.noFolderBackground": "#23242a",
      "tab.activeBackground": "#23242a",
      "tab.border": "#23242a",
      "tab.inactiveBackground": "#23242a",
      "terminal.background": "#23242a",
      "terminal.border": "#23242a",
      "titleBar.activeBackground": "#23242a",
      "titleBar.inactiveBackground": "#23242a"
    }
  },
}

```
> To toggle it on and off just surround it and `Toggle Block Comment` ⇧⌥A

## Feedback

Let me know what you think! Feel free to open issues and PR's over at https://github.com/ashrafhadden/dark-reader-theme
