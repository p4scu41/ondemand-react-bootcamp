import styled from 'styled-components';

const TitleContainer = styled.div`
  padding: 1rem;
  flex-grow: 2;
  text-align: center;
  font-size: 2rem;
  font-weight: bolder;
`;

const TitleLink = styled.a`
  text-decoration: none;
  color: black;
`;

const Title = ({title}) => (
  <TitleContainer>
    <TitleLink href='/' alt={title}>{title}</TitleLink>
  </TitleContainer>
);

export default Title;
