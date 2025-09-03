import PostCard from '@/shared/components/PostCard'
import Link from 'next/link'

export default function LetterListViewContainer({ letters }: { letters: any }) {
  return (
    <div className="flex flex-col gap-[1.875rem]">
      {letters?.content?.map((letter: any) => {
        return (
          <Link
            key={letter.letterId}
            href={`/latte-chat/letters/archive/letter/${letter.letterId}`}
          >
            <PostCard
              post={{
                tag: letter.category,
                title: letter.title,
                content: letter.content,
                image: letter.image,
                date: letter.createAt,
                likeCount: letter.heart,
                commentCount: letter.view,
                answerStatus: letter.answerStatus,
                letterStatus: letter.letterStatus,
              }}
              showStatus
              showShadow
            />
          </Link>
        )
      })}
    </div>
  )
}
