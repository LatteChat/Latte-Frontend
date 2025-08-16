export default function TitleHeader({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-10">
      <div className="flex h-12 items-center justify-center bg-white">
        <h1 className="b2">{title}</h1>
      </div>
    </header>
  )
}
