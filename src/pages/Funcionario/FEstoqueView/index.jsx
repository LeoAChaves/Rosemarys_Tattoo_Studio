import FHeader from "../../../components/Funcionario/FHeader";
import FEstoqueMain from "../../../components/Funcionario/FEstoqueMain/index.jsx";
import FFooter from "../../../components/Funcionario/FFooter/FFooter.jsx";

import * as S from "./styled.js";

function FEstoqueView({ changeTheme }) {
  const style = {
    height: "80px",
  };

  return (
    <S.EstoqueView>
      <FHeader
        btnHome={{ display: "none" }}
        className={"btn custom-btn styleHeader"}
        style={style}
        voltar="Voltar"
        sair="Sair"
        changeTheme={changeTheme}
      />
      <FEstoqueMain />
      <FFooter />
    </S.EstoqueView>
  );
}

export default FEstoqueView;
