import Button from '@/shared/components/Button'
import { useModal } from '@/shared/contexts/ModalContext'
import { useState } from 'react'
import MentorRequestModal from '../MentorRequestModal'

export default function RequestMentorButton() {
  const { openModal, closeModal } = useModal()
  const [modalStatus, setModalStatus] = useState<
    'REQUEST' | 'FAIL' | 'SUCCESS'
  >('REQUEST')
  const isPremium = false

  const handleRequestMentor = () => {
    openModal(() => (
      <MentorRequestModal
        modalStatus={modalStatus}
        setModalStatus={setModalStatus}
        closeModal={closeModal}
        isPremium={isPremium}
      />
    ))
  }

  return (
    <Button
      buttonText="멘토링 요청하기"
      type="CARD"
      onClick={handleRequestMentor}
    />
  )
}
