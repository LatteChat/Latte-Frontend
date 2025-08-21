import Image from 'next/image'

export default function PostContent({
  imageUrl,
  category,
  title,
  content,
}: {
  imageUrl: string
  category: string
  title: string
  content: string
}) {
  return (
    <div className="mb-5 mt-4 flex flex-col gap-5 bg-white">
      <div className="space-y-4">
        <Image
          src={imageUrl}
          alt="사연 AI 이미지"
          className="aspect-square w-full rounded-10 object-cover"
          width={38}
          height={38}
        />
        <div>
          <span className="b9 bg-secondary-brown-2 rounded px-1 py-[2px] text-white">
            {category}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="h3">{title}</h1>
        <div>
          <p className="b1 text-gray-7 line-clamp-6">{content}</p>
        </div>
      </div>
    </div>
  )
}
