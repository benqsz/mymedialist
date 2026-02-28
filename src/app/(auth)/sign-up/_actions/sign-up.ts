'use server'

import { APIError } from 'better-auth'
import { z } from 'zod'

import type { signUpSchema } from '@/app/(auth)/_constants'
import { auth } from '@/auth'
import { db } from '@/db'

export default async function signUpAction(data: z.infer<typeof signUpSchema>) {
  const { username, email, password } = data
  try {
    const isNameExists = await db.user.findFirst({
      where: {
        name: username,
      },
      select: {
        id: true,
      },
    })

    if (isNameExists) {
      return { success: false, message: 'Username already exists' }
    }

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
