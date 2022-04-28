import styled from "styled-components";
import FHeader from "../../components/Funcionario/FHeader";
import FPortfolioMain from "../../components/Funcionario/FPortfolioMain/index.jsx";
import FFooter from "../../components/Funcionario/FFooter/FFooter.jsx";

function FPortfolioView({ changeTheme }) {
  const style = {
    height: "80px",
  };
  const FPortfolioView = styled.body`
    height: 100vh;
    width: 100%;
    background-image: url(${({ theme }) => theme.background});
    background-size: cover;
    background-position: center;

    @media (max-width: 600px) {
      background-size: cover;
      height: auto;
    }
  `;
  return (
    <FPortfolioView>
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
    </FPortfolioView>
  );
}

export default FPortfolioView;
