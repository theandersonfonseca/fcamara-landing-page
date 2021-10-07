import { useState } from "react";
import { ReactComponent as Logo } from "assets/images/logo.svg";
import Container from "components/Container";
import SocialMediaIcons from "components/SocialMediaIcons";

import * as S from "./styles";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <S.Wrapper>
      <Container>
        <a
          href="https://www.fcamara.com.br/"
          target="_blank"
          rel="noreferrer"
          aria-label="Ir para o site da FCamara"
        >
          <Logo />
        </a>

        <nav>
          <S.Menu openMenu={openMenu}>
            {openMenu && (
              <S.CloseMenu onClick={() => setOpenMenu(false)}>X</S.CloseMenu>
            )}

            <S.MenuItem>
              <a href="#sobre">Sobre</a>
            </S.MenuItem>

            <S.MenuItem>
              <a href="#como-vai-funcionar">Como vai funcionar?</a>
            </S.MenuItem>

            <S.MenuItem>
              <a href="#precauções">Precauções</a>
            </S.MenuItem>

            {openMenu && (
              <SocialMediaIcons align="horizontal" color="primary" />
            )}
          </S.Menu>

          <S.MobileMenuHamburger onClick={() => setOpenMenu(true)}>
            <S.MobileMenuLine />
            <S.MobileMenuLine />
            <S.MobileMenuLine />
          </S.MobileMenuHamburger>
        </nav>
      </Container>
    </S.Wrapper>
  );
}
