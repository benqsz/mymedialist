'use server'

import { signUpSchema } from '@frontend/(auth)/_constants'
import { APIError } from 'better-auth'
import { z } from 'zod'

import { auth } from '@/auth'

export default async function signUpAction(data: z.infer<typeof signUpSchema>) {
  const { username, email, password } = data
  try {
    await auth.api.signUpEmail({
      body: {
        name: username,
        email,
        password,
      },
    })

    return { success: true }
  } catch (error) {
    if (error instanceof APIError) {
      return { success: false, message: error.message }
    }
    return { success: false, message: 'An unexpected error occurred' }
  }
}
