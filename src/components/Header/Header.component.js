import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../img/logo.png';
import Button from '../Shared/Button.component';
import ShoppingCartIcon from '../ShoppingCart/ShoppingCartIcon.component';
import { ImgRounded, LogoContainer, StyledHeader } from './Header.styles';
import { SearchCartContainer, SearchInput } from "./Search.styles";
import Title from "./Title.component";

export default function Header({title}) {
  const inputSearchRef = useRef();
  const navigate = useNavigate();

  const search = function (event) {
    event.preventDefault();
    const searchTerm = inputSearchRef.current.value;

    if (searchTerm.length > 0) {
      navigate(`/search?q=${searchTerm}`);
    }
  }

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
          <form onSubmit={search}>
            <SearchInput ref={inputSearchRef}/>
            <Button type='submit' size='small' style={{marginRight: "15px"}} >Search</Button>
          </form>
        </SearchCartContainer>
        <ShoppingCartIcon />
      </SearchCartContainer>
    </StyledHeader>
  )
}
