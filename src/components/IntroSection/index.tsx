import { ReactComponent as HappyGuy } from "assets/images/happy-guy.svg";
import Container from "components/Container";

import * as S from "./styles";

export default function IntroSection() {
  return (
    <Container>
      <S.Wrapper>
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
            como antes, para fazer esse retorno de forma segura, criamos um
            sistema de agendamento, na próxima seção estão todas as instruções
            para aqueles que quiserem retornar aos escritórios
          </S.Text>
        </S.Content>
      </S.Wrapper>
    </Container>
  );
}
