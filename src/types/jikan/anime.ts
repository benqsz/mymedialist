import type { Sort } from '@/types/common'

import type { DateRange, Image, Title } from './common'

export type Anime = {
  mal_id: number
  url: string
  images: Image
  trailer: {
    youtube_id: string | null
    url: string | null
    embed_url: string | null
    images: {
      image_url: string | null
      small_image_url: string | null
      medium_image_url: string | null
      large_image_url: string | null
      maximum_image_url: string | null
    }
  }
  approved: boolean
  titles: Title[]
  title: string
  title_english: string | null
  title_japanese: string | null
  title_synonyms: string[]
  type: string | null
  source: string | null
  episodes: number | null
  status: string | null
  airing: boolean
  aired: DateRange
  duration: string | null
  rating: string | null
  score: number | null
  scored_by: number | null
  rank: number | null
  popularity: number | null
  members: number | null
  favorites: number | null
  synopsis: string | null
  background: string | null
  season: string | null
  year: number | null
  broadcast: {
    day: string | null
    time: string | null
    timezone: string | null
    string: string | null
  }
  producers: {
    mal_id: number
    type: string
    name: string
    url: string
  }[]
  licensors: {
    mal_id: number
    type: string
    name: string
    url: string
  }[]
  studios: {
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

export type AnimeCharacter = {
  character: {
    mal_id: number
    url: string
    images: Image
    name: string
  }
  role: string
  favorites: number
  voice_actors: {
    person: {
      mal_id: number
      url: string
      images: Image
      name: string
    }
    language: string
  }[]
}

export type AnimeStaff = {
  person: {
    mal_id: number
    url: string
    images: Image
    name: string
  }
  positions: string[]
}

export type AnimeEpisode = {
  mal_id: number
  url: string | null
  title: string | null
  title_japanese: string | null
  title_romanji: string | null
  duration: number | null
  aired: string | null
  filler: boolean
  recap: boolean
  forum_url: string | null
}

export type AnimeNews = {
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

export type AnimeForum = {
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

export type AnimeVideo = {
  promo: {
    title: string
    trailer: {
      youtube_id: string | null
      url: string | null
      embed_url: string | null
      images: {
        image_url: string | null
        small_image_url: string | null
        medium_image_url: string | null
        large_image_url: string | null
        maximum_image_url: string | null
      }
    }
  }[]
  episodes: {
    mal_id: number
    url: string | null
    title: string | null
    episode: string | null
    images: Image
  }[]
}

export type AnimePicture = {
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

export type AnimeStatistics = {
  watching: number
  completed: number
  on_hold: number
  dropped: number
  plan_to_watch: number
  total: number
  scores: {
    score: number
    votes: number
    percentage: number
  }[]
}

export type AnimeRecommendation = {
  entry: {
    mal_id: number
    url: string
    images: Image
    title: string
  }
  url: string
  votes: number
}

export type AnimeUserUpdate = {
  user: {
    username: string
    url: string
    images: Image
  }
  status: string
  score: number | null
  episodes_seen: number | null
  episodes_total: number | null
  date: string
}

export type AnimeReview = {
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
  episodes_watched: number | null
  user: {
    username: string
    url: string
    images: Image
  }
}

export type AnimeRelation = {
  relation: string
  entry: {
    mal_id: number
    type: string
    name: string
    url: string
  }[]
}

export type AnimeTheme = {
  openings: string[]
  endings: string[]
}

export type AnimeExternal = {
  name: string
  url: string
}

export type AnimeStreaming = {
  name: string
  url: string
}

export const AnimeTypeEnum = {
  TV: 'tv',
  MOVIE: 'movie',
  OVA: 'ova',
  SPECIAL: 'special',
  ONA: 'ona',
  MUSIC: 'music',
} as const

export type AnimeType = (typeof AnimeTypeEnum)[keyof typeof AnimeTypeEnum]

export const AnimeStatusEnum = {
  AIRING: 'airing',
  COMPLETE: 'complete',
  UPCOMING: 'upcoming',
} as const

export type AnimeStatus = (typeof AnimeStatusEnum)[keyof typeof AnimeStatusEnum]

export const AnimeRatingEnum = {
  G: 'g',
  PG: 'pg',
  PG13: 'pg13',
  R17: 'r17',
  R: 'r',
  RX: 'rx',
} as const

export type AnimeRating = (typeof AnimeRatingEnum)[keyof typeof AnimeRatingEnum]

export const AnimeOrderByEnum = {
  MAL_ID: 'mal_id',
  TITLE: 'title',
  TYPE: 'type',
  RATING: 'rating',
  START_DATE: 'start_date',
  END_DATE: 'end_date',
  EPISODES: 'episodes',
  SCORE: 'score',
  SCORED_BY: 'scored_by',
  RANK: 'rank',
  POPULARITY: 'popularity',
  MEMBERS: 'members',
  FAVORITES: 'favorites',
} as const

export type AnimeOrderBy =
  (typeof AnimeOrderByEnum)[keyof typeof AnimeOrderByEnum]

export type AnimeQueryParams = {
  page?: number
  limit?: number
  q?: string
  type?: AnimeType
  score?: number
  min_score?: number
  max_score?: number
  status?: AnimeStatus
  rating?: AnimeRating
  sfw?: boolean
  genres?: string
  genres_exclude?: string
  order_by?: AnimeOrderBy
  sort?: Sort
  letter?: string
  producers?: string
}
