import { Skeleton } from '@/app/_components/ui/skeleton'

export default function MediaListSkeleton({ length }: { length: number }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {Array.from({ length }).map((_, i) => (
        <li key={i} className="flex-center">
          <Skeleton className="w-[320px] sm:w-full relative flex flex-col h-80 bg-card active:brightness-75 hover:brightness-75 transition" />
        </li>
      ))}
    </ul>
  )
}
