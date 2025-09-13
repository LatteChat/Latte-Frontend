'use client'

import TitleHeader from '@/shared/components/TitleHeader'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import ActiveEditorBox from '../../components/ActiveEditorBox'
import InactiveEditorBox from '../../components/InactvieEditorBox/inde'
import OptionSelectBox from '../../components/OptionSelectBox'
import LetterVisibilityToggle from '../../components/LetterVisibilityToggle'
import {
  useLetterCreateActions,
  useLetterCreateState,
} from '../../store/letterCreateStore'
import EditButton from '../../components/EditButton'
import TemporarySaveMessage from '../../components/temporarySaveMessage'
import { useGetJuniorArchiveLetterDetailQuery } from '@/features/letter-archive-detail-junior/hooks/useGetJuniorArchiveLetterDetailQuery'

export default function LetterEditContainer() {
  const params = useParams()
  const letterId = params?.id ? Number(params?.id) : null

  if (!letterId) return

  const { data: letterDetail } = useGetJuniorArchiveLetterDetailQuery({
    letterId,
  })

  const [isEditorFocus, setIsEditorFocus] = useState(false)

  const { category, title, content } = useLetterCreateState()
  const { setAll } = useLetterCreateActions()

  useEffect(() => {
    if (letterDetail) {
      setAll({
        title: letterDetail.title,
        content: letterDetail.content,
        isOpen: letterDetail.isOpen,
        category: letterDetail.category,
        answerType: letterDetail.answerType,
      })
    }
  }, [letterDetail])

  return (
    <>
      <div>
        <TitleHeader title="사연 수정하기" />

        <div className="flex h-auto min-h-[calc(100svh-8rem)] flex-col items-center bg-secondary-brown-1 px-5 pt-10">
          <OptionSelectBox />

          <figure className="flex justify-center">
            <Image
              src="/images/coffee-beans-image.svg"
              alt="커피빈 이미지"
              width={160}
              height={160}
              className="aspect-square h-40 w-40 opacity-70"
            />
          </figure>

          <div className="mb-2 flex w-full items-end justify-between gap-3 pr-3">
            <LetterVisibilityToggle />
            <TemporarySaveMessage />
          </div>

          <div
            className={`${category ? 'items-start' : 'items-center'} relative flex w-full flex-1 flex-col overflow-hidden rounded-t-[1.25rem] bg-white`}
          >
            {isEditorFocus || title || content ? (
              <ActiveEditorBox button={<EditButton letterId={letterId} />} />
            ) : (
              <InactiveEditorBox
                setIsEditorFocus={setIsEditorFocus}
                button={<EditButton letterId={letterId} />}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
