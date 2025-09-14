import { httpSSR } from '@/shared/apis/http'
import { AgeType } from '@/features/user/types/User'

type Barista = {
  image: string
  seniorId: number
  name: string
  age: AgeType
}

type BaristaListResponse = Barista[]

// 이달의 바리스타 조회
export const fetchBaristaList = async (): Promise<BaristaListResponse> => {
  return await httpSSR(`/main/best/senior`, {
    method: 'GET',
  })
}
