'use client'

// import { StompProvider } from '@/contexts/SocketContext'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div>{children}</div>
}
