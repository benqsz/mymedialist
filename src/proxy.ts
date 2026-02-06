import { headers } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { auth } from '@/auth'
import { SIGN_IN_PATH, UNAUTHORIZED_PATHS } from '@/auth/constants'

export async function proxy(req: NextRequest) {
  // Dont run on server actions
  // https://github.com/vercel/next.js/discussions/74255#discussioncomment-11680667
  if (req.headers.get('next-action')) {
    return NextResponse.next()
  }

  const pathname = req.nextUrl.pathname

  if (UNAUTHORIZED_PATHS.some(path => pathname.includes(path))) {
    return NextResponse.next()
  }

  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) {
    return NextResponse.redirect(new URL(SIGN_IN_PATH, req.url))
  }

  return NextResponse.next()
}

export const config = {
  /*
      - Exclude API routes
      - Exclude Next.js internal (_next/)
      - Exclude all files with an extension (e.g., .css, .js, .png, .ico)
  */
  matcher: ['/((?!api|_next/static|_next/image|_next/data|.*\\..*$).*)'],
}
