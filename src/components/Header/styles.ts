import styled, { css } from "styled-components/macro";
import Container from "components/Container";
import { Wrapper as SocialMediaIcons } from "components/SocialMediaIcons/styles";

export const Wrapper = styled.header`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    width: 100%;
    height: 6rem;
    background: ${theme.colors.white};
    z-index: ${theme.layers.menu};

    ${Container} {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      padding: ${theme.spacings.xsmall} 1.5rem;
    }
  `}
`;

type MenuProps = {
  openMenu: boolean;
};

export const Menu = styled.ul<MenuProps>`
  ${({ theme, openMenu }) => css`
    list-style: none;
    display: flex;

    ${SocialMediaIcons} {
      display: none;
    }

    @media (max-width: 650px) {
      flex-direction: column;
      align-items: flex-end;
      width: 30rem;
      padding: ${theme.spacings.medium};
      position: absolute;
      top: 0;
      right: ${openMenu ? "0" : "-100%"};
      background: ${theme.colors.white};
      transition: 0.4s;
      box-shadow: 0 0 0.3rem #ccc;

      ${SocialMediaIcons} {
        display: flex;
        margin-top: ${theme.spacings.medium};
      }
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

export const MobileMenuIcon = styled.div`
  ${({ theme }) => css`
    background: red;

    & svg {
      stroke: ${theme.colors.textColor};
      fill: ${theme.colors.textColor};
    }
  `}
`;

export const MobileMenuHamburger = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 2.2rem;
  height: 1.8rem;
  cursor: pointer;

  @media (max-width: 650px) {
    display: flex;
  }
`;

export const MobileMenuLine = styled.span`
  ${({ theme }) => css`
    height: 0.2rem;
    width: 100%;
    background: ${theme.colors.textColor};
  `}
`;

export const CloseMenu = styled.span`
  ${({ theme }) => css`
    display: none;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    margin-bottom: ${theme.spacings.medium};
    cursor: pointer;
    font-family: "Metropolis Bold";
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.white};
    background: ${theme.colors.secondary};
    border-radius: 100%;

    @media (max-width: 650px) {
      display: flex;
    }
  `}
`;
