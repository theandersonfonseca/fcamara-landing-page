import styled, { css } from "styled-components/macro";
import Container from "components/Container";

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.textColor};

    ${Container} {
      padding: ${theme.spacings.medium} 1.5rem;
    }

    & .logo {
      width: 15rem;
      height: 5rem;

      & path {
        fill: ${theme.colors.white};
      }

      @media (max-width: 500px) {
        margin-bottom: ${theme.spacings.medium};
      }
    }
  `}
`;

export const LogoAndIconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Copyright = styled.span`
  ${({ theme }) => css`
    display: block;
    margin-top: ${theme.spacings.large};
    text-align: center;
    color: ${theme.colors.white};
  `}
`;
