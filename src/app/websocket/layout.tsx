'use client'

import { StompProvider } from '@/contexts/SocketContext'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <StompProvider>{children}</StompProvider>
}
