import { useQuery } from '@tanstack/react-query'
import { fetchFilteredSeniorLetterList } from '../services/letterService.senior.client'

export const useGetFilteredSeniorLetterListQuery = ({
  seniorId,
  answer,
  category,
  page,
}: {
  seniorId: number
  category: string | null
  answer: 0 | 1 | 2 | 3 | 4
  page: number
}) => {
  console.log(seniorId, answer, category, page)
  return useQuery({
    queryKey: ['/senior/letter/list', { seniorId, answer, category, page }],
    queryFn: () =>
      fetchFilteredSeniorLetterList({
        seniorId,
        answer,
        category,
        page,
      }),
    retry: 2,
    enabled: !!seniorId,
  })
}
