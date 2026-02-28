import type { Sort } from '@/types/common'

export type JikanResponse<T> = {
  data: T
}

export type JikanPaginatedResponse<T> = {
  data: T[]
  pagination: PaginationInfo
}

export type PaginationInfo = {
  last_visible_page: number
  has_next_page: boolean
  current_page: number
  items: {
    count: number
    total: number
    per_page: number
  }
}

export type Image = {
  jpg: {
    image_url: string
    small_image_url?: string
    large_image_url?: string
  }
  webp?: {
    image_url: string
    small_image_url?: string
    large_image_url?: string
  }
}

export type Title = {
  type: string
  title: string
}

export type DateRange = {
  from: string | null
  to: string | null
}

export type CommonQueryParams = {
  page?: number
  limit?: number
  q?: string
  order_by?: string
  sort?: Sort
  letter?: string
}
