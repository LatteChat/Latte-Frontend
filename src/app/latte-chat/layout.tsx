import BottomNavigationBar from '@/shared/components/BottomNavigationBar'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>
        <div className="flex justify-center">
          <main className="flex h-svh w-full max-w-md flex-col">
            <section className="flex-1 overflow-auto">{children}</section>
            <BottomNavigationBar />
          </main>
        </div>
      </body>
    </html>
  )
}
