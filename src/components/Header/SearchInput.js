import styled from 'styled-components';

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

export default SearchInput;
