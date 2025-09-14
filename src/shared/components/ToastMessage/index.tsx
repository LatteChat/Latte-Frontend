'use client'

import { useEffect, useState } from 'react'

export default function ToastMessage({
  message,
  onClose,
}: {
  message: string
  onClose: () => void
}) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)

    const hideTimer = setTimeout(() => setVisible(false), 1500)
    const removeTimer = setTimeout(onClose, 2000)

    return () => {
      clearTimeout(hideTimer)
      clearTimeout(removeTimer)
    }
  }, [onClose])

  return (
    <div
      className={`b4 whitespace-pre-line rounded bg-black bg-opacity-65 px-4 py-2 text-center text-white shadow transition-all duration-500 ease-in-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'} `}
    >
      {message}
    </div>
  )
}
