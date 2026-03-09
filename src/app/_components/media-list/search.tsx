'use client'

import { XIcon } from '@phosphor-icons/react'
import { debounce, parseAsInteger, parseAsString, useQueryState } from 'nuqs'

import { searchParamKeys } from '@/app/_lib/constants'
import { Button } from '@/app/_components/ui/button'
import { ButtonGroup } from '@/app/_components/ui/button-group'
import { Input } from '@/app/_components/ui/input'

export default function MediaSearch() {
  const [search, setSearch] = useQueryState(
    searchParamKeys.query,
    parseAsString.withDefault(''),
  )

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setPage] = useQueryState(
    searchParamKeys.page,
    parseAsInteger.withDefault(1),
  )

  return (
    <ButtonGroup className="w-full">
      <Input
        type="search"
        placeholder="Search..."
        value={search}
        onChange={e =>
          setSearch(e.target.value, {
            limitUrlUpdates: e.target.value === '' ? undefined : debounce(200),
          }).finally(() => setPage(1))
        }
      />
      {search && (
        <Button
          variant="outline"
          aria-label="Clear search"
          onClick={() => setSearch('').finally(() => setPage(1))}
        >
          <XIcon />
        </Button>
      )}
    </ButtonGroup>
  )
}
