import styled, { css } from 'styled-components';

export const mixins = {
  clickableByOpacity: css`
    transition: opacity 0.1s ease-in-out;
    user-select: none;
    cursor: pointer;
    &:active {
      opacity: 0.2;
    }
  `
}

export const Page = styled.div`
  padding: 16px;
`;

export const PageTitle = styled.div`
  font-weight: bold;
  font-size: 50px;
`;

export const Button = styled.div`
  text-transform: uppercase;
  background-color: red;
  border-radius: 16px;
  padding: 16px 32px;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  color: white;
  ${mixins.clickableByOpacity}

  ${props => props.color && css`
    background-color: ${props.color};
  `}
`;

export const Space = styled.div`
  height: 16px;
  ${(props) => props.size >= 0 && css`
    height: ${props.size}px;
  `}
`;


