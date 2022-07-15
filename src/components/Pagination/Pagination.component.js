import { PaginationContainer, PaginationItem, PaginationItemCurrent } from './Pagination.styles';

export default function Pagination({setPage, currentPage, totalPages}) {
  let prevPages = [];
  let nextPages = [];

  for (let index = (currentPage - 1); index > 0 && index > (currentPage - 3); index--) {
    prevPages.unshift(index);
  }

  for (let index = (currentPage + 1); index < (currentPage + 3) && index <= totalPages; index++) {
    nextPages.push(index);
  }

  return (
    <PaginationContainer>
      <PaginationItem onClick={() => setPage(1)}>&lt;&lt;</PaginationItem>
      {
        prevPages.map(page => <PaginationItem key={page} onClick={() => setPage(page)}>{page}</PaginationItem>)
      }
      <PaginationItemCurrent>{currentPage}</PaginationItemCurrent>
      {
        nextPages.map(page => <PaginationItem key={page} onClick={() => setPage(page)}>{page}</PaginationItem>)
      }
      <PaginationItem onClick={() => setPage(totalPages)}>&gt;&gt;</PaginationItem>
    </PaginationContainer>
  )
}
