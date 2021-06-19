## Emoji Popover

**[English](./README.md)** | 中文

Emoji Popover 是原生 JavaScript 构建的表情选择弹窗.

## 特性

- 📦 通过 brotli 压缩只有 0.7kb
- 💻 原生 JS, 没有任何依赖, 可用于任何框架
- 🙅‍ 没有集成任何表情
- ⚙️ 添加你的自定义表情，可以是系统表情、图片链接、或任何文本
- 🎨 使用 CSS 变量定制任何样式
- 🧩 使用插件扩展功能

## 浏览器支持

所有支持最新 JavaScript 功能的现代浏览器都支持 emojipopover。Internet Explorer 11 +。

## 安装 & 使用

如果你使用的是 yarn 或 npm 之类的包管理器，则可以直接从 npm 安装 **emoji-popover**：

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

如果你没有使用 NPM 或者 Yarn, 点击 [这里](https://github.com/guangzan/emoji-popover/tree/master/dist) 下载 `emoji-popover.iife.js` 和 `style.css`.

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

## 选项

### button

- 类型: string
- 默认值: '.e-btn'
- 是否必需: 不是, 如果你已经给 HTML 添加了 class `e-btn`。
- 描述：按钮选择器，单击此按钮弹出面板。

### container

- 类型: string
- 默认值: 'body'
- 是否必需: 不是
- 描述：容器选择器，放置 Emoji Popover 的容器。

### targetElement

- 类型: string
- 默认值: '.e-input'
- 是否必需: 不是, 如果你已经给 HTML 添加了 class `e-input`。
- 描述：输入框，表情符号弹出框将出现在它下面。

### emojiList

- 类型: Array\<object>
- 默认值: []
- 是否必需: 是的
- 描述：表情列表。系统表情、图像链接或任何文本。

### wrapClassName

- 类型: string
- 默认值: ''
- 是否必需: 不是
- 描述: Emoji Popover 自定义 class 名称。

### wrapAnimationClassName

- 类型: string
- 默认值: 'anim-scale-in'
- 是否必需: 不是
- 描述: Emoji Popover 显示或收起时的动画 class 名称。

## 方法

### onSelect

选择表情符号时触发传入的回调函数。

### toggle

关闭或打开 Emoji Popover。它接收一个 Boolean 类型的参数，如果参数为 true，Emoji Popover 将被打开。反之，则关闭。

## 样式

你可以重写这些 CSS 变量来定制样式。

```CSS
.emoji-wrap-1 {
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

如果有多个实例，你可以通过 css 变量作用域应用到指定实例。

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
