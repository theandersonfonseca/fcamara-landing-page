import { ReactComponent as Logo } from "assets/images/logo.svg";
import Container from "components/Container";
import SocialMediaIcons from "components/SocialMediaIcons";

import * as S from "./styles";

export default function Footer() {
  return (
    <S.Wrapper>
      <Container>
        <S.LogoAndIconsWrapper>
          <a
            href="https://www.fcamara.com.br/"
            target="_blank"
            rel="noreferrer"
            aria-label="Ir para o site da FCamara"
          >
            <Logo className="logo" />
          </a>

          <SocialMediaIcons align="horizontal" color="white" />
        </S.LogoAndIconsWrapper>

        <S.Copyright>
          © 2021 FCamara Formação e Consultoria. Todos os direitos reservados.
        </S.Copyright>
      </Container>
    </S.Wrapper>
  );
}
