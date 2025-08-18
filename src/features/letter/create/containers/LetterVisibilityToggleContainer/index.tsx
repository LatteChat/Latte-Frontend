import Toggle from '@/shared/components/Toggle'
import { useState } from 'react'

export default function LetterVisibilityToggleContainer() {
  // 사연 공개 여부 상태값 관리
  const [isChecked, setIsChecked] = useState(false)

  const handleToggle = () => {
    setIsChecked(!isChecked)
  }

  return (
    <Toggle
      offLabel="게시글 비공개"
      onLabel="게시글 공개"
      width={'6.5rem'}
      onClick={handleToggle}
      isChecked={isChecked}
    />
  )
}
