import { useLetterStateActions } from '@/features/letter-list-senior/stores/letterStateStore'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import CoffeeBeanIcon from '@/shared/assets/icons/coffee-bean-icon.svg'

export default function PreviewCard({
  offset,
  handleDragEnd,
  animate,
  imageUrl,
  title,
  isCenter,
  letterType,
}: {
  offset: number
  handleDragEnd: any
  animate: {
    x: number
    y: number
    scale: number
    opacity: number
    zIndex: number
  }
  imageUrl: string
  title: string
  isCenter: boolean
  letterType: 'NORMAL' | 'BONUS'
}) {
  const { setStatusState } = useLetterStateActions()

  useEffect(() => {
    if (isCenter) {
      setStatusState(letterType)
    }
  }, [letterType, isCenter, setStatusState])

  return (
    <motion.div
      layout
      className={`${letterType === 'BONUS' ? 'bg-latte-gradient-3 p-[4px]' : 'bg-white'} absolute flex aspect-square w-full rounded-2xl shadow-border`}
      drag={offset === 0 ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      initial={{ opacity: 0 }}
      animate={animate}
      exit={{ opacity: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      {letterType === 'BONUS' && isCenter && (
        <span className="h2 absolute -top-10 left-1/2 -translate-x-1/2 bg-latte-gradient-5 bg-clip-text text-transparent">
          보너스 사연
        </span>
      )}
      <div className="rounded-2xl bg-white">
        {isCenter && (
          <div
            className={`${letterType === 'BONUS' ? 'bg-latte-gradient-3' : 'bg-white'} absolute -top-4 right-3 rounded-10 p-[2px] shadow-border`}
          >
            <div className="flex items-center gap-1.5 rounded-10 bg-white px-2 py-1">
              <CoffeeBeanIcon color={'#000000'} className="h-3.5 w-3.5" />
              <span className="b6 text-black">
                {letterType === 'NORMAL' ? 300 : 500}콩
              </span>
            </div>
          </div>
        )}
        {!isCenter && (
          <div className="absolute inset-0 rounded-xl bg-black/50"></div>
        )}
        <img
          src={imageUrl}
          alt={title}
          draggable={false}
          className="aspect-square h-full w-full select-none rounded-2xl object-cover"
        />
      </div>
    </motion.div>
  )
}
