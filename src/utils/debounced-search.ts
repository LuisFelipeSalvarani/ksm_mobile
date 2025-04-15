import { useEffect, useState } from 'react'

export function useDebouncedSearch<T>(
  value: string | undefined,
  delay: number,
  onSearch: (query: string | undefined) => Promise<T> | undefined
) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  useEffect(() => {
    if (debouncedValue && debouncedValue.trim() !== '') {
      onSearch(debouncedValue)
      return
    }
    onSearch(undefined)
  }, [debouncedValue])
}
