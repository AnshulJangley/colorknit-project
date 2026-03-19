'use client'
import { useEffect } from 'react'

export default function AOSProvider() {
  useEffect(() => {
    const init = async () => {
      const AOS = (await import('aos')).default
      AOS.init({
        duration: 700,
        easing: 'ease-out-cubic',
        once: true,
        offset: 80,
      })
    }
    init()
  }, [])

  return null
}
