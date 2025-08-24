import { useUserInfo } from '@/shared/hooks/useUserInfo'
import { useGetJuniorInfoQuery } from './useGetJuniorInfoQuery'

export const useGetMyInfoQuery = () => {
  const { data: userInfo } = useUserInfo()

  const juniorQuery = useGetJuniorInfoQuery({
    juniorId: userInfo?.juniorId,
  })

  const seniorQuery = useGetJuniorInfoQuery({
    juniorId: userInfo?.juniorId,
  })

  return userInfo?.memberType === 'JUNIOR' ? juniorQuery : seniorQuery
}
