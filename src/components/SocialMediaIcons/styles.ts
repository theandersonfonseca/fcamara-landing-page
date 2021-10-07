import styled, { css, DefaultTheme } from "styled-components/macro";
import { SocialMediaIconsProps } from ".";

const wrapperModifiers = {
  vertical: (theme: DefaultTheme) => css`
    flex-direction: column;

    & li:not(:first-child) {
      margin-top: ${theme.spacings.xxsmall};
      margin-left: 0;
    }
  `,

  primary: (theme: DefaultTheme) => css`
    align-items: center;

    li svg {
      stroke: ${theme.colors.primary};
    }

    li svg:hover {
      stroke: ${theme.colors.secondary};
    }
  `,
};

export const Wrapper = styled.ul<SocialMediaIconsProps>`
  ${({ theme, align, color }) => css`
    list-style: none;
    display: flex;

    li {
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
    }

    ${align === "vertical" && wrapperModifiers[align](theme)}
    ${color === "primary" && wrapperModifiers[color](theme)}
  `}
`;
