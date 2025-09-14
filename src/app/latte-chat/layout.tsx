import BottomNavigationBar from '@/shared/components/BottomNavigationBar'
import ScrollBox from '@/shared/components/ScrollBox'

export default function LatteChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="relative flex h-svh w-full max-w-md flex-col">
      <div id="modal-root" />
      <ScrollBox>{children}</ScrollBox>
      <BottomNavigationBar />
    </div>
  )
}
