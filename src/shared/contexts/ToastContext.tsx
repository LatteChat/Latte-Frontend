'use client'

import { createContext, useContext, useState } from 'react'
import ToastMessage from '../components/ToastMessage'

type ToastContextType = {
  showToast: (message: string) => void
}

const ToastContext = createContext<ToastContextType | null>(null)

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toast, setToast] = useState<{ id: number; message: string } | null>(
    null
  )

  const showToast = (message: string) => {
    const id = Date.now()
    setToast({ id, message })
  }

  const removeToast = () => setToast(null)

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-36 left-1/2 z-[9999] -translate-x-1/2">
        {toast && (
          <ToastMessage
            key={toast.id}
            message={toast.message}
            onClose={removeToast}
          />
        )}
      </div>
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}
