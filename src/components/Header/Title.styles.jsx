import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TitleContainer = styled.div`
  padding: 1rem;
  flex-grow: 2;
  text-align: center;
  font-size: 2rem;
  font-weight: bolder;
`;

const TitleLink = styled(Link)`
  text-decoration: none;
  color: black;
  cursor: pointer;
`;

export { TitleContainer, TitleLink };
