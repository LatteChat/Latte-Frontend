import { useQuery } from '@tanstack/react-query'
import { fetchPostList } from '../services/homeService.client'
import { Category } from '@/shared/types/Type'

export const useGetPostListQuery = ({
  page,
  filter,
  category,
}: {
  page: number
  filter: 'all' | 'view'
  category: Category | null
}) => {
  return useQuery({
    queryKey: ['/main/all', { page, filter }],
    queryFn: () => fetchPostList({ page, filter }),
    retry: 2,
    enabled: !!!category,
  })
}
