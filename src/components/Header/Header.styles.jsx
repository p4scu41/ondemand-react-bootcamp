import styled from 'styled-components';
import icon from '../../img/shopping-cart.png';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;

const LogoContainer = styled.div`
 padding: 1rem;
`;


const CartIcon = styled.img.attrs({
    src: icon,
    alt: 'Shopping Cart'
})`
    width: 25px;
    cursor: pointer;
`;

const ImgRounded = styled.img`
  border-radius: 50%;
  width: 50px;
`;

export { StyledHeader, ImgRounded, CartIcon, LogoContainer };
