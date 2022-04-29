import * as S from "./styled.js";

function FHomeCard({ tipo, texto, onClickVisu, onClickInse }) {
  return (
    <S.HomeCard className={tipo}>
      <p>{texto}</p>
      <div className="opcoes">
        <div className="visualizar" onClick={onClickVisu}>
          <p className="visualizarP">visualizar</p>
          <p className="visualizarP">{texto}</p>
        </div>
        <div className="inserir" onClick={onClickInse}>
          <p className="inserirP">inserir</p>
          <p className="inserirP">{texto}</p>
        </div>
      </div>
    </S.HomeCard>
  );
}

export default FHomeCard;
