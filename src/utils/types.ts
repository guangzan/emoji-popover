export interface IEmojiItem {
  value: string
  label?: string
}

export interface IOptions {
  button: string
  container?: string
  targetElement: string
  emojiList: Array<IEmojiItem>
  wrapClassName?: string
  wrapAnimationClassName: string
}
