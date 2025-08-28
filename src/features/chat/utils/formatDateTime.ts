export function formatDate(date: Date) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}년 ${m}월 ${d}일`
}

export function formatTime(date: Date) {
  const h = date.getHours()
  const m = String(date.getMinutes()).padStart(2, '0')
  const ampm = h < 12 ? '오전' : '오후'
  const hh = h % 12 === 0 ? 12 : h % 12
  return `${ampm} ${hh}:${m}`
}
