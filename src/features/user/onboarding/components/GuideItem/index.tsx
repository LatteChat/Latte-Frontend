import Image from 'next/image'

export default function GuideItem({
  imageUrl,
  title,
  description,
}: {
  imageUrl: string
  title: string
  description: string
}) {
  return (
    <div
      className={`flex items-center gap-5 rounded-10 border border-secondary-brown-2 bg-secondary-brown-1 px-2 py-3`}
    >
      <Image
        src={imageUrl}
        alt={title + ' 이미지'}
        width={240}
        height={240}
        className="aspect-square h-[3.75] w-[3.75rem]"
      />
      <div className="flex flex-col items-start gap-1">
        <span className="h4">{title}</span>
        <p className="b6 whitespace-pre-line">{description}</p>
      </div>
    </div>
  )
}
