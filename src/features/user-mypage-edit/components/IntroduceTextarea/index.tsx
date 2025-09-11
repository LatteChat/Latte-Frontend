export default function IntroduceTextarea({
  introduce,
  setIntroduce,
}: {
  introduce: string
  setIntroduce: React.Dispatch<React.SetStateAction<string>>
}) {
  const handleChangeIntroduce = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIntroduce(e.target.value)
  }

  return (
    <div className="flex flex-1 flex-col gap-4">
      <h3>자기소개</h3>
      <textarea
        value={introduce}
        onChange={handleChangeIntroduce}
        className="b1 w-full flex-1 resize-none rounded-10 px-4 py-5 shadow-border outline-none"
      />
    </div>
  )
}
