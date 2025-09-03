import BottomNavigationBar from '@/shared/components/BottomNavigationBar'
import { StompProvider } from '@/shared/contexts/SocketContext'

export default function LatteChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <StompProvider>
      <div className="relative flex h-svh w-full max-w-md flex-col">
        <div id="modal-root" />
        <main className="flex-1 overflow-auto">{children}</main>
        <BottomNavigationBar />
      </div>
    </StompProvider>
  )
}
