import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import { CartIcon, ImgRounded, LogoContainer, StyledHeader } from './Header.styles';
import { SearchCartContainer, SearchIcon, SearchInput } from "./Search.styles";
import Title from "./Title.component";

export default function Header({title}) {
    return (
      <StyledHeader>
        <LogoContainer>
          <Link to='/'>
            <ImgRounded src={logo} alt={title}/>
          </Link>
        </LogoContainer>

        <Title title={title}/>

        <SearchCartContainer>
          <SearchCartContainer>
            <SearchInput />
            <SearchIcon />
          </SearchCartContainer>
          <div>
            <CartIcon />
          </div>
        </SearchCartContainer>
      </StyledHeader>
    )
}
