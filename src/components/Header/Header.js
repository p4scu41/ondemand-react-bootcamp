import logo from '../../img/logo.png';
import CartIcon from './CartIcon';
import ImgRounded from "./ImgRounded";
import SearchCartContainer from "./SearchCartContainer";
import SearchIcon from './SearchIcon';
import SearchInput from "./SearchInput";
import StyledHeader from "./StyledHeader";
import Title from "./Title";

export default function Header({title}) {
    return (
      <StyledHeader>
        <div style={{padding: '1rem'}}>
          <a href='/' alt={title}>
            <ImgRounded src={logo} alt={title}/>
          </a>
        </div>

        <Title title={title} />

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
