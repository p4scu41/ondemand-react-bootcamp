import styled from 'styled-components';
import icon from '../../img/shopping-cart.png';

export const CartIcon = styled.img.attrs({
    src: icon,
    alt: 'Shopping Cart'
})`
    width: 25px;
    cursor: pointer;
`;

export const Badged = styled.span`
    border-radius: 2px;
    border: 1px solid lightgray;
    font-size: 12px;
    position: absolute;
    left: 9px;
    top: -22px;
    color: red;
`
export const Table = styled.table`
  width: 100%;
  border: 1px solid black;
  border-spacing: 0px;
`;

export const Th = styled.th`
  border: 1px solid black;
  padding: 5px;
`;

export const Td = styled.td`
  border: 1px solid black;
  padding: 5px;
`;

export const TdCenter = styled(Td)`
  text-align: center;
`
