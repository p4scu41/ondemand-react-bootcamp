
import styled from "styled-components";

const PaginationContainer = styled.ul`
  display: flex;
  min-width: 250px;
`;

const PaginationItem = styled.li`
  display: flex;
  list-style: none;
  border-radius: 15px;
  background: rgb(241 245 249);
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid lightgray;
  }
}
`;

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
