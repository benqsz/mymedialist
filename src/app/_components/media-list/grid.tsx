import MediaCard from '@/app/_components/media-list/card'
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from '@/app/_components/ui/empty'
import type { MediaItem } from '@/types/media'

type Props = {
  items: MediaItem[]
}

export default function MediaGrid(props: Props) {
  const { items } = props

  return (
    <div>
      {items.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map(item => (
            <li key={item.id} className="flex-center">
              <MediaCard {...item} />
            </li>
          ))}
        </ul>
      ) : (
        <Empty>
          <EmptyHeader>
            <EmptyTitle>No data</EmptyTitle>
            <EmptyDescription>
              No media found with current filters
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      )}
    </div>
  )
}
