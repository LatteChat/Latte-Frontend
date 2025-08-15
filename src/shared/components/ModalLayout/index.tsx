export default function ModalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="fixed inset-0 z-10 flex justify-center">
      <div className="flex h-full w-full max-w-md items-center justify-center bg-[rgb(0,0,0,0.8)] px-5">
        {children}
      </div>
    </div>
  )
}
