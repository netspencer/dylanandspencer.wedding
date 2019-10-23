import Postcard from './postcard'
import Page from './page'

class IndexPage extends Page {
  postcard: Postcard

  constructor(window: Window) {
    super(window, false)

    this.setup()
    this.resize()
    window.addEventListener('resize', this.resize)
  }

  setup = () => {
    // - setup postcard
    this.postcard = new Postcard(
      this.document.getElementById('postcard'),
      this.window
    )
  }

  resize = () => {
    // get navigation element height
    const navbar = this.document.getElementById('navbar')
    const navHeight = navbar.offsetHeight

    // offset the postcard by half the navHeight
    this.postcard.setTopOffset(navHeight / 2)
  }
}

;(function(window) {
  new IndexPage(window)
})(window)
