import { useLetterCreateStore } from '@/features/letter/stores/letterCreateStore'
import Toggle from '@/shared/components/Toggle'

export default function LetterVisibilityToggleContainer() {
  const isOpen = useLetterCreateStore((state) => state.isOpen)
  const setIsOpen = useLetterCreateStore((state) => state.setIsOpen)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Toggle
      offLabel="게시글 비공개"
      onLabel="게시글 공개"
      width={'6.5rem'}
      onClick={handleToggle}
      isChecked={isOpen}
    />
  )
}
