import styled, { css } from "styled-components/macro";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxlarge} 0;
    background: ${theme.colors.primary};
    text-align: center;

    & h3 {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.xlarge};
      font-family: "Metropolis Light";
    }
  `}
`;
