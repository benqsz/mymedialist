import MediaCard from '@/app/_components/media-list/media-card'
import type { MediaItem } from '@/types/media'

type Props = {
  items: MediaItem[]
}

export default function MediaGrid(props: Props) {
  const { items } = props

  return (
    <div>
      <ul className="grid grid-cols-1  sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {items.map(item => (
          <li key={item.id} className="flex-center">
            <MediaCard {...item} />
          </li>
        ))}
      </ul>
    </div>
  )
}
