import Image from 'next/image'
import { useGetLetterDetailQuery } from '@/features/letter/hooks/useGetLetterDetailQuery'
import CardHeaderContainer from '../CardHeaderContainer'
import LetterAnswerCard from '../../components/LetterAnswerCard'
import LetterActionBox from '../../components/LetterActionBox'

export default function JuniorLetterCardContainer({
  letterId,
}: {
  letterId: number
}) {
  const {
    data: letterDetail,
    isLoading,
    isError,
  } = useGetLetterDetailQuery({
    letterId: letterId as number,
  })

  if (isLoading) return <p>로딩중</p>
  if (isError) return <p>데이터를 불러올 수 없습니다.</p>
  if (!letterDetail) return <p>존재하지 않는 게시글입니다.</p>

  console.log(letterDetail)

  const renderLetterAnswer = () => {
    const hasAnswer =
      letterDetail?.answerStatus === 'ANSWERED' ||
      letterDetail?.answerStatus === 'ADOPTED' ||
      letterDetail?.answerStatus === 'MATCHED'

    if (!hasAnswer) {
      return (
        letterDetail.answerResponseDto && (
          <LetterAnswerCard
            answer={{
              user: letterDetail.answerResponseDto?.seniorDetailDto,
              content: letterDetail.answerResponseDto?.content,
              createdAt: letterDetail.answerResponseDto?.createdAt,
            }}
          />
        )
      )
    }
  }

  return (
    <section className="shadow-border rounded-10 bg-white p-5">
      <CardHeaderContainer
        letterId={letterId as number}
        answerStatus={letterDetail?.answerStatus ?? 'SAVED'}
      />

      <article>
        <header className="flex flex-col items-start gap-2">
          <span className="b9 bg-secondary-brown-2 inline-block rounded px-2 py-0.5 text-white">
            {letterDetail?.category}
          </span>
          <h2 className="h3 text-black">{letterDetail?.title}</h2>
        </header>

        {letterDetail?.image && (
          <figure className="p-5">
            <Image
              src={letterDetail?.image}
              alt="사연 이미지"
              className="shadow-border aspect-square w-full rounded-10 object-cover"
              width={255}
              height={255}
            />
          </figure>
        )}

        <p className="b1 text-gray-7">
          {letterDetail?.content}
          <span className="text-black">&nbsp;&nbsp;...더보기</span>
        </p>

        {renderLetterAnswer()}
      </article>

      <LetterActionBox answerStatus={letterDetail.answerStatus} />
    </section>
  )
}
