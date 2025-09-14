import { useEffect, useRef, useState } from 'react'

export default function LetterContentBox({
  image,
  content,
}: {
  image?: string
  content: string
}) {
  const [expanded, setExpanded] = useState(false)
  const [isOverflow, setIsOverflow] = useState(false)
  const textRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (textRef.current) {
      const { scrollHeight, clientHeight } = textRef.current
      if (scrollHeight > clientHeight) {
        setIsOverflow(true)
      }
    }
  }, [content])

  return (
    <>
      {image && (
        <figure className="mb-5 px-5">
          <img
            src={image}
            alt="사연 이미지"
            className="aspect-square w-full rounded-10 object-cover shadow-border"
            width={255}
            height={255}
          />
        </figure>
      )}

      <div className="relative">
        <p
          ref={textRef}
          className={`b1 whitespace-pre-line text-gray-7 ${
            expanded ? '' : 'clamp-with-more'
          } `}
        >
          {content}
        </p>
        {!expanded && isOverflow && (
          <span
            className="absolute bottom-0 right-0 cursor-pointer bg-white pl-1 text-black"
            onClick={() => setExpanded(true)}
          >
            ...더보기
          </span>
        )}
      </div>
    </>
  )
}
