import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('accessToken')?.value

  const protectedRoutes = [
    '/latte-chat/mypage',
    '/latte-chat/letters',
    '/latte-chat/chats',
    '/latte-chat/store',
  ]

  const forbiddenRoutes = ['/latte-chat/user']

  const pathname = request.nextUrl.pathname
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  if (forbiddenRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL('/forbidden', request.url))
  }

  return NextResponse.next()
}
