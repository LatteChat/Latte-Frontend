'use client'

import useLikePost from '../../hooks/useLikePost'

export default function PostLikeButtonContainer({
  letterId,
  initialLike = false,
}: {
  letterId: number
  initialLike?: boolean
}) {
  const { onLike } = useLikePost({
    letterId,
  })

  return (
    <button
      onClick={onLike}
      className="flex items-center gap-1 rounded-10 bg-secondary-brown-4 px-4 py-2 text-secondary-brown-1"
    >
      <img
        src={`${initialLike ? '/icons/fill-heart-icon.svg' : '/icons/empty-heart-icon.svg'}`}
      />
      <span className="b6">공감해요</span>
    </button>
  )
}
