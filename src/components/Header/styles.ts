import styled, { css } from "styled-components/macro";

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${theme.spacings.xsmall} 0;

    @media (max-width: 650px) {
      flex-direction: column;
    }
  `}
`;

export const Menu = styled.ul`
  ${({ theme }) => css`
    display: flex;
    list-style: none;

    @media (max-width: 650px) {
      flex-direction: column;
      align-items: center;
      margin-top: ${theme.spacings.small};
    }
  `}
`;

export const MenuItem = styled.li`
  ${({ theme }) => css`
    &:not(:first-child) {
      margin-left: ${theme.spacings.medium};

      @media (max-width: 650px) {
        margin-left: initial;
      }
    }

    & a {
      display: block;
      text-decoration: none;
      color: ${theme.colors.textColor};
      font-family: "Metropolis Bold";
      transition: ${theme.transition.default};

      &:hover {
        color: ${theme.colors.primary};
      }

      @media (max-width: 650px) {
        padding: ${theme.spacings.xxsmall};
      }
    }
  `}
`;
