import logo from '../../img/logo.png';
import { CartIcon, ImgRounded, LogoContainer, StyledHeader } from './Header.styles';
import { SearchCartContainer, SearchIcon, SearchInput } from "./Search.styles";
import Title from "./Title.component";

export default function Header({title, handleGoToPage}) {
    return (
      <StyledHeader>
        <LogoContainer>
          <a href='/' alt={title}>
            <ImgRounded src={logo} alt={title} onClick={handleGoToPage} data-go-to-page="Home"/>
          </a>
        </LogoContainer>

        <Title title={title} handleGoToPage={handleGoToPage}/>

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
