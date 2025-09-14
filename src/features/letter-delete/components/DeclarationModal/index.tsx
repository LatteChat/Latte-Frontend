import { useModal } from '@/shared/contexts/ModalContext'
import useDeleteLetterMutation from '../../hooks/useDeleteLetterMutation'
import Button from '@/shared/components/Button'
import CategoryTag from '@/features/user-onboarding/components/CategoryTag'
import { useState } from 'react'
import DeleteLetterSuccessModal from '../DeleteLetterSuccessModal'
import DeclarationSuccessModal from '../DeclarationSuccessModal'

const REPORT_REASONS = [
  '욕설 및 비속어',
  '광고 및 스팸성',
  '허위 사실',
  '성희롱 및 음란성 발언',
  '차별 및 혐오 발언',
  '폭력 및 위협성 발언',
  '주제와 무관한 내용',
  '기타',
] as const

export default function DeclarationModal() {
  const { closeModal, openModal } = useModal()
  const [selected, setSelected] = useState('')

  return (
    <div className="flex w-full flex-col items-center gap-5 bg-white px-5 py-10">
      <div className="flex flex-col items-center gap-2">
        <h1 className="h2 text-black">답변을 신고하시겠어요?</h1>
        <p className="b6 whitespace-pre-line text-center text-gray-5">{`신고 사유를 선택해주세요.\n허위 신고 시 패널티가 적용될 수 있습니다.`}</p>
      </div>

      <div className="my-2 flex w-full flex-wrap gap-3 px-2">
        {REPORT_REASONS.map((reason) => {
          return (
            <CategoryTag
              label={reason}
              isSelected={selected === reason}
              onClick={() => setSelected(reason)}
            />
          )
        })}
      </div>

      <div className="flex w-full gap-2">
        <Button
          type="MODAL"
          buttonText="신고"
          onClick={() => {
            openModal(<DeclarationSuccessModal />)
          }}
        />

        <Button
          type="MODAL"
          buttonText="취소"
          onClick={closeModal}
          bgColor="bg-gray-3"
          textColor="text-black"
        />
      </div>
    </div>
  )
}
