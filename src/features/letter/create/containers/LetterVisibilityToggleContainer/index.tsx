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
      offLabel="게시글 공개"
      onLabel="게시글 공개"
      width={'6rem'}
      onClick={handleToggle}
      isChecked={isOpen}
      offColor="bg-gray-3 text-black"
      onColor="bg-secondary-brown-4 text-white"
    />
  )
}
