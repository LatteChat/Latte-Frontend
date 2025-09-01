import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './customSwiperStyles.css'
import LetterAnswerCard from '../../components/LetterAnswerCard'
import { AgeType } from '@/features/user/types/User'
import { useAnswerAdoptActions } from '@/features/letter/stores/answerAdoptStore'

export default function AnswerListContainer({ answers }: { answers: any[] }) {
  const { setSelectedAnswer } = useAnswerAdoptActions()

  console.log('answers:', answers)
  return (
    <section className="mt-5 flex w-full flex-col items-center overflow-hidden">
      <Swiper
        className="w-full"
        modules={[Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => {
          setSelectedAnswer(answers[swiper.activeIndex].answerId)
        }}
      >
        {answers.map(
          (answer: {
            answerId: number
            answerStatus: any
            content: string
            createdAt: string
            seniorDetailDto: {
              seniorId: number
              name: string
              image: string | null
              age: AgeType
              tag: string[]
            }
          }) => (
            <SwiperSlide key={answer.answerId}>
              <LetterAnswerCard
                answer={{
                  user: {
                    name: answer.seniorDetailDto.name,
                    image:
                      answer.seniorDetailDto.image ??
                      '/images/coffee-bean-image.png',
                    tag: answer.seniorDetailDto.tag,
                    age: answer.seniorDetailDto.age,
                  },
                  content: answer.content,
                  createdAt: answer.createdAt,
                }}
                adopted={answer.answerStatus === 'ADOPTED'}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </section>
  )
}
