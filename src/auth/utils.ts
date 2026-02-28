import { headers } from 'next/headers'
import { redirect as nextRedirect } from 'next/navigation'

import { auth } from '@/auth'
import { SIGN_IN_PATH } from '@/auth/constants'

export async function sessionCheck() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) {
    nextRedirect(SIGN_IN_PATH)
  }

  return session
}

export async function getSession() {
  return await auth.api.getSession({
    headers: await headers(),
  })
}
