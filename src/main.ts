import { isUrl } from './utils/helper'
import { IEmojiItem, IOptions } from './utils/types'
import './index.scss'

class EmojiPopover {
  private options: IOptions
  private wrapClassName: string
  private wrapCount: number
  private wrapCountClassName: string

  constructor(private opts: IOptions) {
    const defaultOptions: IOptions = {
      container: 'body',
      button: '.e-btn',
      targetElement: '.e-input',
      emojiList: [],
      wrapClassName: '',
      wrapAnimationClassName: 'anim-scale-in'
    }

    this.options = Object.assign({}, defaultOptions, opts)
    this.wrapClassName = 'emoji-wrap'
    this.wrapCount = document.querySelectorAll('.emoji-wrap').length + 1
    this.wrapCountClassName = `emoji-wrap-${this.wrapCount}`

    this.init()
    this.createButtonListener()
  }

  /**
   * 初始化
   */
  private init(): void {
    const { emojiList, container, button, targetElement } = this.options

    const _emojiContainer = this.createEmojiContainer()
    const _emojiList = this.createEmojiList(emojiList)
    const _mask = this.createMask()
    _emojiContainer.appendChild(_emojiList)
    _emojiContainer.appendChild(_mask)

    const _targetElement = document.querySelector<HTMLElement>(targetElement)
    const { left, top, height } = _targetElement.getClientRects()[0]
    _emojiContainer.style.top = `${top + height + 12}px`
    _emojiContainer.style.left = `${left}px`

    const _container: HTMLElement = document.querySelector(container)
    _container.appendChild(_emojiContainer)
  }

  /**
   * 创建按钮事件
   */
  private createButtonListener(): void {
    const { button } = this.options
    const _button = document.querySelector<HTMLElement>(button)
    _button.addEventListener('click', () => this.toggle(true))
  }

  /**
   * 创建表情面板容器
   * @returns {HTMLDivElement}
   */
  private createEmojiContainer(): HTMLDivElement {
    const { wrapAnimationClassName, wrapClassName } = this.options
    const container: HTMLDivElement = document.createElement('div')
    container.classList.add(this.wrapClassName)
    container.classList.add(this.wrapCountClassName)
    container.classList.add(wrapAnimationClassName)
    if (wrapClassName !== '') {
      container.classList.add(wrapClassName)
    }
    return container
  }

  /**
   * 创建表情列表面板
   * @param {IEmojiItem} emojiList
   * @returns {HTMLDivElement}
   */
  private createEmojiList(emojiList: Array<IEmojiItem>) {
    const emojiWrap: HTMLDivElement = document.createElement('div')
    emojiWrap.classList.add('emoji-list')

    emojiList.forEach(item => {
      const emojiItem = this.createEmojiItem(item)
      emojiWrap.appendChild(emojiItem)
    })

    return emojiWrap
  }

  /**
   * 创建表情项
   * @param {IEmojiItem} itemData
   * @returns {HTMLDivElement}
   */
  private createEmojiItem(emojiItemData): HTMLDivElement {
    const { value, label } = emojiItemData
    const emojiContainer: HTMLDivElement = document.createElement('div')
    let emoji: HTMLImageElement | HTMLSpanElement

    if (isUrl(value)) {
      emoji = document.createElement('img')
      emoji.classList.add('emoji')
      emoji.classList.add('emoji-img')
      emoji.setAttribute('src', value)
    } else {
      emoji = document.createElement('span')
      emoji.classList.add('emoji')
      emoji.classList.add('emoji-text')
      emoji.innerText = value
    }

    emojiContainer.classList.add('emoji-item')
    emojiContainer.appendChild(emoji)

    if (typeof label === 'string') {
      emojiContainer.setAttribute('title', label)
    }

    return emojiContainer
  }

  /**
   * 创建表情面板蒙层
   * @returns {HTMLDivElement}
   */
  private createMask(): HTMLDivElement {
    const mask: HTMLDivElement = document.createElement('div')
    mask.classList.add('emoji-mask')
    mask.addEventListener('click', () => this.toggle(false))
    return mask
  }

  /**
   *  打开或关闭表情面板
   * @param isShow {boolean}
   */
  public toggle(isShow: boolean) {
    const emojiWrap: HTMLElement = document.querySelector(
      `.${this.wrapCountClassName}`
    )
    emojiWrap.style.display = isShow ? 'block' : 'none'
  }

  /**
   * 选择表情
   */
  public onSelect(callback) {
    const emojiItems = document.querySelectorAll(
      `.${this.wrapCountClassName} .emoji-item`
    )
    const _this = this

    emojiItems.forEach(function (item) {
      item.addEventListener('click', function (e: Event) {
        const currentTarget = e.currentTarget as HTMLElement
        let value

        if (currentTarget.children[0].classList.contains('emoji-img')) {
          value = currentTarget.children[0].getAttribute('src')
        } else {
          value = currentTarget.innerText
        }
        _this.toggle(false)
        callback(value)
      })
    })
  }
}

export default EmojiPopover
