export default function LetterActionBox({
  description,
  buttonText,
}: {
  description: string
  buttonText: string
}) {
  return (
    <div className="mt-8 flex flex-col items-center gap-5">
      <p className="b6 text-black">{description}</p>
      <button className="h4 bg-secondary-brown-2 text-secondary-brown-1 w-full rounded-10 py-3.5">
        {buttonText}
      </button>
    </div>
  )
}
