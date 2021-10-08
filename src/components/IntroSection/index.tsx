import { ReactComponent as HappyGuy } from "assets/images/happy-guy.svg";
import Container from "components/Container";
import SocialMediaIcons from "components/SocialMediaIcons";

import * as S from "./styles";

export default function IntroSection() {
  return (
    <Container>
      <S.SocialMediaIconsWrapper>
        <SocialMediaIcons align="vertical" color="primary" />
      </S.SocialMediaIconsWrapper>

      <S.Wrapper id="sobre">
        <S.SvgWrapper>
          <HappyGuy />
        </S.SvgWrapper>

        <S.Content>
          <S.Title>
            Olá <span>#SangueLaranjas,</span> é com imensa felicidade que
            anunciamos a reabertura dos escritórios
          </S.Title>

          <S.Text>
            Estamos muito felizes com essa novidade, mas sabemos que não será
            como antes, serão necessárias algumas etapas para realizar esse
            retorno da melhor forma possível
          </S.Text>
        </S.Content>
      </S.Wrapper>
    </Container>
  );
}
