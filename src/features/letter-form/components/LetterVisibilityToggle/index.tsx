import Toggle from '@/shared/components/Toggle'
import { useLetterCreateStore } from '../../store/letterCreateStore'

export default function LetterVisibilityToggle() {
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
