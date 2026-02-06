import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { nextCookies } from 'better-auth/next-js'

import { db } from '@/db'

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: prismaAdapter(db, {
    provider: 'postgresql',
  }),
  plugins: [
    // make sure this is the last plugin in the array
    nextCookies(),
  ],
})
