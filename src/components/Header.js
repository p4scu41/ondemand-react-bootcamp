import styled from 'styled-components';
import logo from '../img/logo.png';
import searchIcon from '../img/search.png';
import cartIcon from '../img/shopping-cart.png';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;

const ImgRounded = styled.img`
  border-radius: 50%;
  width: 50px;
`;

const Title = styled.div`
  padding: 1rem;
  flex-grow: 2;
  text-align: center;
  font-size: 2rem;
  font-weight: bolder;
`;

const SearchInput = styled.input`
  border-radius: 5px;
  border: 1px solid lightgray;
  margin: 10px;
  padding: 5px;
  min-width: 200px;

  &:focus {
    border: 1px solid gray;
  }
`;

const SearchCartContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;

export default function Header({title}) {
    return (
      <StyledHeader>
        <div style={{padding: '1rem'}}>
          <a href='/' alt={title}>
            <ImgRounded src={logo} alt={title}/>
          </a>
        </div>

        <Title>
          <a href='/' alt={title} style={ {textDecoration: 'none', color: 'black'} }>{title}</a>
        </Title>

        <SearchCartContainer  style={{padding: '1rem'}}>
          <SearchCartContainer>
            <SearchInput type='text' name='search'/>
            <img src={searchIcon} alt='Search' style={{width: '15px', position: 'relative', left: '-30px'}}/>
          </SearchCartContainer>
          <div>
            <img src={cartIcon} alt='Shopping Cart' style={{width: '25px', cursor: 'pointer'}}/>
          </div>
        </SearchCartContainer>
      </StyledHeader>
    )
}
