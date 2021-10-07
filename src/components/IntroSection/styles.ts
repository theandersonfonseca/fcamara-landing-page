import styled, { css } from "styled-components/macro";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    padding: 15rem 0;

    @media (max-width: 650px) {
      padding: ${theme.spacings.huge} 0;
    }
  `}
`;

export const SvgWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (max-width: 950px) {
    display: none;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.huge};
    font-family: "Metropolis Black";
    line-height: 1.4;

    & span {
      color: ${theme.colors.secondary};
    }

    @media (max-width: 950px) {
      font-size: ${theme.font.sizes.xxlarge};
    }
  `}
`;

export const Text = styled.h2`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.large};
    font-family: "Metropolis Light";
    line-height: 1.4;
  `}
`;

export const SocialMediaIconsWrapper = styled.div`
  position: absolute;
  left: 1.5rem;
  top: 25rem;

  @media (max-width: 950px) {
    display: none;
  }
`;
