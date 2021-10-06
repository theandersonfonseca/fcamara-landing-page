import { ReactComponent as Logo } from "assets/images/logo.svg";
import Container from "components/Container";

import * as S from "./styles";

export default function Header() {
  return (
    <Container>
      <S.Wrapper>
        <a
          href="https://www.fcamara.com.br/"
          target="_blank"
          rel="noreferrer"
          aria-label="Ir para o site da FCamara"
        >
          <Logo />
        </a>

        <nav>
          <S.Menu>
            <S.MenuItem>
              <a href="#sobre">Sobre</a>
            </S.MenuItem>

            <S.MenuItem>
              <a href="#como-vai-funcionar">Como vai funcionar?</a>
            </S.MenuItem>

            <S.MenuItem>
              <a href="#precauções">Precauções</a>
            </S.MenuItem>
          </S.Menu>
        </nav>
      </S.Wrapper>
    </Container>
  );
}
