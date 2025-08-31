export type Category =
  | 'NEWS'
  | 'SHOPPING'
  | 'PETS'
  | 'ENTERTAINMENT'
  | 'FINANCE'
  | 'SPORTS'
  | 'CAREER'
  | 'EDUCATION'
  | 'GAME'
  | 'BEAUTY_FASHION'
  | 'BOOKS'
  | 'TRAVEL'
  | 'MOVIE'
  | 'ANIMATION'
  | 'FOOD'
  | 'MUSIC'

export const CATEGORIES: { label: string; value: Category }[] = [
  { label: '취업 및 회사', value: 'CAREER' },
  { label: '진로', value: 'EDUCATION' },
  { label: '뉴스', value: 'NEWS' },
  { label: '쇼핑', value: 'SHOPPING' },
  { label: '반려동물', value: 'PETS' },
  { label: '연예', value: 'ENTERTAINMENT' },
  { label: '증권 및 금융', value: 'FINANCE' },
  { label: '스포츠', value: 'SPORTS' },
  { label: '게임', value: 'GAME' },
  { label: '뷰티 및 패션', value: 'BEAUTY_FASHION' },
  { label: '독서', value: 'BOOKS' },
  { label: '여행', value: 'TRAVEL' },
  { label: '영화', value: 'MOVIE' },
  { label: '애니메이션', value: 'ANIMATION' },
  { label: '음식 및 요리', value: 'FOOD' },
  { label: '음악 및 악기', value: 'MUSIC' },
]
