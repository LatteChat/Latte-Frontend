'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { createPortal } from 'react-dom'

type ModalContent = ReactNode | (() => ReactNode)

type ModalContextType = {
  openModal: (content: ModalContent) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType | null>(null)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modalContent, setModalContent] = useState<ReactNode | null>(null)

  const openModal = (content: ModalContent) => setModalContent(content)
  const closeModal = () => setModalContent(null)

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modalContent &&
        createPortal(
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 px-5">
            <div className="w-full overflow-hidden rounded-10 bg-white shadow-lg">
              {typeof modalContent === 'function'
                ? (modalContent as () => ReactNode)()
                : modalContent}
            </div>
          </div>,
          document.getElementById('modal-root')!
        )}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (!context) throw new Error('useModal must be used within a ModalProvider')
  return context
}
