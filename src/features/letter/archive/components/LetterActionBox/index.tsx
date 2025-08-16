export default function LetterActionBox({
  description,
  buttonText,
}: {
  description: string
  buttonText: string
}) {
  return (
    <div className="mt-8 flex flex-col items-center gap-5">
      <p className="b6">{description}</p>
      <button className="b4 w-full rounded-10 bg-gray-400 py-3.5 text-white">
        {buttonText}
      </button>
    </div>
  )
}
