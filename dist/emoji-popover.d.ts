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
  wrapAnimationClassName?: string
}

export declare class EmojiButton {
  private options: IOptions
  private wrapClassName: string
  private wrapCount: number
  private wrapCountClassName: string

  constructor(options: IOptions)

  private init(): void
  private createButtonListener(): void
  private createEmojiContainer()
  private createEmojiList()
  private createEmojiItem()
  private createMask()
  /*
   * Toggle emoji popover.
   */
  public toggle(isShow: boolean): void
  /*
   * Listen to Choose an emoji.
   */
  public onSelect(callback: (value: string) => void): void
}

export default EmojiButton
