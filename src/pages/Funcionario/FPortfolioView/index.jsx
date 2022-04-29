import FHeader from "../../../components/Funcionario/FHeader";
import FPortfolioMain from "../../../components/Funcionario/FPortfolioMain/index.jsx";
import FFooter from "../../../components/Funcionario/FFooter/FFooter.jsx";

import * as S from "./styled.js";

function FPortfolioView({ changeTheme }) {
  const style = {
    height: "80px",
  };
  
  return (
    <S.PortfolioView>
      <FHeader
        btnHome={{ display: "none" }}
        className={"btn custom-btn styleHeader"}
        style={style}
        voltar="Voltar"
        sair="Sair"
        changeTheme={changeTheme}
      />
      <FPortfolioMain />
      <FFooter />
    </S.PortfolioView>
  );
}

export default FPortfolioView;
