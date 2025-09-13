'use client'

import TitleHeader from '@/shared/components/TitleHeader'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useLetterCreateState } from '@/features/letter-create/store/letterCreateStore'
import LetterVisibilityToggle from '../../components/LetterVisibilityToggle'
import OptionSelectBox from '../../components/OptionSelectBox'
import InactiveEditorBox from '../../components/InactvieEditorBox/inde'
import ActiveEditorBox from '../../components/ActiveEditorBox'

export default function LetterCreateContainer() {
  const [isEditorFocus, setIsEditorFocus] = useState(false)
  const [showSaving, setShowSaving] = useState(false)

  const { category, title, content } = useLetterCreateState()

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSaving(true)
      setTimeout(() => setShowSaving(false), 2000)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

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
            {
              <span
                className={`b10 flex items-center gap-1 text-gray-5 ${showSaving ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
              >
                임시 저장 중...
                <img src="/icons/refresh-icon.svg" className="animate-spin" />
              </span>
            }
          </div>

          <div
            className={`${category ? 'items-start' : 'items-center'} relative flex w-full flex-1 flex-col overflow-hidden rounded-t-[1.25rem] bg-white shadow-border`}
          >
            {isEditorFocus || title || content ? (
              <ActiveEditorBox />
            ) : (
              <InactiveEditorBox setIsEditorFocus={setIsEditorFocus} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
