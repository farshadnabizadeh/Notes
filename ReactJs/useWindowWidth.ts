import { useEffect, useState } from 'react'

export function useWindowWidth() {
  const [width, setWidth] = useState<number | undefined>(undefined)

  useEffect(() => {
    // Avoid SSR hydration issues
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    handleResize() // Set initial width

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return width
}
