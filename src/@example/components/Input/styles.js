import styled from 'styled-components';

export const Container = styled.div`
  border: 2px solid red;
  border-radius: 8px;
  padding: 8px 16px;
  input {
    width: calc(100% - 8px);
    font-size: 16px;
    margin-top: 5px;
    border: none;
    outline: none;
  }
`;

export const Label = styled.div`
  font-weight: 500;
  margin-top: -5px;
  color: red;
`;

