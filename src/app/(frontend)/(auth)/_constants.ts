import { z } from 'zod'

export const signInSchema = z.object({
  email: z.email(),
  password: z.string().min(8).max(128),
})

export const signUpSchema = z
  .object({
    email: z.email(),
    password: z.string().min(8).max(128),
    rePassword: z.string().min(8).max(128),
  })
  .refine(data => data.password === data.rePassword, {
    message: 'Passwords do not match',
  })
