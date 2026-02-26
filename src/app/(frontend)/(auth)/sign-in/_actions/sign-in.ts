'use server'

import { signInSchema } from '@frontend/(auth)/_constants'
import { APIError } from 'better-auth'
import { z } from 'zod'

import { auth } from '@/auth'

export default async function signInAction(data: z.infer<typeof signInSchema>) {
  try {
    await auth.api.signInEmail({
      body: data,
    })

    return { success: true }
  } catch (error) {
    if (error instanceof APIError) {
      return { success: false, message: error.message }
    }
    return { success: false, message: 'An unexpected error occurred' }
  }
}
