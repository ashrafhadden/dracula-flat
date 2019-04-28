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

## Light Theme Methodology

When I first attempted to create a Dracula Light theme I simply switched the background [`#282a36`](https://github.com/dracula/dracula-theme#color-palette) and foreground [`#f8f8f2`](https://github.com/dracula/dracula-theme#color-palette) colors to see what would hapen.

![Screenshot](<https://raw.githubusercontent.com/ashrafhadden/dracula-flat/master/screenshots/Dracula%20Flat%20Light%20(no%20contrast%20adjust).png>)

> Yellow is now nearly invisible

As it turns out, most dark theme colors only work for dark themes :man_shrugging: When you only switch the background and foreground the syntax hightlighting colors
are usually left with very poor contrast.

### [Chroma.js](https://vis4.net/chromajs) to the rescue!

Thanks to a powerful color manipulation library called [Chroma.js](https://github.com/gka/chroma.js), I was able to darken all the syntax colors using it's [color.darken()](https://vis4.net/chromajs/#color-darken) method.

<!-- SCREENSHOT -->

However as you can see, darkening all the syntax colors equally doesn't work so well. Some colors are left overdarkened, whereas others are still too bright. Darkening each color manually and checking by eye seemed like a lot of work, so being the lazy programmer that I am, I decided to try and automate it!

#### chroma.contrast()

Using Chroma's .contrast method I was able to create a [`while` loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) that darkened each color syntax color infinitely until it's contrast ratio reached at least 4.5.

```js
while (chroma.contrast(currentColor, foregroundColor) < 4.5) {
    currentColor = chroma(currentColor).darken(0.001); // lower = more accurate
}
```

## Special thanks to...

-   ![Derek S.](https://github.com/dsifford.png?size=16) [Derek Sifford](https://github.com/dsifford) for the fork and providing his automagical [dracula/visual-studio-code](https://github.com/dracula/visual-studio-code) build process
-   ![Derek S.](https://github.com/gka.png?size=16) [Gregor Aisch](https://github.com/gka) and his powerful color manipulation library [Chroma.js](https://vis4.net/chromajs/)

## Feedback

Let me know what you think! Feel free to open issues and PR's over at https://github.com/ashrafhadden/dracula-flat
