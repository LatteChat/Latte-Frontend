import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LatteChat',
  description: '라떼챗입니다^^',
  manifest: '/manifest.json',
  themeColor: '#ffffff',
  icons: {
    icon: '/icons/icon-192.png',
    apple: '/icons/apple-icon-180.png',
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
        <main className="h-full min-h-screen w-full max-w-md bg-orange-100">
          {children}
        </main>
      </body>
    </html>
  )
}
