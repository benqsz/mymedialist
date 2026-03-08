import Image from 'next/image'
import Link from 'next/link'

import { Typography } from '@/app/_components/ui/typography'
import type { MediaItem } from '@/types/media'

export default function MediaCard({ id, type, title, image }: MediaItem) {
  return (
    <Link
      href={`/${type}/${id}`}
      className="w-[320px] sm:w-full relative flex flex-col h-80 bg-card active:brightness-75 hover:brightness-75 transition"
    >
      <div className="relative flex-1">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain object-top"
        />
      </div>
      <div className="h-8 flex-center px-1 overflow-hidden">
        <Typography as="div" variant="span" className="text-nowrap text-center">
          {title}
        </Typography>
      </div>
    </Link>
  )
}
