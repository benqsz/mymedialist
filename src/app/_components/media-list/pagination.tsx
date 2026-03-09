'use client'

import { parseAsInteger, useQueryState } from 'nuqs'
import { Fragment, useMemo } from 'react'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/app/_components/ui/pagination'
import type { Pagination as PaginationProps } from '@/types/common'

export default function MediaPagination(props: PaginationProps) {
  const { currentPage, totalPages, hasNextPage, hasPreviousPage } = props
  const [page, setPage] = useQueryState(
    'page',
    parseAsInteger.withDefault(currentPage).withOptions({
      shallow: false,
      scroll: true,
    }),
  )

  const visiblePages = useMemo(() => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }
    if (page <= 3) {
      return [1, 2, 3, 4, totalPages]
    }
    if (page >= totalPages - 2) {
      return [1, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
    }
    return [1, page - 1, page, page + 1, totalPages]
  }, [page, totalPages])

  return (
    <Pagination>
      <PaginationContent>
        {hasPreviousPage && (
          <PaginationItem>
            <PaginationPrevious onClick={() => setPage(page - 1)} />
          </PaginationItem>
        )}

        {visiblePages.map((visiblePage, index) => {
          const previousPage = visiblePages[index - 1]
          const shouldShowEllipsis =
            previousPage !== undefined && visiblePage - previousPage > 1

          return (
            <Fragment key={`page-group-${visiblePage}`}>
              {shouldShowEllipsis && (
                <PaginationItem key={`ellipsis-${previousPage}-${visiblePage}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              <PaginationItem key={visiblePage}>
                <PaginationLink
                  onClick={() => setPage(visiblePage)}
                  isActive={page === visiblePage}
                >
                  {visiblePage}
                </PaginationLink>
              </PaginationItem>
            </Fragment>
          )
        })}

        {hasNextPage && (
          <PaginationItem>
            <PaginationNext onClick={() => setPage(page + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  )
}
