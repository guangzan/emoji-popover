import { isUrl } from './utils/helper'
import { IEmojiItem, IOptions } from './utils/types'
import './index.scss'

class EmojiPopover {
  options: IOptions

  constructor(private opts: IOptions) {
    const defaultOptions: IOptions = {
      container: 'body',
      button: '.e-btn',
      targetElement: '.e-input',
      emojiList: []
    }

    this.options = Object.assign({}, defaultOptions, opts)
    this._init()

    const _mask = document.querySelector<HTMLElement>('.emoji-mask')
    _mask.addEventListener('click', () => this.toggle(false))

    const { button } = this.options
    const _button = document.querySelector<HTMLElement>(button)
    _button.addEventListener('click', () => this.toggle(true))
  }

  private _init() {
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
   * 创建表情面板容器
   * @returns {JQuery Object}
   */
  private createEmojiContainer() {
    const container: HTMLElement = document.createElement('div')
    container.classList.add('emoji-wrap')
    container.classList.add('anim-scale-in')
    return container
  }

  /**
   * 创建表情列表面板
   * @param {Array} emojiList
   * @returns {JQuery Object}
   */
  private createEmojiList(emojiList) {
    const emojiWrap: HTMLElement = document.createElement('div')
    emojiWrap.classList.add('emoji-list')

    emojiList.forEach(item => {
      const emojiItem = this.createEmojiItem(item)
      emojiWrap.appendChild(emojiItem)
    })

    return emojiWrap
  }

  /**
   * 创建表情项
   * @param {Object} itemData
   * @returns
   */
  private createEmojiItem(itemData): HTMLElement {
    const { value, label } = itemData
    const emojiContainer: HTMLElement = document.createElement('div')
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
   * @returns @returns {JQuery Object}
   */
  private createMask() {
    const mask = document.createElement('div')
    mask.classList.add('emoji-mask')
    return mask
  }

  /**
   * 打开或关闭表情面板
   * @param isShow {Boolean}
   */
  public toggle(isShow) {
    const emojiWrap: HTMLElement = document.querySelector('.emoji-wrap')
    emojiWrap.style.display = isShow ? 'block' : 'none'
  }

  /**
   * 选择表情
   */
  public onSelect(callback) {
    const emojiItems = document.querySelectorAll('.emoji-item')
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
