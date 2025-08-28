import { StompProvider } from '@/shared/contexts/SocketContext'

export default function LatteChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <StompProvider>{children}</StompProvider>
}
