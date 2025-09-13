import { useQuery } from '@tanstack/react-query'
import {
  fetchRecentJuniorLetterList,
  Letter,
} from '../services/letterListService.client'

type PlaceholderLetter = Omit<Letter, 'answerStatus'> & {
  answerStatus: 'EMPTY'
}

export const useGetRecentJuniorLetterListQuery = ({
  juniorId,
}: {
  juniorId: number
}) => {
  return useQuery({
    queryKey: ['/junior/coffee', { juniorId }],
    queryFn: () => fetchRecentJuniorLetterList({ juniorId }),
    retry: 2,
    enabled: !!juniorId,
    select: (data) => {
      const list: Letter[] = data || []

      if (list.length < 5) {
        return [
          ...list,
          ...Array.from({ length: 5 - list.length }, (_, i) => ({
            letterId: -i,
            juniorId,
            answerStatus: null,
            letterStatus: 'EMPTY' as const,
            title: '',
            content: '',
            image: '',
            category: '',
            view: 0,
            heart: 0,
            createAt: '',
          })),
        ] as (Letter | PlaceholderLetter)[]
      }

      return list
    },
  })
}
