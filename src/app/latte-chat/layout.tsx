import BottomNavigationBar from '@/shared/components/BottomNavigationBar'
import { ModalProvider } from '@/shared/contexts/ModalContext'

export default function LatteChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="relative flex h-svh w-full max-w-md flex-col">
      <div id="modal-root" />
      <main className="flex-1 overflow-auto">{children}</main>
      <BottomNavigationBar />
    </div>
  )
}
