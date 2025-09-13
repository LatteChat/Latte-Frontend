import { useEffect, useState } from 'react'

export default function TemporarySaveMessage() {
  const [showSaving, setShowSaving] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSaving(true)
      setTimeout(() => setShowSaving(false), 2000)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <span
      className={`b10 flex items-center gap-1 text-gray-5 ${showSaving ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
    >
      임시 저장 중...
      <img src="/icons/refresh-icon.svg" className="animate-spin" />
    </span>
  )
}
