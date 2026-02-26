import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { nextCookies } from 'better-auth/next-js'

import { db } from '@/db'
import { env } from '@/env'

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    disableSignUp: env.BETTER_AUTH_DISABLE_REGISTER,
    minPasswordLength: env.NEXT_PUBLIC_BETTER_AUTH_MIN_PASSWORD,
    maxPasswordLength: env.NEXT_PUBLIC_BETTER_AUTH_MAX_PASSWORD,
  },
  database: prismaAdapter(db, {
    provider: 'postgresql',
  }),
  plugins: [
    // make sure this is the last plugin in the array
    nextCookies(),
  ],
})
