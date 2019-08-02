import 'intersection-observer'
import lottie from 'lottie-web'
import scrollama from 'scrollama'
import Postcard from './postcard'

// init when window is ready
;(function(window) {
  const postcard = new Postcard(document.getElementById('postcard'), window)

  // const loading = lottie.loadAnimation({
  //   container: document.getElementById('loading-animation'),
  //   renderer: 'svg',
  //   loop: true,
  //   autoplay: true,
  //   path: 'https://assets4.lottiefiles.com/datafiles/rFr1le9E8lhiQjf/data.json'
  // })

  // setTimeout(() => {
  //   loading.destroy()
  //   document.querySelector('body').classList.remove('overflow-hidden')
  //   setTimeout(() => {
  //     window.scrollTo({ top: window.innerHeight })
  //   }, 500)
  // }, 3000)

  // // instantiate the scrollama
  // const scroller = scrollama()

  // // setup the instance, pass callback functions
  // scroller
  //   .setup({
  //     step: '.step'
  //   })
  //   .onStepEnter(response => {
  //     console.log(response)
  //     // { element, index, direction }
  //   })
  //   .onStepExit(response => {
  //     // { element, index, direction }
  //   })

  // // setup resize event
  // window.addEventListener('resize', scroller.resize)
})(window)
