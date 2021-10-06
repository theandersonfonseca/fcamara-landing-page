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

export const SocialMediaIconsList = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    display: flex;

    @media (max-width: 500px) {
      margin-top: ${theme.spacings.medium};
    }
  `}
`;

export const SocialMediaIconsItem = styled.li`
  ${({ theme }) => css`
    &:not(:first-child) {
      margin-left: ${theme.spacings.xsmall};
    }
    svg {
      stroke: ${theme.colors.white};
      transition: ${theme.transition.default};

      & path {
        fill: transparent;
      }

      &:hover {
        stroke: ${theme.colors.primary};
      }
    }
  `}
`;

export const Copyright = styled.span`
  ${({ theme }) => css`
    display: block;
    margin-top: ${theme.spacings.large};
    text-align: center;
    color: ${theme.colors.white};
  `}
`;
