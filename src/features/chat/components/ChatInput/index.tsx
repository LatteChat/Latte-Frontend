export default function ChatInput() {
  return (
    <div className="flex gap-2 bg-white px-5 py-4">
      <img src="/icons/plus-icon.svg" />

      <div className="flex w-full overflow-hidden rounded-[1.25rem] bg-gray-200 pr-3">
        <input className="b10 flex-1 bg-transparent px-4 py-2 outline-none" />
        <img src="/icons/send-icon.svg" />
      </div>
    </div>
  )
}
