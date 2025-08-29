import Image from 'next/image'

export default function PostContent({
  imageUrl,
  category,
  title,
  content,
}: {
  imageUrl?: string
  category?: string
  title: string
  content: string
}) {
  return (
    <div className="mb-5 mt-4 flex flex-col gap-5 bg-white">
      <div className="space-y-4">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="사연 AI 이미지"
            className="aspect-square w-full rounded-10 object-cover"
            width={389}
            height={389}
          />
        )}
        <div>
          {category && (
            <span className="b9 rounded bg-secondary-brown-2 px-1 py-[2px] text-white">
              {category}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="h3">{title}</h1>
        <div>
          <p className="b1 line-clamp-6 text-gray-7">{content}</p>
        </div>
      </div>
    </div>
  )
}
