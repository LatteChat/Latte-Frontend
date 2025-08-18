import MainBottomNavigationBar from '@/shared/components/MainBottomNavigationBar'

export default function DaumLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-svh w-full max-w-md flex-col">
      <div className="flex-1 overflow-auto">{children}</div>
      <MainBottomNavigationBar />
    </div>
  )
}
