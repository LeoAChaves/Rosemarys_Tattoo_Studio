import FHeader from "../../../../components/Funcionario/FHeader";
import FormAgendaUpdate from "../../../../components/Funcionario/FormAgendaUpdate/index.jsx";
import FFooter from "../../../../components/Funcionario/FFooter/FFooter.jsx";

import * as S from "./styled.js";

function FAgendamentoUpdate({ changeTheme }) {
  const style = {
    height: "80px",
  };
  
  return (
    <S.AgendamentoUpdate>
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
      <FormAgendaUpdate />
      <FFooter />
    </S.AgendamentoUpdate>
  );
}

export default FAgendamentoUpdate;
