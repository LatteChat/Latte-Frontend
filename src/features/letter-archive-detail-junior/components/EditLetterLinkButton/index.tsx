import Button from '@/shared/components/Button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function EditLetterLinkButton() {
  const pathname = usePathname()

  return (
    <Link href={pathname + '/edit'} className="w-full">
      <Button buttonText="수정하기" type="CARD" />
    </Link>
  )
}
