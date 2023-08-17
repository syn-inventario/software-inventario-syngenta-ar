import { styled } from "styled-components";

export const Container = styled.div`
  border-radius: 15px;
  box-shadow: #f5f5f5 0px 0px 20px 0px;
  display: flex;
  max-width: 500px;
  margin: auto;
`;

export const Label = styled.label`
  align-items: center;
  color: #eee;
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export const Input = styled.input`
  border-radius: inherit;
  border: none;
  color: #eee;
  flex-grow: 1;
  outline: none;

  &::placeholder {
    color: inherit;
  }
`;