import styled from 'styled-components';
import icon from '../../img/search.png';

const SearchIcon = styled.img.attrs({
    src: icon,
    alt: 'Search'
})`
    width: 15px;
    position: relative;
    left: -30px
`;

export default SearchIcon;
