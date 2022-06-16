import logo from '../../img/logo.png';
import CartIcon from './CartIcon';
import ImgRounded from "./ImgRounded";
import SearchCartContainer from "./SearchCartContainer";
import SearchIcon from './SearchIcon';
import SearchInput from "./SearchInput";
import StyledHeader from "./StyledHeader";
import Title from "./Title";

export default function Header({title, handleGoToPage}) {
    return (
      <StyledHeader>
        <div style={{padding: '1rem'}}>
          <a href='/' alt={title}>
            <ImgRounded src={logo} alt={title} onClick={handleGoToPage} data-go-to-page="Home"/>
          </a>
        </div>

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
