import Spinner from '@/shared/components/Spinner'

export default function CommentListSkeleton() {
  return (
    <div className="flex w-full items-center justify-center py-10">
      <Spinner />
    </div>
  )
}
