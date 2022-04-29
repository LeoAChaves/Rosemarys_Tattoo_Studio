import FHeader from "../../../../components/Funcionario/FHeader";
import FormPortfolioUpdate from "../../../../components/Funcionario/FormPortfolioUpdate/index.jsx";
import FFooter from "../../../../components/Funcionario/FFooter/FFooter.jsx";

import * as S from "./styled.js";

function FPortfolioUpdate({ changeTheme }) {
  const style = {
    height: "80px",
  };
  
  return (
    <S.PortfolioUpdate>
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
      <FormPortfolioUpdate />
      <FFooter />
    </S.PortfolioUpdate>
  );
}

export default FPortfolioUpdate;
