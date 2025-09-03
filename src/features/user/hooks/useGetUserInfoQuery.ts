import useGetJuniorInfoQuery from './useGetJuniorInfoQuery'
import useGetSeniorInfoQuery from './useGetSeniorInfoQuery'

export default function useGetUserQuery({
  memberType,
  userId,
}: {
  memberType: 'SENIOR' | 'JUNIOR'
  userId?: number
}) {
  if (!userId) {
    throw new Error('userId 값이 없습니다')
  }
  const juniorQuery = useGetJuniorInfoQuery({
    juniorId: userId,
  })

  const seniorQuery = useGetSeniorInfoQuery({
    seniorId: userId,
  })

  return memberType === 'JUNIOR' ? juniorQuery : seniorQuery
}
