import BottomNavigationBar from '@/shared/components/BottomNavigationBar'

export default function LatteChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-svh w-full max-w-md flex-col">
      <main className="flex-1 overflow-auto">{children}</main>
      <BottomNavigationBar />
    </div>
  )
}
