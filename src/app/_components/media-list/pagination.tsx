'use client'

import { usePathname, useSearchParams } from 'next/navigation'
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
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createPageLink = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    if (page === 1) {
      params.delete('page')
    } else {
      params.set('page', page.toString())
    }
    const query = params.toString()
    return query ? `${pathname}?${query}` : pathname
  }

  const visiblePages = useMemo(() => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }
    if (currentPage <= 3) {
      return [1, 2, 3, 4, totalPages]
    }
    if (currentPage >= totalPages - 2) {
      return [1, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
    }
    return [1, currentPage - 1, currentPage, currentPage + 1, totalPages]
  }, [currentPage, totalPages])

  return (
    <Pagination>
      <PaginationContent>
        {hasPreviousPage && (
          <PaginationItem>
            <PaginationPrevious href={createPageLink(currentPage - 1)} />
          </PaginationItem>
        )}

        {visiblePages.map((page, index) => {
          const previousPage = visiblePages[index - 1]
          const shouldShowEllipsis =
            previousPage !== undefined && page - previousPage > 1

          return (
            <Fragment key={`page-group-${page}`}>
              {shouldShowEllipsis && (
                <PaginationItem key={`ellipsis-${previousPage}-${page}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              <PaginationItem key={page}>
                <PaginationLink
                  href={createPageLink(page)}
                  isActive={page === currentPage}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            </Fragment>
          )
        })}

        {hasNextPage && (
          <PaginationItem>
            <PaginationNext href={createPageLink(currentPage + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  )
}
