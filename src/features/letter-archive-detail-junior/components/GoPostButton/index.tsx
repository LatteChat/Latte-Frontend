import Button from '@/shared/components/Button'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function GoPostButton() {
  const params = useParams()
  const letterId = params?.id ? Number(params?.id) : null

  return (
    <Link href={`/latte-chat/posts/${letterId}`} className="w-full">
      <Button
        buttonText="게시글 보러가기"
        type="CARD"
        bgColor="bg-secondary-brown-4"
      />
    </Link>
  )
}
