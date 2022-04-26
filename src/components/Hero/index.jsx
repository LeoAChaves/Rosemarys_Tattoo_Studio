import * as S from "./styled.js";

function HeroText({ texto, nome }) {
  return (
    <S.H1>
      {texto} {nome}
    </S.H1>
  );
}

export default HeroText;
