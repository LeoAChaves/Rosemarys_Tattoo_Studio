import styled from "styled-components";
import Header from "../../../components/Header/index.jsx";
import FormEstoqueUpdate from "../../../components/Funcionario/FormEstoqueUpdate/index.jsx";
import FFooter from "../../../components/Funcionario/FFooter/FFooter.jsx";

function FEstoqueUpdate({ changeTheme }) {
  const style = {
    height: "80px",
  };
  const FEstoqueUpdate = styled.body`
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
    <FEstoqueUpdate>
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
      <FormEstoqueUpdate />
      <FFooter />
    </FEstoqueUpdate>
  );
}

export default FEstoqueUpdate;
