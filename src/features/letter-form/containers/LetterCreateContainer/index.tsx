'use client'

import TitleHeader from '@/shared/components/TitleHeader'
import Image from 'next/image'
import { useState } from 'react'
import LetterVisibilityToggle from '../../components/LetterVisibilityToggle'
import OptionSelectBox from '../../components/OptionSelectBox'
import InactiveEditorBox from '../../components/InactvieEditorBox/inde'
import ActiveEditorBox from '../../components/ActiveEditorBox'
import { useLetterCreateState } from '../../store/letterCreateStore'
import SaveButton from '../../components/SaveButton'
import TemporarySaveMessage from '../../components/temporarySaveMessage'

export default function LetterCreateContainer() {
  const [isEditorFocus, setIsEditorFocus] = useState(false)
  const { category, title, content } = useLetterCreateState()

  return (
    <>
      <div>
        <TitleHeader title="사연 작성하기" />

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
            className={`${category ? 'items-start' : 'items-center'} relative flex w-full flex-1 flex-col overflow-hidden rounded-t-[1.25rem] bg-white shadow-border`}
          >
            {isEditorFocus || title || content ? (
              <ActiveEditorBox button={<SaveButton />} />
            ) : (
              <InactiveEditorBox
                setIsEditorFocus={setIsEditorFocus}
                button={<SaveButton />}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
