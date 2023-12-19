import { useCallback, useState } from 'react'

export function useToggle(initialValue = false) {
  const [state, setState] = useState(initialValue ?? false)

  const toggle = useCallback(() => {
    setState((prevState) => !prevState)
  }, [])

  return { state, toggle, setState }
}
