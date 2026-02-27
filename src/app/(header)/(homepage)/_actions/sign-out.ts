'use server'

import { auth } from '@/auth'

export default async function SignOutAction() {
  const { success } = await auth.api.signOut()
  console.log(success)
}
