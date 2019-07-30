import 'intersection-observer'
import scrollama from 'scrollama'

// instantiate the scrollama
const scroller = scrollama()

// setup the instance, pass callback functions
scroller
  .setup({
    step: '.step'
  })
  .onStepEnter(response => {
    console.log(response)
    // { element, index, direction }
  })
  .onStepExit(response => {
    // { element, index, direction }
  })

// setup resize event
window.addEventListener('resize', scroller.resize)
