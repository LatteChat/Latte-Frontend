import { AnswerStatus } from '@/shared/types/AnswerStatus'

export type Letter = {
  id: number
  status: 'SENT' | 'SAVED' | 'DRAFT'
  title: string
}

export type Letters = Letter[]

type LetterStatusInfo = {
  beanLabel: string
  label: string
  icon: string
  image: string
}

export const LETTER_STATUS_JUNIOR_LABEL: Record<
  AnswerStatus,
  LetterStatusInfo
> = {
  WRITING: {
    beanLabel: '저장됨',
    label: '저장됨',
    icon: '/images/coffee-bean-image.svg',
    image: '/images/coffee-beans-image.svg',
  },
  SEND: {
    beanLabel: '전송됨',
    label: '답변 대기 중',
    icon: '/images/latte-image.svg',
    image: '/images/latte-image.svg',
  },
  WAITING: {
    beanLabel: '전송됨',
    label: '답변 대기 중',
    icon: '/images/latte-image.svg',
    image: '/images/latte-image.svg',
  },
  SAVED: {
    beanLabel: '전송됨',
    label: '저장됨',
    icon: '/images/latte-image.svg',
    image: '/images/latte-image.svg',
  },
  ANSWERED: {
    beanLabel: '전송됨',
    label: '답변 완료',
    icon: '/images/latte-image.svg',
    image: '/images/latte-image.svg',
  },
  ADOPTED: {
    beanLabel: '전송됨',
    label: '채택 완료',
    icon: '/images/latte-image.svg',
    image: '/images/latte-image.svg',
  },
  MATCHED: {
    beanLabel: '전송됨',
    label: '답변 완료',
    icon: '/images/latte-image.svg',
    image: '/images/latte-image.svg',
  },
  EMPTY: {
    beanLabel: '대기중',
    label: '대기 중',
    icon: '/images/coffee-bean-image.svg',
    image: '/images/coffee-beans-image.svg',
  },
}

export const LETTER_STATUS_LABEL: Record<AnswerStatus, LetterStatusInfo> = {
  WRITING: {
    beanLabel: '저장됨',
    label: '저장됨',
    icon: '/images/coffee-bean-image.svg',
    image: '/images/coffee-beans-image.svg',
  },
  SEND: {
    beanLabel: '전송됨',
    label: '답변 대기 중',
    icon: '/images/latte-image.svg',
    image: '/images/latte-image.svg',
  },
  WAITING: {
    beanLabel: '전송됨',
    label: '답변 대기 중',
    icon: '/images/latte-image.svg',
    image: '/images/latte-image.svg',
  },
  SAVED: {
    beanLabel: '전송됨',
    label: '저장됨',
    icon: '/images/latte-image.svg',
    image: '/images/latte-image.svg',
  },
  ANSWERED: {
    beanLabel: '전송됨',
    label: '답변 완료',
    icon: '/images/latte-image.svg',
    image: '/images/latte-image.svg',
  },
  ADOPTED: {
    beanLabel: '전송됨',
    label: '채택 완료',
    icon: '/images/latte-image.svg',
    image: '/images/latte-image.svg',
  },
  MATCHED: {
    beanLabel: '전송됨',
    label: '답변 완료',
    icon: '/images/latte-image.svg',
    image: '/images/latte-image.svg',
  },
  EMPTY: {
    beanLabel: '대기중',
    label: '대기 중',
    icon: '/images/coffee-bean-image.svg',
    image: '/images/coffee-beans-image.svg',
  },
}
