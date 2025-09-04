import { useGetJuniorLetterDetail } from '@/features/letter/detail/hooks/useGetJuniorLetterDetail'
import useSaveLetterImageQuery from '@/features/letter/hooks/useSaveLetterImageQuery'
import useSendLetterQuery from '@/features/letter/hooks/useSendLetterQuery'
import ImageGeneratingModal from '@/features/modal/components/ImageGeneratingModal'
import NavTabBar from '@/shared/components/NavTabBar'
import Topbar from '@/shared/components/Topbar'
import { useModal } from '@/shared/contexts/ModalContext'
import { useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'

const TOPBAR_ICONS = [
  {
    iconUrl: '/icons/alarm-icon.svg',
    alt: '알람',
    href: '',
  },
  {
    iconUrl: '/icons/search-icon.svg',
    alt: '검색',
    href: '',
  },
]

export default function LetterImageGenerateContainer() {
  const params = useParams()
  const letterId = params.id ? Number(params.id) : null
  const router = useRouter()
  const queryClient = useQueryClient()

  if (!letterId) return

  const { openModal } = useModal()
  const { mutate: sendLetterMutate } = useSendLetterQuery()
  const { mutate: saveLetterImageMutate } = useSaveLetterImageQuery(letterId)
  const { data: letterDetail } = useGetJuniorLetterDetail({
    letterId,
  })

  console.log(letterDetail)

  return (
    <div className="bg-secondary-brown-1">
      <div className="sticky top-0 z-10 flex flex-col gap-4 bg-white">
        <Topbar icons={TOPBAR_ICONS} />
        <NavTabBar />
      </div>

      <div className="w-full px-5 py-10">
        <div className="w-fufll flex flex-col items-center rounded-10 bg-white p-5 shadow-border">
          <h1 className="h3 mb-10">AI 사진이 생성되었어요!</h1>

          <div className="flex w-full flex-col items-center gap-4">
            {letterDetail?.image && (
              <div className="px-5">
                <img
                  src={letterDetail?.image}
                  width={400}
                  height={400}
                  alt="생성된 AI 사연 이미지"
                  className="aspect-square h-64 w-64 rounded-10 object-cover shadow-border"
                />
              </div>
            )}

            <button
              onClick={() => {
                openModal(<ImageGeneratingModal />)
                saveLetterImageMutate(
                  {
                    letterId,
                  },
                  {
                    onSuccess: (data) => {
                      queryClient.invalidateQueries({
                        queryKey: ['/junior/letter/detail', letterId],
                      })
                      queryClient.invalidateQueries({
                        queryKey: ['/junior/coffee'],
                      })
                    },
                  }
                )
              }}
              className="b4 flex w-full items-center justify-center gap-2 rounded-full bg-secondary-brown-1 py-2 shadow-border"
            >
              <img src="/icons/picture-icon.svg" />
              이미지 다시 생성하기
            </button>
          </div>

          <div className="mt-10 flex w-full flex-col items-center gap-5">
            <p className="b6 text-black">사연을 보낼까요?</p>
            <div className="flex w-full gap-2">
              <button
                onClick={() => {
                  sendLetterMutate({
                    letterId: letterId!,
                  })
                }}
                className="b4 flex-1 rounded-10 bg-secondary-brown-2 py-3 text-white"
              >
                보내기
              </button>
              <button
                onClick={() => router.back()}
                className="b4 flex-1 rounded-10 bg-gray-3 py-3 text-black"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
