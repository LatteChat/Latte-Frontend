import { useEffect, useState } from 'react'

export default function useDelayedSkeleton(isLoading: boolean, delay = 1000) {
  const [delayed, setDelayed] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null
    if (isLoading) {
      timer = setTimeout(() => setDelayed(true), delay)
    } else {
      setDelayed(false)
    }
    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [isLoading, delay])

  return delayed
}
