import styled from 'styled-components';
import icon from '../../img/search.png';

const SearchCartContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SearchIcon = styled.img.attrs({
    src: icon,
    alt: 'Search'
})`
    width: 15px;
    position: relative;
    left: -30px
`;

const SearchInput = styled.input.attrs({
  type: 'text',
  name: 'search'
})`
  border-radius: 5px;
  border: 1px solid lightgray;
  margin: 10px;
  padding: 5px;
  min-width: 200px;

  &:focus {
    border: 1px solid gray;
  }
`;

export { SearchCartContainer, SearchIcon, SearchInput };
