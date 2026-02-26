import { PrismaPg } from '@prisma/adapter-pg'

import 'dotenv/config'

import { PrismaClient } from '@/db/types/prisma/client'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
export const db = new PrismaClient({ adapter })
