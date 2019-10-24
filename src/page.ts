import 'intersection-observer'
import lottie, { AnimationItem } from 'lottie-web'

export default class Page {
  window: Window
  document: Document

  // loadingAnimation: AnimationItem

  constructor(window: Window) {
    this.window = window
    this.document = window.document

    // this.setup()
  }

  // setup = () => {
  //   // - setup loading
  //   this.loadingAnimation = lottie.loadAnimation({
  //     container: this.document.getElementById('loading-animation'),
  //     renderer: 'svg',
  //     loop: true,
  //     autoplay: false,
  //     path:
  //       'https://assets4.lottiefiles.com/datafiles/rFr1le9E8lhiQjf/data.json'
  //   })
  // }
}
