export default function PostFilterTag({ label }: { label: string }) {
  return (
    <span className="b4 shadow-border cursor-pointer whitespace-nowrap rounded-[0.625rem] border-2 border-transparent bg-white px-4 py-2 hover:border-2 hover:border-gray-500">
      {label}
    </span>
  )
}
