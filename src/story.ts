import scrollama from 'scrollama'
import Page from './page'

class StoryPage extends Page {
  offset: number
  scroller: any

  constructor(window: Window) {
    super(window)

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
      default:
        break
    }
  }
}

;(function(window) {
  new StoryPage(window)
})(window)
