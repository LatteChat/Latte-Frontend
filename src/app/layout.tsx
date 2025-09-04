import type { Metadata } from 'next'
import '@/shared/styles/globals.css'
import '@/shared/styles/fonts.css'
import ReactQueryProvider from '@/shared/providers/ReactQueryProvider'
import { ModalProvider } from '@/shared/contexts/ModalContext'
import { StompProvider } from '@/shared/contexts/SocketContext'

export const metadata: Metadata = {
  title: '라떼챗',
  description: '세대 간 소통을 위한 라떼챗',
  manifest: '/manifest.json',
  themeColor: '#ffffff',
  icons: {
    icon: '/latte-chat-logo.png',
    apple: '/latte-chat-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>
        <ReactQueryProvider>
          <StompProvider>
            <ModalProvider>
              <div className="flex justify-center">{children}</div>
            </ModalProvider>
          </StompProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
