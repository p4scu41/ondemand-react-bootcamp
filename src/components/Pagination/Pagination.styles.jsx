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

const PaginationItemCurrent = styled(PaginationItem)`
  border: 1px solid black;
`;

export { PaginationContainer, PaginationItem, PaginationItemCurrent };
