import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './customSwiperStyles.css'
import LetterAnswerCard from '../../components/LetterAnswerCard'
import { AgeType } from '@/features/user/types/User'
import { useEffect, useRef, useState } from 'react'
import { useAnswerAdoptActions } from '@/features/letter-answer-adopt/stores/answerAdoptStore'

export default function AnswerListContainer({
  answers,
  letterStatus,
}: {
  answers: any[]
  letterStatus: any
}) {
  const { setSelectedAnswer } = useAnswerAdoptActions()
  const containerRef = useRef<HTMLDivElement>(null)
  const [maxHeight, setMaxHeight] = useState(0)

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        const slideEls = containerRef.current.querySelectorAll('.answer-slide')
        const heights = Array.from(slideEls).map((el) => el.scrollHeight)

        if (heights.length > 0) {
          setMaxHeight(Math.max(...heights) + 25)
        } else {
          setMaxHeight(0)
        }
      }
    }

    updateHeight()

    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [answers])

  useEffect(() => {
    if (answers && answers.length > 0) {
      setSelectedAnswer(answers[0].answerId)
    }
  }, [answers])

  return (
    <section
      ref={containerRef}
      className="mt-5 flex w-full flex-col items-center overflow-hidden"
    >
      <Swiper
        className="flex h-full w-full"
        modules={[Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => {
          setSelectedAnswer(answers[swiper.activeIndex].answerId)
        }}
        style={{ height: maxHeight ? `${maxHeight}px` : 'auto' }}
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
            <SwiperSlide
              key={answer.answerId}
              className="answer-slide flex h-full items-stretch"
            >
              <LetterAnswerCard
                answer={{
                  user: {
                    name: answer?.seniorDetailDto?.name,
                    image:
                      answer?.seniorDetailDto?.image ??
                      '/images/coffee-bean-image.png',
                    tag: answer?.seniorDetailDto?.tag,
                    age: answer?.seniorDetailDto?.age,
                  },
                  content: answer?.content,
                  createdAt: answer?.createdAt,
                }}
                adopted={answer?.answerStatus === 'ADOPTED'}
                isAdoptedLetter={letterStatus === 'ADOPTED'}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </section>
  )
}
