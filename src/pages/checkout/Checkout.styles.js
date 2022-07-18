import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FromColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
`;

export const FromRow = styled.div`
  margin: 5px;
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  min-width: 80px;
  display: inline-block;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid gray;
  min-width: 380px;
`;

export const Textarea = styled.textarea`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid gray;
  min-width: 380px;
`;
