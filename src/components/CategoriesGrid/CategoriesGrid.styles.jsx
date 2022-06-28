import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

const CategoriesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Link = styled(RouterLink)`
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
  border: 1px solid transparent;
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

const Img = styled.img`
  width: 150px;
  border-radius: 10px;
`;

export { CategoriesContainer, Link, Name, Img };
