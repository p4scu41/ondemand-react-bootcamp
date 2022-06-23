import { TitleContainer, TitleLink } from './Title.styles';

const Title = ({title}) => (
  <TitleContainer>
    <TitleLink alt={title} to='/home'>{title}</TitleLink>
  </TitleContainer>
);

export default Title;
