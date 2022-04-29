import FHeader from "../../../components/Funcionario/FHeader";
import FormAgenda from "../../../components/Funcionario/FormAgenda/index.jsx";
import FFooter from "../../../components/Funcionario/FFooter/FFooter.jsx";

import * as S from "./styled.js";

function FAgendamento({ changeTheme }) {
  const style = {
    height: "80px",
  };
  
  return (
    <S.Agendamento>
      <FHeader
        btnHome={{ display: "none" }}
        className={"btn custom-btn styleHeader"}
        style={style}
        voltar="Voltar"
        sair="Sair"
        changeTheme={changeTheme}
      />
      <FormAgenda />
      <FFooter />
    </S.Agendamento>
  );
}

export default FAgendamento;
