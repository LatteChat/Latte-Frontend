import { CATEGORIES_MAP } from '@/shared/types/Category'

export default function PostTag({ tag }: { tag: string }) {
  return (
    <span className="b9 flex select-none items-center justify-center rounded-[0.25rem] bg-secondary-brown-2 px-[0.28rem] py-[0.125rem] text-white">
      {CATEGORIES_MAP[tag]}
    </span>
  )
}
