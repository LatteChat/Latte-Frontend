export default async function baseHttp<T>(
  url: string,
  options?: RequestInit & { revalidate?: number }
): Promise<T> {
  const { revalidate, ...rest } = options || {}

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, {
    ...rest,
    headers: {
      'Content-Type': 'application/json',
      ...(rest.headers || {}),
    },
    credentials: 'include',
  })

  if (!res.ok) {
    throw new Error(await res.text())
  }

  const text = await res.text()
  if (!text) {
    return null as T
  }

  return JSON.parse(text) as T
}
