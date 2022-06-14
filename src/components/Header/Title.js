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
  cursor: pointer;
`;

const Title = ({title, handleGoToPage}) => (
  <TitleContainer>
    <TitleLink alt={title} onClick={handleGoToPage} data-go-to-page="Home">{title}</TitleLink>
  </TitleContainer>
);

export default Title;
