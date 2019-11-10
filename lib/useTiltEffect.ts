import { RefObject, useEffect, useRef } from 'react'
import anime from 'animejs'

interface TiltEffectRefs {
  containerRef: RefObject<HTMLElement>
  imageRef: RefObject<HTMLElement>
  captionRef: RefObject<HTMLElement>
  shineRef: RefObject<HTMLElement>
}

interface TiltEffectLayers {
  image: HTMLElement
  caption: HTMLElement
  shine: HTMLElement
}

interface TiltEffectMovement {
  translation?: { x: number; y: number; z: number }
  rotation?: { x: number; y: number; z: number }
  reverseAnimation?: {
    duration: number
    easing: string
    elasticity: number
  }
}

interface TiltEffectMovementOptions {
  image: TiltEffectMovement
  caption: TiltEffectMovement
  shine: TiltEffectMovement
}

interface TiltEffectOptions {
  movement: TiltEffectMovementOptions
}

function useTiltEffect(): TiltEffectRefs {
  const containerRef = useRef()
  const imageRef = useRef()
  const captionRef = useRef()
  const shineRef = useRef()

  const refs: TiltEffectRefs = {
    containerRef,
    imageRef,
    captionRef,
    shineRef
  }

  useEffect(() => {
    const effect = new TiltEffect(refs)
  }, [refs])

  return refs
}

class TiltEffect {
  refs: TiltEffectRefs
  options: TiltEffectOptions = {
    movement: {
      image: {
        translation: { x: 0, y: 0, z: 0 },
        rotation: { x: -5, y: 5, z: 0 },
        reverseAnimation: {
          duration: 1200,
          easing: 'easeOutElastic',
          elasticity: 600
        }
      },
      caption: {
        translation: { x: 20, y: 20, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        reverseAnimation: {
          duration: 1500,
          easing: 'easeOutElastic',
          elasticity: 600
        }
      },
      shine: {
        translation: { x: 50, y: 50, z: 0 },
        reverseAnimation: {
          duration: 1200,
          easing: 'easeOutElastic',
          elasticity: 600
        }
      }
    }
  }

  // Create a new instance of TiltEffect with the given TiltEffectRefs
  constructor(refs: TiltEffectRefs) {
    this.refs = refs
    this.bind()
  }

  bind = () => {
    const el = this.refs.containerRef.current
    el.addEventListener('mousemove', this.mouseDidMove)
    el.addEventListener('mouseleave', this.mouseDidLeave)
    el.addEventListener('mouseenter', this.mouseDidEnter)
  }

  prepareAnimations = () => {
    const layers = this.getLayers()
    for (let key in layers) {
      anime.remove(layers[key])
    }
  }

  resetTilt = () => {
    const layers = this.getLayers()
    for (let key in layers) {
      if (!this.options.movement[key]) continue

      anime({
        targets: layers[key],
        duration:
          (this.options.movement[key].reverseAnimation &&
            this.options.movement[key].reverseAnimation.duration) ||
          1,
        easing:
          (this.options.movement[key].reverseAnimation &&
            this.options.movement[key].reverseAnimation.easing) ||
          'linear',
        elasticity:
          (this.options.movement[key].reverseAnimation &&
            this.options.movement[key].reverseAnimation.elasticity) ||
          null,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        translateX: 0,
        translateY: 0,
        translateZ: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0
      })
    }
  }

  setTilt = (ev: Event) => {
    const mousePos = this.getMousePos(ev)

    const scrollPos = {
      left: document.body.scrollLeft + document.documentElement.scrollLeft,
      top: document.body.scrollTop + document.documentElement.scrollTop
    }

    const bounds = this.getContainer().getBoundingClientRect()

    const relativeMousePos = {
      x: mousePos.x - bounds.left - scrollPos.left,
      y: mousePos.y - bounds.top - scrollPos.top
    }

    // Movement settings for the animatable elements.
    const layers = this.getLayers()
    for (let key in layers) {
      if (!layers[key]) continue
      if (!this.options.movement[key]) continue

      const translation = (this.options.movement[key] &&
        this.options.movement[key].translation) || { x: 0, y: 0, z: 0 }
      const rotation = (this.options.movement[key] &&
        this.options.movement[key].rotation) || { x: 0, y: 0, z: 0 }

      const setRange = obj => {
        for (let k in obj) {
          if (!obj[k]) {
            obj[k] = [0, 0]
          } else if (typeof obj[k] === 'number') {
            obj[k] = [-1 * obj[k], obj[k]]
          }
        }
      }

      setRange(translation)
      setRange(rotation)

      const transforms = {
        translation: {
          x:
            ((translation.x[1] - translation.x[0]) / bounds.width) *
              relativeMousePos.x +
            translation.x[0],
          y:
            ((translation.y[1] - translation.y[0]) / bounds.height) *
              relativeMousePos.y +
            translation.y[0],
          z:
            ((translation.z[1] - translation.z[0]) / bounds.height) *
              relativeMousePos.y +
            translation.z[0]
        },
        rotation: {
          x:
            ((rotation.x[1] - rotation.x[0]) / bounds.height) *
              relativeMousePos.y +
            rotation.x[0],
          y:
            ((rotation.y[1] - rotation.y[0]) / bounds.width) *
              relativeMousePos.x +
            rotation.y[0],
          z:
            ((rotation.z[1] - rotation.z[0]) / bounds.width) *
              relativeMousePos.x +
            rotation.z[0]
        }
      }

      const transformStyle = `
        translateX(${transforms.translation.x}px)
        translateX(${transforms.translation.y}px)
        translateZ(${transforms.translation.z}px)
        rotateX(${transforms.rotation.x}deg)
        rotateY(${transforms.rotation.y}deg)
        rotateZ(${transforms.rotation.z}deg)
        `

      layers[key].style.webkitTransform = transformStyle
      layers[key].style.transform = transformStyle
    }
  }

  // getContainer returns the HTMLElement for the TiltEffect's container
  getContainer = (): HTMLElement => {
    return this.refs.containerRef.current
  }

  // getLayers returns the image, caption, and shine HTMLElement layers from the refs
  getLayers = (): TiltEffectLayers => {
    return {
      image: this.refs.imageRef.current,
      caption: this.refs.captionRef.current,
      shine: this.refs.shineRef.current
    }
  }

  mouseDidMove = (ev: Event) => {
    requestAnimationFrame(() => {
      this.setTilt(ev)
    })
  }

  mouseDidLeave = (ev: Event) => {
    requestAnimationFrame(() => {
      this.resetTilt()
    })
  }

  // mouseDidEnter handles events when mouse enters an element
  mouseDidEnter = (ev: Event) => {
    this.prepareAnimations()
  }

  // getMousePos returns the xy position of the mouse for a given event
  getMousePos = event => {
    event = event || window.event

    let posX = 0
    let posY = 0

    if (event.pageX || event.pageY) {
      posX = event.pageX
      posY = event.pageY
    } else if (event.clientX || event.clientY) {
      posX =
        event.clientX +
        document.body.scrollLeft +
        document.documentElement.scrollLeft
      posY =
        event.clientY +
        document.body.scrollTop +
        document.documentElement.scrollTop
    }
    return { x: posX, y: posY }
  }
}

export default useTiltEffect
