import { ReactComponent as Mask } from "assets/images/mask.svg";
import Container from "components/Container";

import * as S from "./styles";

export default function PrecautionsSection() {
  return (
    <S.Wrapper>
      <Container>
        <S.Title>Precauções</S.Title>

        <S.Cards>
          <S.Card>
            <Mask />

            <S.CardText backgroundColor="primary">
              Será medida a temperatura ao chegar no escritório
            </S.CardText>
          </S.Card>

          <S.Card>
            <Mask />

            <S.CardText backgroundColor="secondary">
              Todos os consultores deverão usar máscaras dentro das acomodações
              dos escritórios.
            </S.CardText>
          </S.Card>

          <S.Card>
            <Mask />

            <S.CardText backgroundColor="primary">
              Nas mesas existem adesivos sinalizando onde os #SangueLaranjas
              devem sentar, para que haja o distanciamento necessário.
            </S.CardText>
          </S.Card>

          <S.Card>
            <Mask />

            <S.CardText backgroundColor="secondary">
              Pessoas que estiverem sentindo algum sintoma não devem ir
              trabalhar presencialmente, a indicação é para que permaneçam em
              casa.
            </S.CardText>
          </S.Card>
        </S.Cards>
      </Container>
    </S.Wrapper>
  );
}
