import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { auth } from '@/auth'
import { SIGN_IN_PATH } from '@/auth/constants'

export async function sessionCheck() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) {
    redirect(SIGN_IN_PATH)
  }

  return session
}
