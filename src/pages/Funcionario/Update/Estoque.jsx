import styled from "styled-components";
import FHeader from "../../../components/Funcionario/FHeader";
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
  `;
  return (
    <FEstoqueUpdate>
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
      <FormEstoqueUpdate />
      <FFooter />
    </FEstoqueUpdate>
  );
}

export default FEstoqueUpdate;
