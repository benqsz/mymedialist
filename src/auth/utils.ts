import { headers } from 'next/headers'
import { redirect as nextRedirect } from 'next/navigation'

import { auth } from '@/auth'
import { SIGN_IN_PATH } from '@/auth/constants'

export async function sessionCheck(redirect: boolean = true) {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) {
    if (redirect) nextRedirect(SIGN_IN_PATH)
    return null
  }

  return session
}
