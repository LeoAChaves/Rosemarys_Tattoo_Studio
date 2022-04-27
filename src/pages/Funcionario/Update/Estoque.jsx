import styled from "styled-components";
import Header from "../../../components/Header/index.jsx";
import FormEstoque from "../../../components/Funcionario/FormEstoque/index.jsx";
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
      <FormEstoque botao="ALTERAR" />
      <FFooter />
    </FEstoqueUpdate>
  );
}

export default FEstoqueUpdate;
