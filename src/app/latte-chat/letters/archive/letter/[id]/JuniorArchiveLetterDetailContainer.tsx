import LetterActionButtonBox from '@/features/letter/detail/components/junior/LetterActionButtonBox'
import AnswerListContainer from '@/features/letter/detail/containers/AnswerListContainer'
import { useGetJuniorLetterDetail } from '@/features/letter/detail/hooks/useGetJuniorLetterDetail'
import LetterCardLayout from '@/shared/components/LetterCardLayout'
import Image from 'next/image'
import { useParams } from 'next/navigation'

export default function JuniorArchiveLetterDetailContainer() {
  const params = useParams()
  const letterId = params.id ? Number(params.id) : null

  if (!letterId) return

  const { data: letterDetail } = useGetJuniorLetterDetail({
    letterId,
  })
  console.log('청년 사연 상세 조회:', letterDetail)

  const renderTitle = () => {
    if (letterDetail?.letterStatus === 'WRITING') {
      return '저장된 사연'
    } else if (letterDetail?.letterStatus === 'ADOPTED') {
      return '내가 채택한 사연'
    } else if (letterDetail?.letterStatus === 'ANSWERED') {
      return '답변이 완료된 사연'
    } else if (letterDetail?.letterStatus === 'SENT') {
      return '답변 대기 중인 사연'
    } else {
      return ''
    }
  }

  return (
    <LetterCardLayout
      title={renderTitle()}
      actionButton={
        letterDetail?.letterStatus && (
          <LetterActionButtonBox letterStatus={letterDetail?.letterStatus} />
        )
      }
    >
      <div className="flex flex-col items-start gap-2">
        <div className="flex gap-2">
          <span className="b9 inline-block rounded bg-secondary-brown-2 px-2 py-0.5 text-white">
            취업 및 회사
          </span>
          <span className="b9 inline-block rounded border border-primary px-2 py-0.5 text-secondary-brown-2">
            현실적인
          </span>
        </div>
        <h2 className="h3 text-black">{letterDetail?.title}</h2>
      </div>

      <figure className="p-5">
        <Image
          src={letterDetail?.image ?? '/images/test-image.png'}
          alt="사연 이미지"
          className="aspect-square w-full rounded-10 object-cover shadow-border"
          width={255}
          height={255}
        />
      </figure>

      <p className="b1 line-clamp-6 text-gray-7">
        {letterDetail?.content}
        <span className="text-black">&nbsp;&nbsp;...더보기</span>
      </p>

      <AnswerListContainer
        answers={letterDetail?.answerResponseDto ?? []}
        isAdopted={true}
      />
    </LetterCardLayout>
  )
}
