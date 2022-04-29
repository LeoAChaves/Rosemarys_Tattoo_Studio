import FHeader from "../../../components/Funcionario/FHeader";
import FAgendaMain from "../../../components/Funcionario/FAgendaMain/index.jsx";
import FFooter from "../../../components/Funcionario/FFooter/FFooter.jsx";

import * as S from "./styled.js";

function FAgendaView({ changeTheme }) {
  const style = {
    height: "80px",
  };
  
  return (
    <S.AgendaView>
      <FHeader
        btnHome={{ display: "none" }}
        className={"btn custom-btn styleHeader"}
        style={style}
        voltar="Voltar"
        sair="Sair"
        changeTheme={changeTheme}
      />
      <FAgendaMain />
      <FFooter />
    </S.AgendaView>
  );
}

export default FAgendaView;
