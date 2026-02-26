import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(['development', 'production', 'test'])
      .default('development'),
    PAGE_URL: z.url(),
    DATABASE_URL: z.url(),
    BETTER_AUTH_DISABLE_REGISTER: z.stringbool().default(true),
    BETTER_AUTH_SECRET: z.string(),
    BETTER_AUTH_URL: z.url(),
    BETTER_AUTH_MIN_PASSWORD: z.coerce.number().int().default(8),
    BETTER_AUTH_MAX_PASSWORD: z.coerce.number().int().default(128),
  },
  experimental__runtimeEnv: {},
  emptyStringAsUndefined: false,
})
