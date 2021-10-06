import Container from "components/Container";

import * as S from "./styles";

export default function Warning() {
  return (
    <S.Wrapper>
      <Container>
        <h3>
          Atenção consultor, o retorno é opcional, caso não se sinta a vontade
          ou não possa ir a um dos escritórios, permaneça em casa. Segurança em
          primeiro lugar!
        </h3>
      </Container>
    </S.Wrapper>
  );
}
