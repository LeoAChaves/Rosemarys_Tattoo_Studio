import FHeader from "../../../components/Funcionario/FHeader";
import FormPortfolio from "../../../components/Funcionario/FormPortfolio/index.jsx";
import FFooter from "../../../components/Funcionario/FFooter/FFooter.jsx";

import * as S from "./styled.js";

function FPortfolio({ changeTheme }) {
  const style = {
    height: "80px",
  };
  
  return (
    <S.Portfolio>
      <FHeader
        btnHome={{ display: "none" }}
        className={"btn custom-btn styleHeader"}
        style={style}
        voltar="Voltar"
        sair="Sair"
        changeTheme={changeTheme}
      />
      <FormPortfolio />
      <FFooter />
    </S.Portfolio>
  );
}

export default FPortfolio;
