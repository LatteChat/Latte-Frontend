import { useQuery } from '@tanstack/react-query'
import { getUser } from '../../features/user/services/userService.client'
import { UserInfo } from '../../features/user/types/User'

export const useUserInfo = () => {
  return useQuery<UserInfo, Error>({
    queryKey: ['/me'],
    queryFn: getUser,
  })
}
