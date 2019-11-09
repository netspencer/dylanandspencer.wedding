import { useState, useEffect } from 'react'

interface WindowSize {
  innerHeight?: number
  innerWidth?: number
  outerHeight?: number
  outerWidth?: number
}

function getSize(): WindowSize {
  const isClient = typeof window === 'object'
  return {
    innerHeight: isClient ? window.innerHeight : undefined,
    innerWidth: isClient ? window.innerWidth : undefined,
    outerHeight: isClient ? window.outerHeight : undefined,
    outerWidth: isClient ? window.outerWidth : undefined
  }
}

function useWindowSize() {
  const isClient = typeof window === 'object'
  const [windowSize, setWindowSize] = useState(getSize())

  function handleResize() {
    setWindowSize(getSize())
  }

  useEffect(() => {
    if (!isClient) return undefined

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}

export default useWindowSize
