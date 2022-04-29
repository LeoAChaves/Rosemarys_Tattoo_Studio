import FHeader from "../../../../components/Funcionario/FHeader";
import FormEstoqueUpdate from "../../../../components/Funcionario/FormEstoqueUpdate/index.jsx";
import FFooter from "../../../../components/Funcionario/FFooter/FFooter.jsx";

import * as S from "./styled.js";

function FEstoqueUpdate({ changeTheme }) {
  const style = {
    height: "80px",
  };
  
  return (
    <S.EstoqueUpdate>
      <FHeader
        btnHome={{ display: "none" }}
        btnLogin={{ display: "none" }}
        btnPortfolio={{ display: "none" }}
        className={"btn custom-btn styleHeader"}
        style={style}
        voltar="Voltar"
        sair="Sair"
        changeTheme={changeTheme}
      />
      <FormEstoqueUpdate />
      <FFooter />
    </S.EstoqueUpdate>
  );
}

export default FEstoqueUpdate;
