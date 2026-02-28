const MediaEnum = {
  ANIME: 'anime',
  MANGA: 'manga',
} as const

type MediaType = (typeof MediaEnum)[keyof typeof MediaEnum]

type MediaItem = {
  id: string | number
  title: string
  image: string
  type: MediaType
}

export { MediaEnum }
export type { MediaType, MediaItem }
