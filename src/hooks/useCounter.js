import { useEffect, useState } from 'react'

const useCounter = (target, duration = 1400) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime = null

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }, [target, duration])

  return count
}

export default useCounter
