<!-- 
TODO 
• Add ## Colors used section
-->

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

### Dracula.min White

> **Contrast Ratio Target**: 4.5 

| Original (Dracula)                   | Hex       | Darkened                             | Hex       | Type                 | Ratio to Background | Difference         |
| ------------------------------------ | --------- | ------------------------------------ | --------- | -------------------- | ------------------- | ------------------ |
| <div style="color:#6272A4">■</div>   | #6272A4   | <div style="color:#425383">■</div>   | #425383   | COLOR8               | 7.044185460116278   | 71.49592219066405  |
| <div style="color:#8BE9FD">■</div>   | #8BE9FD   | <div style="color:#005d6f">■</div>   | #005d6f   | COLOR6               | 7.047743007316712   | 70.08887344718158  |
| <div style="color:#50FA7B">■</div>   | #50FA7B   | <div style="color:#006300">■</div>   | #006300   | COLOR2               | 7.074427451977054   | 71.52509777593237  |
| <div style="color:#FFB86C">■</div>   | #FFB86C   | <div style="color:#7d4800">■</div>   | #7d4800   | ORANGE               | 7.038524703864466   | 70.91112886919653  |
| <div style="color:#FF79C6">■</div>   | #FF79C6   | <div style="color:#9e156f">■</div>   | #9e156f   | COLOR5               | 7.0594967692047055  | 72.3848739326088   |
| <div style="color:#BD93F9">■</div>   | #BD93F9   | <div style="color:#64419e">■</div>   | #64419e   | COLOR4               | 7.056759646366045   | 72.71553583788163  |
| <div style="color:#FF5555">■</div>   | #FF5555   | <div style="color:#ad001c">■</div>   | #ad001c   | COLOR1               | 7.051941844362199   | 72.96503135353609  |
| <div style="color:#F1FA8C">■</div>   | #F1FA8C   | <div style="color:#4c5b00">■</div>   | #4c5b00   | COLOR3               | 7.026491341232648   | 70.27038560926759  |
| <div style="color:#21222C">■</div>   | #21222C   | <div style="color:#21222c">■</div>   | #21222c   | COLOR0               | 14.81404048857085   | 164.75521005041696 |
| <div style="color:#FF5555">■</div>   | #FF5555   | <div style="color:#ad001c">■</div>   | #ad001c   | COLOR1               | 7.051941844362199   | 72.96503135353609  |
| <div style="color:#50FA7B">■</div>   | #50FA7B   | <div style="color:#006300">■</div>   | #006300   | COLOR2               | 7.074427451977054   | 71.52509777593237  |
| <div style="color:#F1FA8C">■</div>   | #F1FA8C   | <div style="color:#4c5b00">■</div>   | #4c5b00   | COLOR3               | 7.026491341232648   | 70.27038560926759  |
| <div style="color:#BD93F9">■</div>   | #BD93F9   | <div style="color:#64419e">■</div>   | #64419e   | COLOR4               | 7.056759646366045   | 72.71553583788163  |
| <div style="color:#FF79C6">■</div>   | #FF79C6   | <div style="color:#9e156f">■</div>   | #9e156f   | COLOR5               | 7.0594967692047055  | 72.3848739326088   |
| <div style="color:#8BE9FD">■</div>   | #8BE9FD   | <div style="color:#005d6f">■</div>   | #005d6f   | COLOR6               | 7.047743007316712   | 70.08887344718158  |
| <div style="color:#6272A4">■</div>   | #6272A4   | <div style="color:#425383">■</div>   | #425383   | COLOR8               | 7.044185460116278   | 71.49592219066405  |
| <div style="color:#FF6E6E">■</div>   | #FF6E6E   | <div style="color:#a6192b">■</div>   | #a6192b   | COLOR9               | 7.04760595804694    | 72.32248064643363  |
| <div style="color:#69FF94">■</div>   | #69FF94   | <div style="color:#006300">■</div>   | #006300   | COLOR10              | 7.074427451977054   | 71.52509777593237  |
| <div style="color:#FFFFA5">■</div>   | #FFFFA5   | <div style="color:#535900">■</div>   | #535900   | COLOR11              | 7.044034570492541   | 70.344536689284    |
| <div style="color:#D6ACFF">■</div>   | #D6ACFF   | <div style="color:#67448e">■</div>   | #67448e   | COLOR12              | 7.050565865765938   | 71.96447727876726  |
| <div style="color:#FF92DF">■</div>   | #FF92DF   | <div style="color:#912a78">■</div>   | #912a78   | COLOR13              | 7.019948219683619   | 71.78905449335006  |
| <div style="color:#A4FFFF">■</div>   | #A4FFFF   | <div style="color:#005f60">■</div>   | #005f60   | COLOR14              | 7.0213447035024155  | 69.55854940627803  |
| <div style="color:#FFFFFF">■</div>   | #FFFFFF   | <div style="color:#555555">■</div>   | #555555   | WHITE                | 6.993813549251667   | 67.9468248434646   |
| <div style="color:#E9F284">■</div>   | #E9F284   | <div style="color:#4c5b00">■</div>   | #4c5b00   | TEMP_QUOTES          | 7.026491341232648   | 70.27038560926759  |
| <div style="color:#8BE9FE">■</div>   | #8BE9FE   | <div style="color:#005d70">■</div>   | #005d70   | TEMP_PROPERTY_QUOTES | 7.036588870643271   | 70.024873959901    |
| <div style="color:#44475A75">■</div> | #44475A75 | <div style="color:#44475a75">■</div> | #44475a75 | LineHighlight        | 8.585101622152614   | 83.93358823746557  |
| <div style="color:#FFFFFF">■</div>   | #FFFFFF   | <div style="color:#555555">■</div>   | #555555   | WHITE                | 6.993813549251667   | 67.9468248434646   |
| <div style="color:#44475A70">■</div> | #44475A70 | <div style="color:#44475a70">■</div> | #44475a70 | TAB_DROP_BG          | 8.585101622152614   | 83.93358823746557  | 8823746557 |

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
