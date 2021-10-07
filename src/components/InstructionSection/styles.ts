import styled, { css } from "styled-components/macro";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.spacings.huge} 0;

    & > div {
      display: flex;
    }
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-family: "Metropolis Black";
    color: ${theme.colors.textColor};
    margin-bottom: ${theme.spacings.xxlarge};
  `}
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    width: 40rem;
  }

  @media (max-width: 950px) {
    display: none;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & a {
    width: fit-content;
  }
`;

export const Text = styled.h3`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
    font-size: ${theme.font.sizes.large};
    font-family: "Metropolis Light";
    line-height: 1.4;
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall} ${theme.spacings.large};
    background: ${theme.colors.primary};
    border-radius: 0.8rem;
    color: ${theme.colors.white};
    cursor: pointer;
    border: 0;
    font-family: "Metropolis Bold";
    text-transform: uppercase;
    transition: ${theme.transition.fast};

    &:hover {
      background: #fe662e;
    }
  `}
`;
