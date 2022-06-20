import { TitleContainer, TitleLink } from './Title.styles';

const Title = ({title, handleGoToPage}) => (
  <TitleContainer>
    <TitleLink alt={title} onClick={handleGoToPage} data-go-to-page="Home">{title}</TitleLink>
  </TitleContainer>
);

export default Title;
