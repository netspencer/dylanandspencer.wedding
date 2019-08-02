import TiltEffect from './tilt'

export default class Postcard {
  window: Window
  element: HTMLElement

  aspectRatio = 6 / 4

  tilt: TiltEffect

  constructor(el: HTMLElement, window: Window) {
    this.element = el
    this.window = window

    this.tilt = new TiltEffect(el)

    this.resize()
    window.addEventListener('resize', this.resize)
  }

  resize = () => {
    const { innerWidth: width, innerHeight: height } = this.window
    const maxSize = { width: width * 0.9, height: height * 0.9 }
    const size =
      maxSize.width / this.aspectRatio <= maxSize.height
        ? { width: maxSize.width, height: maxSize.width / this.aspectRatio }
        : { width: maxSize.height * this.aspectRatio, height: maxSize.height }

    this.element.style.height = `${size.height}px`
    this.element.style.width = `${size.width}px`
    this.element.style.perspective = `${size.width * 1.25}px`
  }
}
