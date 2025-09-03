import { useQuery } from '@tanstack/react-query'
import { fetchJuniorTagList } from '../services/userService.client'

export default function useGetTagListQuery({ keyword }: { keyword: string }) {
  return useQuery({
    queryKey: ['/senior/detail', { keyword }],
    queryFn: () => fetchJuniorTagList({ keyword: keyword! }),
    retry: 2,
    select: (data) => {
      const newData = {
        ...data,
        type: 'SENIOR',
      }

      return newData
    },
    enabled: !!keyword,
  })
}
