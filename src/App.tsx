import GlobalStyles from "./styles/global";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";

import Header from "components/Header";
import IntroSection from "components/IntroSection";
import Warning from "components/Warning";
import InstructionSection from "components/InstructionSection";
import PrecautionsSection from "components/PrecautionsSection";
import Footer from "components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />

      <main>
        <IntroSection />
        <Warning />
        <InstructionSection />
        <PrecautionsSection />
      </main>

      <Footer />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
