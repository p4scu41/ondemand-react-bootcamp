import styled from "styled-components";

const CategoriesContainer = styled.div`
  display: block;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 10px;
  background-color: rgb(241 245 249);
  border-radius: 10px;
  cursor: pointer;
  min-width: 200px;
  border: 1px solid ${props => props.selected ? 'black !important' : 'transparent'};
  &:hover {
    border: 1px solid lightgray;
  }
`;

const Name = styled.span`
  padding: 10px;
  display: block;
  width: 100%;
  text-align: center;
`

export { CategoriesContainer, Link, Name };
