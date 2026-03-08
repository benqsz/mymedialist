import MediaGrid from '@/app/_components/media-list/grid'
import MediaPagination from '@/app/_components/media-list/pagination'
import type { Pagination } from '@/types/common'
import { type MediaItem } from '@/types/media'

type Props = {
  items: MediaItem[]
  pagination: Pagination
}

export default function MediaList({ items, pagination }: Props) {
  return (
    <div className="flex flex-col gap-4 my-4">
      <MediaGrid items={items} />
      <MediaPagination {...pagination} />
    </div>
  )
}
