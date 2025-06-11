import { useState, useEffect } from 'react'

export function useLocalStorage (key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = window.localStorage.getItem(key)
    try {
      return stored !== null && stored !== 'undefined'
        ? JSON.parse(stored)
        : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
