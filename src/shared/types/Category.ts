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

export const CATEGORIES_MAP: Record<string, string> = {
  CAREER: '취업 및 회사',
  EDUCATION: '진로',
  NEWS: '뉴스',
  SHOPPING: '쇼핑',
  PETS: '반려동물',
  ENTERTAINMENT: '연예',
  FINANCE: '증권 및 금융',
  SPORTS: '스포츠',
  GAME: '게임',
  BEAUTY_FASHION: '뷰티 및 패션',
  BOOKS: '독서',
  TRAVEL: '여행',
  MOVIE: '영화',
  ANIMATION: '애니메이션',
  FOOD: '음식 및 요리',
  MUSIC: '음악 및 악기',
}
