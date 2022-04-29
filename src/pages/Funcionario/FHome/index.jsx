import FHeader from "../../../components/Funcionario/FHeader";
import FHomeMain from "../../../components/Funcionario/FHome/FHomeMain.jsx";
import FFooter from "../../../components/Funcionario/FFooter/FFooter.jsx";

import * as S from "./styled.js";

function FHome({ changeTheme }) {
  const style = {
    height: "80px",
  };
  

  return (
    
      <S.Home>
        <FHeader
          btnHome={{ display: "none" }}
          btnVoltar={{ display: "none" }}
          className={"btn custom-btn styleHeader"}
          style={style}
          sair="Sair"
          changeTheme={changeTheme}
        />
        <FHomeMain />
        <FFooter />
    </S.Home>
 
  
  );
}

export default FHome;
