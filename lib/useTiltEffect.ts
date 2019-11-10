import { RefObject, useEffect, useRef, useMemo, useState } from 'react'
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
  [key: string]: HTMLElement
}

interface FocusCoordinate {
  x: number
  y: number
}

interface CoordinateValues {
  x: number
  y: number
  z: number
}

interface CoordinateRanges {
  x: [number, number]
  y: [number, number]
  z: [number, number]
}

interface TiltEffectMovement {
  translation?: CoordinateValues
  rotation?: CoordinateValues
  reverseAnimation?: {
    duration: number
    easing: string
    elasticity: number
  }
}

interface TiltEffectMovementTransforms {
  translation: CoordinateValues
  rotation: CoordinateValues
}

interface TiltEffectMovementOptions {
  image: TiltEffectMovement
  caption: TiltEffectMovement
  shine: TiltEffectMovement
  [key: string]: TiltEffectMovement
}

interface TiltEffectOptions {
  movement: TiltEffectMovementOptions
}

function useTiltEffect(): TiltEffectRefs {
  const refs: TiltEffectRefs = {
    containerRef: useRef(),
    imageRef: useRef(),
    captionRef: useRef(),
    shineRef: useRef()
  }
  const effect = useMemo(() => {
    return new TiltEffect(refs)
  }, [refs])

  const initialFocus: FocusCoordinate = { x: 0, y: 0 }
  const [focusPos, setFocusPos] = useState(initialFocus)

  useEffect(() => {
    effect.setTilt(focusPos)
  }, [effect, focusPos])

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
    // this.bind()
  }

  bind = () => {
    // const el = this.refs.containerRef.current
    const el = window
    el.addEventListener('mousemove', this.mouseDidMove)
    el.addEventListener('mouseleave', this.mouseDidLeave)
    el.addEventListener('mouseenter', this.mouseDidEnter)
  }

  // prepareAnimations clears all existing animation state in order
  // to start a new set of animated properties
  prepareAnimations = () => {
    const layers = this.getLayers()
    for (let key in layers) {
      anime.remove(layers[key])
    }
  }

  // resetTilt animates all layers back to their resting state (where there is no tilt)
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

  // setTitl applies all necessary tilt animations given a mouse Event
  setTilt = (focusPosition: FocusCoordinate) => {
    const scrollPos = {
      left: document.body.scrollLeft + document.documentElement.scrollLeft,
      top: document.body.scrollTop + document.documentElement.scrollTop
    }

    const bounds = this.getContainer().getBoundingClientRect()

    const relativeFocusPosition: FocusCoordinate = {
      x: focusPosition.x - bounds.left - scrollPos.left,
      y: focusPosition.y - bounds.top - scrollPos.top
    }

    // Movement settings for the animatable elements.
    const layers = this.getLayers()
    for (let key in layers) {
      if (!layers[key]) continue
      if (!this.options.movement[key]) continue

      const transforms = this.getTransforms(key, relativeFocusPosition, bounds)
      const transformStyles = this.getTransformStyles(transforms)

      layers[key].style.webkitTransform = transformStyles
      layers[key].style.transform = transformStyles
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

  // getTransforms returns the transformations that should be applied to a layer
  // given the layer's key, the client's focusPostion, and the container's bounds
  getTransforms = (
    key: string,
    focusPosition: FocusCoordinate,
    bounds: ClientRect | DOMRect
  ): TiltEffectMovementTransforms => {
    const translation = this.getRanges(this.getTranslationValues(key))
    const rotation = this.getRanges(this.getRotationValues(key))

    return {
      translation: {
        x:
          ((translation.x[1] - translation.x[0]) / bounds.width) *
            focusPosition.x +
          translation.x[0],
        y:
          ((translation.y[1] - translation.y[0]) / bounds.height) *
            focusPosition.y +
          translation.y[0],
        z:
          ((translation.z[1] - translation.z[0]) / bounds.height) *
            focusPosition.y +
          translation.z[0]
      },
      rotation: {
        x:
          ((rotation.x[1] - rotation.x[0]) / bounds.height) * focusPosition.y +
          rotation.x[0],
        y:
          ((rotation.y[1] - rotation.y[0]) / bounds.width) * focusPosition.x +
          rotation.y[0],
        z:
          ((rotation.z[1] - rotation.z[0]) / bounds.width) * focusPosition.x +
          rotation.z[0]
      }
    }
  }

  // getTransformStyles returns the CSS styles string for the given transforms
  getTransformStyles = (transforms: TiltEffectMovementTransforms): string => {
    return `
        translateX(${transforms.translation.x}px)
        translateX(${transforms.translation.y}px)
        translateZ(${transforms.translation.z}px)
        rotateX(${transforms.rotation.x}deg)
        rotateY(${transforms.rotation.y}deg)
        rotateZ(${transforms.rotation.z}deg)
        `
  }

  // getTranslationValues returns the CoordindateValues for translation of
  // a given key in the TiltEffectMovementOptions object
  getTranslationValues = (key: string): CoordinateValues => {
    return (
      (this.options.movement[key] &&
        this.options.movement[key].translation) || {
        x: 0,
        y: 0,
        z: 0
      }
    )
  }

  // getTranslationValues returns the CoordindateValues for rotation of
  // a given key in the TiltEffectMovementOptions object
  getRotationValues = (key: string): CoordinateValues => {
    return (
      (this.options.movement[key] && this.options.movement[key].rotation) || {
        x: 0,
        y: 0,
        z: 0
      }
    )
  }

  // getRange gets the CoordinateRanges cooresponding to the CoordinateValues
  getRanges = (values: CoordinateValues): CoordinateRanges => {
    let ranges: CoordinateRanges = { x: [0, 0], y: [0, 0], z: [0, 0] }

    for (let key in values) {
      if (!values[key]) {
        ranges[key] = [0, 0]
      } else if (typeof values[key] === 'number') {
        ranges[key] = [-1 * values[key], values[key]]
      }
    }

    return ranges
  }

  mouseDidMove = (ev: Event) => {
    requestAnimationFrame(() => {
      this.setTilt(this.getMousePos(ev))
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
  getMousePos = (event): FocusCoordinate => {
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
