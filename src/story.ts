import lottie, { AnimationItem } from 'lottie-web'
import Postcard from './postcard'
import Scroller from './scroller'

export default class Story {
  window: Window
  document: Document

  loadingAnimation: AnimationItem
  postcard: Postcard
  scroller: Scroller

  constructor(window: Window) {
    this.window = window
    this.document = window.document

    this.setup()
    this.start()

    this.resize()
    window.addEventListener('resize', this.resize)
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

    // - setup postcard
    this.postcard = new Postcard(
      this.document.getElementById('postcard'),
      this.window
    )

    // - setup scroller
    this.scroller = new Scroller(this.window)
  }

  start = () => {
    setTimeout(() => {
      this.document.getElementById('postcard').style.visibility = 'visible'
      this.loadingAnimation.destroy()
      this.document.querySelector('body').classList.remove('overflow-hidden')
      this.document.getElementById('loading-container').style.visibility =
        'hidden'
      // setTimeout(() => {
      //   this.window.scrollTo({ top: this.window.innerHeight })
      // }, 500)
    }, 700)
  }

  resize = () => {
    // get navigation element height
    const navbar = this.document.getElementById('navbar')
    const navHeight = navbar.offsetHeight

    // offset the postcard by half the navHeight
    this.postcard.setTopOffset(navHeight / 2)
  }
}
