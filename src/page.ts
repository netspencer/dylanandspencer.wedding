import 'intersection-observer'
import lottie, { AnimationItem } from 'lottie-web'

export default class Page {
  window: Window
  document: Document

  requiresLoading: boolean

  loadingAnimation: AnimationItem

  constructor(window: Window, requiresLoading: boolean = false) {
    this.window = window
    this.document = window.document
    this.requiresLoading = requiresLoading

    this.setup()
    this.start()
  }

  setup = () => {
    // - setup loading
    this.loadingAnimation = lottie.loadAnimation({
      container: this.document.getElementById('loading-animation'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path:
        'https://assets4.lottiefiles.com/datafiles/rFr1le9E8lhiQjf/data.json'
    })
  }

  start = () => {
    const timeout = this.requiresLoading ? 700 : 0
    setTimeout(() => {
      this.loadingAnimation.destroy()
      this.document.querySelector('body').classList.remove('overflow-hidden')
      this.document.getElementById('loading-container').style.visibility =
        'hidden'
    }, timeout)
  }
}
