import type { Sort } from '@/types/common'

import type { DateRange, Image, Title } from './common'

export type Manga = {
  mal_id: number
  url: string
  images: Image
  approved: boolean
  titles: Title[]
  title: string
  title_english: string | null
  title_japanese: string | null
  title_synonyms: string[]
  type: string | null
  chapters: number | null
  volumes: number | null
  status: string | null
  publishing: boolean
  published: DateRange
  score: number | null
  scored_by: number | null
  rank: number | null
  popularity: number | null
  members: number | null
  favorites: number | null
  synopsis: string | null
  background: string | null
  authors: {
    mal_id: number
    type: string
    name: string
    url: string
  }[]
  serializations: {
    mal_id: number
    type: string
    name: string
    url: string
  }[]
  genres: {
    mal_id: number
    type: string
    name: string
    url: string
  }[]
  explicit_genres: {
    mal_id: number
    type: string
    name: string
    url: string
  }[]
  themes: {
    mal_id: number
    type: string
    name: string
    url: string
  }[]
  demographics: {
    mal_id: number
    type: string
    name: string
    url: string
  }[]
}

export type MangaCharacter = {
  character: {
    mal_id: number
    url: string
    images: Image
    name: string
  }
  role: string
}

export type MangaNews = {
  mal_id: number
  url: string
  title: string
  date: string
  author_username: string
  author_url: string
  forum_url: string
  images: Image
  comments: number
  excerpt: string
}

export type MangaForum = {
  mal_id: number
  url: string
  title: string
  date: string
  author_username: string
  author_url: string
  comments: number
  last_comment: {
    url: string
    author_username: string
    author_url: string
    date: string
  }
}

export type MangaPicture = {
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

export type MangaStatistics = {
  reading: number
  completed: number
  on_hold: number
  dropped: number
  plan_to_read: number
  total: number
  scores: {
    score: number
    votes: number
    percentage: number
  }[]
}

export type MangaRecommendation = {
  entry: {
    mal_id: number
    url: string
    images: Image
    title: string
  }
  url: string
  votes: number
}

export type MangaUserUpdate = {
  user: {
    username: string
    url: string
    images: Image
  }
  status: string
  score: number | null
  chapters_read: number | null
  chapters_total: number | null
  volumes_read: number | null
  volumes_total: number | null
  date: string
}

export type MangaReview = {
  mal_id: number
  url: string
  type: string
  reactions: {
    overall: number
    nice: number
    love_it: number
    funny: number
    confusing: number
    informative: number
    well_written: number
    creative: number
  }
  date: string
  review: string
  score: number
  tags: string[]
  is_spoiler: boolean
  is_preliminary: boolean
  chapters_read: number | null
  user: {
    username: string
    url: string
    images: Image
  }
}

export type MangaRelation = {
  relation: string
  entry: {
    mal_id: number
    type: string
    name: string
    url: string
  }[]
}

export type MangaExternal = {
  name: string
  url: string
}

export const MangaTypeEnum = {
  TV: 'tv',
  MOVIE: 'movie',
  OVA: 'ova',
  SPECIAL: 'special',
  ONA: 'ona',
  MUSIC: 'music',
  MANGA: 'manga',
  NOVEL: 'novel',
  LIGHTNOVEL: 'lightnovel',
  ONESHOT: 'oneshot',
  DOUJIN: 'doujin',
  MANHWA: 'manhwa',
  MANHUA: 'manhua',
} as const

export type MangaType = (typeof MangaTypeEnum)[keyof typeof MangaTypeEnum]

export const MangaStatusEnum = {
  PUBLISHING: 'publishing',
  COMPLETE: 'complete',
  HIATUS: 'hiatus',
  DISCONTINUED: 'discontinued',
  UPCOMING: 'upcoming',
} as const

export type MangaStatus = (typeof MangaStatusEnum)[keyof typeof MangaStatusEnum]

export const MangaOrderByEnum = {
  MAL_ID: 'mal_id',
  TITLE: 'title',
  START_DATE: 'start_date',
  END_DATE: 'end_date',
  CHAPTERS: 'chapters',
  VOLUMES: 'volumes',
  SCORE: 'score',
  SCORDED_BY: 'scored_by',
  RANK: 'rank',
  POPULARITY: 'popularity',
  MEMBERS: 'members',
  FAVORITES: 'favorites',
} as const

export type MangaOrderBy =
  (typeof MangaOrderByEnum)[keyof typeof MangaOrderByEnum]

export type MangaQueryParams = {
  page?: number
  limit?: number
  q?: string
  type?: MangaType
  score?: number
  min_score?: number
  max_score?: number
  status?: MangaStatus
  sfw?: boolean
  genres?: string
  genres_exclude?: string
  order_by?: MangaOrderBy
  sort?: Sort
  letter?: string
  magazines?: string
}
