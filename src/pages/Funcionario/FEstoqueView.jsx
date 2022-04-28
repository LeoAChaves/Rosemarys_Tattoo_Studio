import styled from "styled-components";
import Header from "../../components/Header/index.jsx";
import FEstoqueMain from "../../components/Funcionario/FEstoqueMain/index.jsx";
import FFooter from "../../components/Funcionario/FFooter/FFooter.jsx";

function FEstoqueView({ changeTheme }) {
  const style = {
    height: "80px",
  };
  const FEstoqueView = styled.body`
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
    <FEstoqueView>
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
      <FEstoqueMain />
      <FFooter />
    </FEstoqueView>
  );
}

export default FEstoqueView;
