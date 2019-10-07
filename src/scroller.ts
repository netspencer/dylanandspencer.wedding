import scrollama from 'scrollama'

export default class Scroller {
  window: Window
  document: Document

  offset: number
  scroller: any

  constructor(window: Window) {
    this.window = window
    this.document = window.document

    this.offset = 0.5
    this.scroller = scrollama()
    this.setup()
  }

  setup = () => {
    this.scroller
      .setup({
        step: '.step',
        offset: this.offset,
        progress: true
      })
      .onStepEnter(({ index }) => {
        this.enter(index)
      })
      .onStepProgress(({ index, progress }) => {
        this.progress(index, progress)
      })
      .onStepExit(({ index }) => {
        this.exit(index)
      })
    this.window.addEventListener('resize', this.scroller.resize)
  }

  // EFFECTS

  enter = index => {
    console.log('ENTER', index)
  }

  exit = index => {
    console.log('EXIT', index)
  }

  progress = (index, percent) => {
    switch (index) {
      case 0:
        this.step0Progress(percent)
      default:
        console.log('no progress handler')
    }
  }

  step0Progress = percent => {
    const adjusted = (percent - this.offset) * (1.0 / this.offset)
    const opacity = 1.0 - adjusted
    const ctaMobile = this.document.getElementById('cta-mobile')
    ctaMobile.style.opacity = `${opacity}`
  }
}
