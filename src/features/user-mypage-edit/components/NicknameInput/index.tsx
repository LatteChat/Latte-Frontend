export default function NicknameInput({
  nickname,
  setNickname,
}: {
  nickname: string
  setNickname: React.Dispatch<React.SetStateAction<string>>
}) {
  const handleChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value)
  }

  return (
    <div className="flex w-48 gap-1 border-b border-gray-5">
      <input
        value={nickname}
        onChange={handleChangeNickname}
        maxLength={10}
        className="w-full bg-transparent text-black outline-none"
      />
      <span className="text-gray-5">{nickname.length}/10</span>
    </div>
  )
}
