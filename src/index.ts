import 'intersection-observer'
import Story from './story'
;(function(window) {
  new Story(window, document)
})(window)

// const postcard = new Postcard(document.getElementById('postcard'), window)
// setTimeout(() => {
//   document.getElementById('postcard').style.visibility = 'visible'
//   loading.destroy()
//   document.querySelector('body').classList.remove('overflow-hidden')
//   // setTimeout(() => {
//   //   window.scrollTo({ top: window.innerHeight })
//   // }, 500
// }, 700)
// // // instantiate the scrollama
// const scroller = scrollama()
// scroller
//   .setup({
//     step: '.step'
//   })
//   .onStepEnter(({ index, direction }) => {
//     console.log('enter', index, direction)
//     // console.log(response)
//     // { element, index, direction }
//   })
//   .onStepExit(({ index, direction }) => {
//     console.log('exit', index, direction)
//     // { element, index, direction }
//   })
// window.addEventListener('resize', scroller.resize)
