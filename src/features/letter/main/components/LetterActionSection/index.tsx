import Link from 'next/link'

export default function LetterActionSection({
  href,
  linkLabel,
  description,
}: {
  href: string
  linkLabel: string
  description: string
}) {
  return (
    <div className="mt-10 flex flex-col items-center gap-1">
      <Link
        href={href}
        className="h4 flex w-full items-center justify-center rounded-2xl bg-gray-300 py-4"
      >
        {linkLabel}
      </Link>
      <p className="b6">{description}</p>
    </div>
  )
}
