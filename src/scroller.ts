import scrollama from 'scrollama'

export default class Scroller {
  window: Window
  document: Document

  storyContainer: HTMLElement

  starwarsHeight: number

  offset: number
  scroller: any

  constructor(window: Window) {
    this.window = window
    this.document = window.document

    this.storyContainer = this.document.getElementById('our_story')

    this.offset = 0.5
    this.scroller = scrollama()
    this.setup()

    this.resize()
    this.window.addEventListener('resize', this.resize)
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

  resize = () => {
    const height = this.window.innerHeight
    const starwars = this.document.getElementById('starwars')
    this.starwarsHeight = starwars.clientHeight
    starwars.style.height = `${height}px`

    starwars.style.perspective = `${height / 2}px`
  }

  // EFFECTS

  enter = (index: number) => {
    switch (index) {
      default:
        break
    }
  }

  exit = (index: number) => {
    switch (index) {
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
        // this.starwarsProgress(percent)
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

  starwarsProgress = (percent: number) => {
    const crawl = this.document.getElementById('starwars_crawl')

    console.log('starwars', this.calculateTop(percent))
    crawl.style.top = this.calculateTop(percent)
  }

  private calculateTop(progress: number): string {
    const top = 100 - 300 * progress

    return `${top}%`
  }
}
