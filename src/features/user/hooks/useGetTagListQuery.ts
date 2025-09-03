import { useQuery } from '@tanstack/react-query'
import { fetchJuniorTagList } from '../services/userService.client'

export default function useGetTagListQuery({ keyword }: { keyword: string }) {
  return useQuery({
    queryKey: ['/junior/tags/search', keyword],
    queryFn: () => fetchJuniorTagList({ keyword: keyword! }),
    retry: 2,
    enabled: !!keyword,
  })
}
