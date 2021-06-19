## Emoji Popover

**English** | [中文](./README.zh-CN.md)

Vanilla JavaScript Emoji Popover.

## Features

- 📦 brotli: 0.7kb
- 💻 Vanilla JS, no dependency, use with any framework
- 🙅‍ No Emoji is integrated
- ⚙️ Add your own custom emojis, native, image or any text
- 🎨 Use CSS variables to define any style
- 🧩 Extend functionality with plugins

## Browser support

Emoji Popover is supported on all modern browsers supporting the latest JavaScript features. Internet Explorer 11 +.

## Installation & Usage

If you are using a package manager like `yarn` or `npm`, you can install **emoji-popover** directly from the npm:

```
npm i emoji-popover
```

```HTML
<input class="e-input" type="text" />
<button class="e-btn">Choose Emoji</button>
```

```JavaScript
import EmojiPopover from 'emoji-popover'
import '/node_modules/emoji-popover/dist/style.css'

const e1 = new EmojiPopover({
  button: '.e-btn',
  container: 'body',
  targetElement: '.e-input',
  emojiList: [
    {
      value: '🤣',
      label: 'laugh and cry',
    },
    {
      value: 'https://xxx.png',
      label: ''
    },
    {
      value: '(°∀°)ﾉ',
      label: '',
    },
  ],
})

e1.onSelect(value => {
  console.log(value)
})
```

If you don't use NPM or Yarn, click [here](https://github.com/guangzan/emoji-popover/tree/master/dist)
to download `emoji-popover.iife.js` and `style.css`.

```HTML
<link rel="stylesheet" href="xxx/style.css" />
<script src="xxx/emoji-popover.iife.js"></script>
```

```JavaScript
const e1 = new EmojiPopover({
    button: '.e-btn',
    container: 'body',
    targetElement: '.e-input',
    emojiList: [
        {
            value: '🤣',
            label: 'laugh and cry'
        },
        {
            value: 'https://xxx.png',
            label: ''
        },
        {
            value: '(°∀°)ﾉ',
            label: ''
        }
    ]
})

e1.onSelect(value => {
    console.log(value)
})
```

## Options

### button

- Type: string
- Default: '.e-btn'
- Necessary: No, if you have class `e-btn` in HTML.
- Description: Button selector, click this button to pop up the panel.

### container

- Type: string
- Default: 'body'
- Necessary: no
- Description: Container selector, the container where Emoji Popover is placed.

### targetElement

- Type: string
- Default: '.e-input'
- Necessary: No, if you have class `e-input` in HTML.
- Description: Input box, Emoji Popover will appear below it.

### emojiList

- Type: Array\<object>
- Default: []
- Necessary: Yes
- Description: Emoji list. native, image link or any text.

### wrapClassName

- Type: string
- Default: ''
- Necessary: No
- Description: Emoji Popover custom class.

### wrapAnimationClassName

- Type: string
- Default: 'anim-scale-in'
- Necessary: No
- Description: Emoji Popover toggle animation.

## Methods

### onSelect

Trigger callback function when selecting an emoji.

### toggle

Turn off or on Emoji Popover. It receives a parameter of type Boolean, if the parameter is true, Emoji Popover will be turned on, if false, Emoji Popover will be turned off.

## Style

You can override these CSS variables to customize the style.

```CSS
:root {
  --e-color-border: #e1e1e1; /* EmojiPopover border color */
  --e-color-emoji-text: #666; /* text emoji font color */
  --e-color-border-emoji-hover: #e1e1e1; /* emoji hover border color */
  --e-color-bg: #fff; /* EmojiPopover background color */
  --e-bg-emoji-hover: #f8f8f8; /* emoji hover background color */
  --e-size-emoji-text: 16px; /* text emoji font size */
  --e-width-emoji-img: 20px;  /* image emoji width */
  --e-height-emoji-img: 20px; /* image emoji height */
  --e-max-width: 288px; /* EmojiPopover max width */
}
```

If there are multiple instances, you can apply them to the specified instance through the CSS variable scope.

```CSS
.<custom-class-name> {
  --e-color-border: #e1e1e1; /* EmojiPopover border color */
  --e-color-emoji-text: #666; /* text emoji font color */
  --e-color-border-emoji-hover: #e1e1e1; /* emoji hover border color */
  --e-color-bg: #fff; /* EmojiPopover background color */
  --e-bg-emoji-hover: #f8f8f8; /* emoji hover background color */
  --e-size-emoji-text: 16px; /* text emoji font size */
  --e-width-emoji-img: 20px;  /* image emoji width */
  --e-height-emoji-img: 20px; /* image emoji height */
  --e-max-width: 288px; /* EmojiPopover max width */
}
```
