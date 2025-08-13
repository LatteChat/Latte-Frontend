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
    <div className="mb-5 mt-4 flex flex-col gap-5">
      <div className="space-y-4">
        <Image
          src={imageUrl}
          alt="사연 AI 이미지"
          className="aspect-square w-full rounded-[0.625rem] object-cover"
          width={38}
          height={38}
        />
        <div>
          <span className="b9 rounded bg-gray-200 px-1 py-[2px] text-gray-400">
            {category}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="b2">{title}</h1>
        <p className="b4 text-gray-500">{content}</p>
      </div>
    </div>
  )
}
