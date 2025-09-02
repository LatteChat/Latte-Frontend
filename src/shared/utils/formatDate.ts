export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const currentYear = new Date().getFullYear()

  if (year === currentYear) {
    return `${month}월 ${day}일`
  } else {
    return `${year}년 ${month}월 ${day}일`
  }
}

export function formatDateDefault(dateString: string): string {
  if (!dateString || dateString.length === 0) {
    return '-년 -월 -일'
  }
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return `${year}년 ${month}월 ${day}일`
}

export function formatDateTime(dateString: string): string {
  if (!dateString || dateString.length === 0) {
    return '-년 -월 -일'
  }

  const date = new Date(dateString)
  const now = new Date()

  const diffMs = now.getTime() - date.getTime()
  const diffMinutes = Math.floor(diffMs / (1000 * 60))
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))

  if (diffMinutes < 60) {
    return diffMinutes <= 0 ? '방금 전' : `${diffMinutes}분 전`
  }

  if (diffHours < 24) {
    return `${diffHours}시간 전`
  }

  // 하루 이상 → 날짜 표시
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${year}년 ${month}월 ${day}일`
}
