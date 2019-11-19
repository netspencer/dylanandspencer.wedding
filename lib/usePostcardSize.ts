import { useState, useEffect } from 'react'
import { WindowSize } from './useWindowSize'

export interface PostcardSize {
  width: number
  height: number
  perspective: number
  aspectRatio: number
  orientation: 'portrait' | 'landscape'
}

function calculatePostcardSize(
  containerWidth: number,
  containerHeight: number
): PostcardSize {
  function isPortrait(width: number, height: number): boolean {
    return height > width
  }

  function calculateAspectRatio(portrait: boolean): number {
    return portrait ? 4 / 6 : 6 / 4
  }

  function calculateMaxSize(
    width: number,
    height: number
  ): { width: number; height: number } {
    return { width: width * 0.75, height: height * 0.75 }
  }

  function calculateSize(
    maxSize: { width: number; height: number },
    aspectRatio: number
  ): { width: number; height: number } {
    return maxSize.width / aspectRatio <= maxSize.height
      ? { width: maxSize.width, height: maxSize.width / aspectRatio }
      : { width: maxSize.height * aspectRatio, height: maxSize.height }
  }

  const aspectRatio = calculateAspectRatio(
    isPortrait(containerWidth, containerHeight)
  )
  const { width, height } = calculateSize(
    calculateMaxSize(containerWidth, containerHeight),
    aspectRatio
  )
  const orientation = isPortrait(containerWidth, containerHeight)
    ? 'portrait'
    : 'landscape'
  const perspective = width * 1.25

  return {
    width,
    height,
    perspective,
    aspectRatio,
    orientation
  }
}

function usePostcardSize(windowSize: WindowSize): PostcardSize {
  const initialPostcardSize: PostcardSize = {
    width: 0,
    height: 0,
    perspective: 0,
    aspectRatio: 6 / 4,
    orientation: 'landscape'
  }
  const [postcardSize, setPostcardSize] = useState(initialPostcardSize)
  useEffect(() => {
    const { innerWidth, innerHeight } = windowSize
    if (innerWidth && innerHeight) {
      setPostcardSize(calculatePostcardSize(innerWidth, innerHeight))
    }
  }, [windowSize])

  return postcardSize
}

export default usePostcardSize
