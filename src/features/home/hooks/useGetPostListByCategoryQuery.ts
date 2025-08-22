import { useQuery } from '@tanstack/react-query'
import { fetchPostListByCategory } from '../services/homeService.client'
import { Category } from '@/shared/types/Type'

export const useGetPostListByCategoryQuery = ({
  page,
  category,
}: {
  page: number
  category: Category | null
}) => {
  return useQuery({
    queryKey: ['/main/all', { page, category }],
    queryFn: () =>
      fetchPostListByCategory({ page, category: category as Category }),
    enabled: !!category,
    retry: 2,
  })
}
