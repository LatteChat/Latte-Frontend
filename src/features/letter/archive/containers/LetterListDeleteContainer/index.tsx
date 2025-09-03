import DeletePostCard from '../../components/DeletePostCard'
import { useState } from 'react'
import { useModal } from '@/shared/contexts/ModalContext'
import DeleteLetterConfirmModal from '@/features/modal/components/DeleteLetterConfirmModal'

export default function LetterListDeleteContainer({
  letters,
}: {
  letters: any
}) {
  const [deleteList, setDeleteList] = useState<number[]>([])
  const { openModal } = useModal()

  const handleSelectCard = (letterId: number) => {
    if (deleteList.includes(letterId)) {
      setDeleteList((prev) => prev.filter((id) => id !== letterId))
    } else {
      setDeleteList((prev) => [...prev, letterId])
    }
  }

  const handleDeleteLetters = () => {
    openModal(<DeleteLetterConfirmModal deleteList={deleteList} />)
  }

  return (
    <div className="relative">
      <button onClick={handleDeleteLetters} className="absolute -top-8 left-0">
        <img src="/icons/trash-icon.svg" className="aspect-square h-6 w-6" />
      </button>

      <div className="flex flex-col gap-[1.875rem]">
        {letters?.content?.map((letter: any) => {
          return (
            <DeletePostCard
              key={letter.letterId}
              post={{
                letterId: letter.letterId,
                tag: letter.category,
                title: letter.title,
                content: letter.content,
                image: letter.image,
                date: letter.createAt,
              }}
              isSelected={deleteList.includes(letter.letterId)}
              onSelect={handleSelectCard}
            />
          )
        })}
      </div>
    </div>
  )
}
