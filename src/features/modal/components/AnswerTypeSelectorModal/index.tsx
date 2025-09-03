import { useLetterCreateStore } from '@/features/letter/stores/letterCreateStore'
import CategoryTag from '@/features/user/onboarding/components/CategoryTag'
import { useModal } from '@/shared/contexts/ModalContext'

const ANSWERTYPES = [
  '편안한',
  '공감가는',
  '따뜻한',
  '위로되는',
  '친근한',
  '감성적인',
  '격려하는',
  '밝은',
  '현실적인',
  '팩트폭행',
  '직설적인',
  '솔직한',
  '기타',
  '선택 안함',
]

export default function AnswerTypeSelectorModal() {
  const { closeModal } = useModal()
  const selectedAnswerType = useLetterCreateStore((state) => state.answerType)
  const setAnswerType = useLetterCreateStore((state) => state.setAnswerType)

  return (
    <div className="flex w-full flex-col items-start gap-5 rounded-xl bg-white p-6 shadow-lg">
      <button onClick={closeModal} className="inline-block">
        <img
          src="/icons/close-icon.svg"
          alt="닫기 아이콘"
          className="aspect-square h-6 w-6"
        />
      </button>
      <div className="flex flex-col gap-5">
        <span className="h2">2/2</span>
        <h1 className="h2 whitespace-pre-line">{`어떤 느낌의 답변을 원하세요?`}</h1>
      </div>

      <div className="flex flex-wrap gap-3">
        {ANSWERTYPES.map((answerType) => (
          <CategoryTag
            key={answerType}
            label={answerType}
            isSelected={selectedAnswerType[0] === answerType}
            onClick={() => {
              setAnswerType(answerType)
              closeModal()
            }}
          />
        ))}
      </div>
    </div>
  )
}
