import { PaginationContainer, PaginationItem } from './Pagination.styles';

export default function Pagination() {
  return (
    <PaginationContainer>
      <PaginationItem>&lt;&lt;</PaginationItem>
      <PaginationItem>1</PaginationItem>
      <PaginationItem>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
      <PaginationItem>4</PaginationItem>
      <PaginationItem>5</PaginationItem>
      <PaginationItem>&gt;&gt;</PaginationItem>
    </PaginationContainer>
  )
}
