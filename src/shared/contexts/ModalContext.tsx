'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { createPortal } from 'react-dom'

type ModalContextType = {
  openModal: (content: ReactNode) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType | null>(null)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modalContent, setModalContent] = useState<ReactNode | null>(null)

  const openModal = (content: ReactNode) => setModalContent(content)
  const closeModal = () => setModalContent(null)

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modalContent &&
        createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-5">
            <div className="w-full rounded-xl bg-white p-6 py-10 shadow-lg">
              {modalContent}
            </div>
          </div>,
          document.body
        )}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (!context) throw new Error('useModal must be used within a ModalProvider')
  return context
}
