import { useUserInfo } from '@/shared/hooks/useUserInfo'
import useGetJuniorInfoQuery from './useGetJuniorInfoQuery'
import useGetSeniorInfoQuery from './useGetSeniorInfoQuery'

export default function useGetMyInfoQuery() {
  const { data: userInfo } = useUserInfo()

  const juniorQuery = useGetJuniorInfoQuery({
    juniorId: userInfo?.juniorId!,
  })

  const seniorQuery = useGetSeniorInfoQuery({
    seniorId: userInfo?.seniorId!,
  })

  return userInfo?.memberType === 'JUNIOR' ? juniorQuery : seniorQuery
}
