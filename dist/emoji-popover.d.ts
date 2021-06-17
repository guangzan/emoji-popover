export interface IEmojiItem {
  value: string
  label?: string
}

export interface IOptions {
  button: string
  container?: string
  targetElement: string
  emojiList: Array<IEmojiItem>
}

export declare class EmojiButton {
  private options
  constructor(options: IOptions)
  private _init(): void
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
