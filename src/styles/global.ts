import { createGlobalStyle } from "styled-components";

import MetropolisRegular from "assets/fonts/Metropolis-Regular.otf";
import MetropolisLight from "assets/fonts/Metropolis-Light.otf";
import MetropolisMedium from "assets/fonts/Metropolis-Medium.otf";
import MetropolisBlack from "assets/fonts/Metropolis-Black.otf";
import MetropolisBold from "assets/fonts/Metropolis-Bold.otf";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Metropolis Regular';
    font-display: swap;
    src: url(${MetropolisRegular});
  }

  @font-face {
    font-family: 'Metropolis Light';
    font-display: swap;
    src: url(${MetropolisLight});
  }

  @font-face {
    font-family: 'Metropolis Medium';
    font-display: swap;
    src: url(${MetropolisMedium});
  }

  @font-face {
    font-family: 'Metropolis Black';
    font-display: swap;
    src: url(${MetropolisBlack});
  }

  @font-face {
    font-family: 'Metropolis Bold';
    font-display: swap;
    src: url(${MetropolisBold});
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Metropolis Regular', sans-serif;
  }
`;

export default GlobalStyles;
