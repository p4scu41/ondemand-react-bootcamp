import styled from 'styled-components';
import icon from '../../img/shopping-cart.png';

const CartIcon = styled.img.attrs({
    src: icon,
    alt: 'Shopping Cart'
})`
    width: 25px;
    cursor: pointer;
`;

export default CartIcon;
