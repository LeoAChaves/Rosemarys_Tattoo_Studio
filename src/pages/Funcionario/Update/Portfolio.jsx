import styled from "styled-components";
import FHeader from "../../../components/Funcionario/FHeader";
import FormPortfolioUpdate from "../../../components/Funcionario/FormPortfolioUpdate/index.jsx";
import FFooter from "../../../components/Funcionario/FFooter/FFooter.jsx";

function FPortfolioUpdate({ changeTheme }) {
  const style = {
    height: "80px",
  };
  const FPortfolioUpdate = styled.body`
    height: 100vh;
    width: 100%;
    background-image: url(${({ theme }) => theme.background});
    background-size: cover;
    background-position: center;
  `;
  return (
    <FPortfolioUpdate>
      <FHeader
        btnHome={{ display: "none" }}
        btnLogin={{ display: "none" }}
        btnInicial={{ display: "none" }}
        btnPortfolio={{ display: "none" }}
        className={"btn custom-btn styleHeader"}
        style={style}
        voltar="Voltar"
        sair="Sair"
        changeTheme={changeTheme}
      />
      <FormPortfolioUpdate />
      <FFooter />
    </FPortfolioUpdate>
  );
}

export default FPortfolioUpdate;
