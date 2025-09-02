import Button from '@/shared/components/Button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AnswerLetterButtonContainer() {
  const pathname = usePathname()

  return (
    <Link href={`${pathname}/answer/new`} className="w-full">
      <Button buttonText="답변하기" />
    </Link>
  )
}
