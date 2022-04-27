import styled from "styled-components";
import Header from "../../components/Header/index.jsx";
import FormPortfolio from "../../components/Funcionario/FormPortfolio/index.jsx";
import FFooter from "../../components/Funcionario/FFooter/FFooter.jsx";

function FPortfolio({ changeTheme }) {
  const style = {
    height: "80px",
  };
  const FPortfolio = styled.body`
    height: 100vh;
    width: 100%;
    background-image: url(${({ theme }) => theme.background});
    background-size: cover;
    background-position: center;
  `;
  return (
    <FPortfolio>
      <Header
        btnHome={{ display: "none" }}
        btnLogin={{ display: "none" }}
        btnInicial={{ display: "none" }}
        btnPortfolio={{ display: "none" }}
        className={"btn custom-btn styleHeader"}
        style={style}
        div={{ display: "block" }}
        voltar="Voltar"
        sair="Sair"
        changeTheme={changeTheme}
      />
      <FormPortfolio botao="INSERIR" />
      <FFooter />
    </FPortfolio>
  );
}

export default FPortfolio;
