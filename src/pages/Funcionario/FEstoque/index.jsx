import FHeader from "../../../components/Funcionario/FHeader";
import FormEstoque from "../../../components/Funcionario/FormEstoque/index.jsx";
import FFooter from "../../../components/Funcionario/FFooter/FFooter.jsx";

import * as S from "./styled.js";

function FEstoque({ changeTheme }) {
  const style = {
    height: "80px",
  };
  
  return (
    <S.Estoque>
      <FHeader
        btnHome={{ display: "none" }}
        className={"btn custom-btn styleHeader"}
        style={style}
        voltar="Voltar"
        sair="Sair"
        changeTheme={changeTheme}
      />
      <FormEstoque />
      <FFooter />
    </S.Estoque>
  );
}

export default FEstoque;
