## introduction

Vanilla JavaScript emoji popover.

## Features

- 💻 Vanilla JS, no dependency, use with any framework
- 🙅‍ No Emoji is integrated
- ⚙️ Add your own custom emojis, native, image or any text
- 🎨 Use CSS variables to define any style
- 🧩 Extend functionality with plugins

## Installation & Usage

If you are using a package manager like `yarn` or `npm`, you can install **emoji-popover** directly from the npm registry:

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

If you don't use NPM or Yarn, click [here](https://github.com/guangzan/emoji-popover/dist)
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

## API

### button

- Type: string
- Default: '.e-btn'
- Necessary: No, if you have class `e-btn` in HTML.
- Description: Button selector, click this button to pop up the panel.

### container

- Type: string
- Default: 'body'
- Necessary: no
- Description: Container selector, the container where emoji popover is placed.

### targetElement

- Type: string
- Default: '.e-input'
- Necessary: No, if you have class `e-input` in HTML.
- Description: Input box, emoji popover will appear below it.

### emojiList

- Type: Array<object>
- Default: []
- Necessary: Yes
- Description: Emoji list, native, image link or any text.

## Browser support

Emoji Popover is supported on all modern browsers supporting the latest JavaScript features. Internet Explorer is not supported.
