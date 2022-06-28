import styled from "styled-components";

const Button = styled.button`
  border-radius: 5px;
  padding: ${props => props.size === 'small' ? '5px' : '10px'};
  border: 1px solid lightgray;
  cursor: pointer;
  font-size: ${props => props.size === 'small' ? 'small' : 'initial'};
`;

export default Button;
