import styled from "styled-components";

const Button = styled.button.attrs({
    type: "button"
})`
    border-radius: 5px;
    padding: 10px;
    border: 1px solid lightgray;
    cursor: pointer;
    font-size: initial;
`;

export default Button;
