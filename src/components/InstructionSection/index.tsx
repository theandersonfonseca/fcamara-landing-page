import peopleWorking from "assets/images/people-working.png";
import Container from "components/Container";

import * as S from "./styles";

export default function InstructionSection() {
  return (
    <Container>
      <S.Wrapper>
        <S.Title>Como vai funcionar?</S.Title>

        <div>
          <S.ImageWrapper>
            <img src={peopleWorking} alt="Pessoas trabalhando" />
          </S.ImageWrapper>

          <S.Content>
            <S.Text>
              Para que o retorno aconteça de forma segura e organizada,
              respeitando a determinação de 40% da capacidade total, será
              necessário realizar um agendamento, lá estarão os dias disponíveis
              em cada uma das nossas sedes
            </S.Text>

            <a
              href="https://fcamara-squad17.herokuapp.com/login"
              target="_blank"
              rel="noreferrer"
            >
              <S.Button>Fazer agendamento</S.Button>
            </a>
          </S.Content>
        </div>
      </S.Wrapper>
    </Container>
  );
}
