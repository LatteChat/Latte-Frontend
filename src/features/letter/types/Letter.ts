export type Letter = {
  id: number
  status: 'SENT' | 'SAVED' | 'DRAFT'
  title: string
}

export type Letters = Letter[]

type LetterStatus = 'SENT' | 'SAVED' | 'DRAFT'

type LetterStatusInfo = {
  label: string
  icon: string
  image: string
}

export const LETTER_STATUS_LABEL: Record<LetterStatus, LetterStatusInfo> = {
  SENT: {
    label: '전송됨',
    icon: '/images/latte-image.svg',
    image: '/images/latte-image.svg',
  },
  SAVED: {
    label: '저장됨',
    icon: '/images/coffee-bean-image.svg',
    image: '/images/coffee-beans-image.svg',
  },
  DRAFT: {
    label: '미작성',
    icon: '/images/coffee-bean-image.svg',
    image: '/images/coffee-beans-image.svg',
  },
}
