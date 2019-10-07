import TiltEffect from './tilt'

export default class Postcard {
  window: Window
  element: HTMLElement

  parent: HTMLElement
  mobileCta: HTMLElement

  aspectRatio = 6 / 4

  tilt: TiltEffect

  constructor(el: HTMLElement, window: Window) {
    this.window = window
    this.element = el

    this.parent = el.parentElement
    this.mobileCta = el.ownerDocument.getElementById('cta-mobile')

    this.tilt = new TiltEffect(el)

    this.resize()
    window.addEventListener('resize', this.resize)
  }

  setTopOffset = (offset: number) => {
    this.parent.style.marginTop = `${offset}px`
  }

  setBottomOffset = (offset: number) => {
    this.parent.style.marginBottom = `${offset}px`
  }

  resize = () => {
    const { innerWidth: width, innerHeight: height } = this.window
    if (width > height) {
      this.element.classList.remove('portrait')
      this.element.classList.add('landscape')
      this.aspectRatio = 6 / 4
    } else {
      this.element.classList.remove('landscape')
      this.element.classList.add('portrait')
      this.aspectRatio = 4 / 6
    }

    const maxSize = { width: width * 0.75, height: height * 0.75 }
    const size =
      maxSize.width / this.aspectRatio <= maxSize.height
        ? { width: maxSize.width, height: maxSize.width / this.aspectRatio }
        : { width: maxSize.height * this.aspectRatio, height: maxSize.height }

    this.element.style.height = `${size.height}px`
    this.element.style.width = `${size.width}px`
    this.element.style.perspective = `${size.width * 1.25}px`

    // mobile cta height
    const ctaHeight = this.mobileCta.offsetHeight
    this.setBottomOffset(ctaHeight)
  }
}
