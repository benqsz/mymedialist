import { z } from 'zod'

import { env } from '@/env'

export const signInSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(env.NEXT_PUBLIC_BETTER_AUTH_MIN_PASSWORD)
    .max(env.NEXT_PUBLIC_BETTER_AUTH_MAX_PASSWORD),
})

export const signUpSchema = z
  .object({
    username: z.string(),
    email: z.email(),
    password: z
      .string()
      .min(env.NEXT_PUBLIC_BETTER_AUTH_MIN_PASSWORD)
      .max(env.NEXT_PUBLIC_BETTER_AUTH_MAX_PASSWORD),
    rePassword: z
      .string()
      .min(env.NEXT_PUBLIC_BETTER_AUTH_MIN_PASSWORD)
      .max(env.NEXT_PUBLIC_BETTER_AUTH_MAX_PASSWORD),
  })
  .refine(data => data.password === data.rePassword, {
    message: 'Passwords do not match',
  })
