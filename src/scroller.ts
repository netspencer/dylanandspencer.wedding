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

  enter = (index: number) => {
    switch (index) {
      case 1:
        this.storyEnter()
      default:
        break
    }
  }

  exit = (index: number) => {
    switch (index) {
      case 1:
        this.storyExit()
      default:
        break
    }
  }

  progress = (index: number, percent: number) => {
    switch (index) {
      case 0:
        this.step0Progress(percent)
        break
      case 1:
        this.storyProgress(percent)
        break
      default:
        break
    }
  }

  step0Progress = (percent: number) => {
    const adjusted = (percent - this.offset) * (1.0 / this.offset)
    const opacity = 1.0 - adjusted
    const ctaMobile = this.document.getElementById('cta-mobile')
    ctaMobile.style.opacity = `${opacity}`
  }

  storyEnter = () => {
    this.document.getElementById('story_container').style.position = 'fixed'
  }

  storyExit = () => {
    this.document.getElementById('story_container').style.position = 'absolute'
  }

  storyProgress = (percent: number) => {
    console.log('starwars', percent)
    // crawl.style.top = this.calculateTop(percent)
  }
}
