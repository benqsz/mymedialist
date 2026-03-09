'use client'

import { XIcon } from '@phosphor-icons/react'
import { parseAsStringEnum, useQueryState } from 'nuqs'

import { searchParamKeys } from '@/app/_lib/constants'
import { Button } from '@/app/_components/ui/button'
import { ButtonGroup } from '@/app/_components/ui/button-group'
import { Field, FieldLabel } from '@/app/_components/ui/field'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/_components/ui/select'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/app/_components/ui/sheet'
import { SortEnum, type Sort } from '@/types/common'
import {
  AnimeOrderByEnum,
  AnimeRatingEnum,
  AnimeStatusEnum,
  AnimeTypeEnum,
  type AnimeOrderBy,
  type AnimeRating,
  type AnimeStatus,
  type AnimeType,
} from '@/types/jikan/anime'

export default function MediaFilters() {
  const [sort, setSort] = useQueryState(
    searchParamKeys.sort,
    parseAsStringEnum<Sort>(Object.values(SortEnum)).withDefault(SortEnum.ASC),
  )

  const [animeOrderBy, setAnimeOrderBy] = useQueryState(
    searchParamKeys.animeOrderBy,
    parseAsStringEnum<AnimeOrderBy>(
      Object.values(AnimeOrderByEnum),
    ).withDefault(AnimeOrderByEnum.POPULARITY),
  )

  const [animeType, setAnimeType] = useQueryState(
    searchParamKeys.animeType,
    parseAsStringEnum<AnimeType>(Object.values(AnimeTypeEnum)),
  )

  const [animeStatus, setAnimeStatus] = useQueryState(
    searchParamKeys.animeStatus,
    parseAsStringEnum<AnimeStatus>(Object.values(AnimeStatusEnum)),
  )

  const [animeRating, setAnimeRating] = useQueryState(
    searchParamKeys.animeRating,
    parseAsStringEnum<AnimeRating>(Object.values(AnimeRatingEnum)),
  )

  const clearFilters = () => {
    setAnimeType(null)
    setAnimeStatus(null)
    setAnimeRating(null)
    setAnimeOrderBy(null)
    setSort(null)
  }

  const formatOptionLabel = (option: string) => {
    const normalized = option
      .replace(/_/g, ' ')
      .replace(/([A-Za-z])(\d)/g, '$1 $2')
      .trim()

    return normalized.charAt(0).toUpperCase() + normalized.slice(1)
  }

  const hasActiveFilters =
    sort !== SortEnum.ASC ||
    animeOrderBy !== AnimeOrderByEnum.POPULARITY ||
    animeType !== null ||
    animeStatus !== null ||
    animeRating !== null

  const filters = [
    {
      label: 'Sort',
      value: sort,
      options: Object.values(SortEnum),
      onChange: (v: string) => setSort(v as Sort),
      required: true,
    },
    {
      label: 'Order By',
      value: animeOrderBy,
      options: Object.values(AnimeOrderByEnum),
      onChange: (v: string) => setAnimeOrderBy(v as AnimeOrderBy),
      required: true,
    },
    {
      label: 'Anime Type',
      value: animeType,
      options: Object.values(AnimeTypeEnum),
      onChange: (v: string) =>
        setAnimeType(v === 'none' ? null : (v as AnimeType)),
    },
    {
      label: 'Anime Status',
      value: animeStatus,
      options: Object.values(AnimeStatusEnum),
      onChange: (v: string) =>
        setAnimeStatus(v === 'none' ? null : (v as AnimeStatus)),
    },
    {
      label: 'Anime Rating',
      value: animeRating,
      options: Object.values(AnimeRatingEnum),
      onChange: (v: string | null) =>
        setAnimeRating(v === 'none' ? null : (v as AnimeRating)),
    },
  ]

  return (
    <ButtonGroup>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Fliters</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Filter & Sort</SheetTitle>
            <SheetDescription className="sr-only">
              Adjust your filters and sorting preferences. Your media list will
              update accordingly.
            </SheetDescription>
          </SheetHeader>
          <div className="mx-4 flex flex-col gap-4">
            {filters.map(filter => (
              <Field key={filter.label}>
                <FieldLabel>{filter.label}</FieldLabel>
                <Select
                  value={filter.value || 'none'}
                  onValueChange={filter.onChange}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectGroup>
                      {!filter.required && (
                        <SelectItem value="none">None</SelectItem>
                      )}
                      {filter.options.map(option => (
                        <SelectItem key={option} value={option}>
                          {formatOptionLabel(option)}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
            ))}
          </div>
          <SheetFooter>
            {hasActiveFilters && (
              <Button variant="outline" onClick={clearFilters}>
                Clear filters
              </Button>
            )}
            <SheetClose asChild>
              <Button>Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      {hasActiveFilters && (
        <Button
          variant="outline"
          onClick={clearFilters}
          aria-label="Clear all filters"
          size="icon"
        >
          <XIcon />
        </Button>
      )}
    </ButtonGroup>
  )
}
