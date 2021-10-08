import styled, { css } from "styled-components/macro";
import Container from "components/Container";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};

    ${Container} {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: ${theme.spacings.huge} 1.5rem;
    }
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-family: "Metropolis Black";
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.xxlarge};
  `}
`;

export const Cards = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap: ${theme.spacings.medium};
    justify-items: center;
    width: 100%;
  `}
`;

export const Card = styled.li`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    background: ${theme.colors.white};
    border-radius: 0.8rem;

    & svg {
      width: 100%;
    }
  `}
`;

type CardTextProps = {
  backgroundColor: "primary" | "secondary";
};

export const CardText = styled.p<CardTextProps>`
  ${({ theme, backgroundColor }) => css`
    margin-top: ${theme.spacings.xsmall};
    padding: ${theme.spacings.xsmall};
    font-family: "Metropolis Medium";
    font-size: ${theme.font.sizes.large};
    line-height: 1.4;
    color: ${theme.colors.white};
    border-radius: 0.8rem;
    background: ${theme.colors[backgroundColor]};
  `}
`;
