import styled from "styled-components";
import FHeader from "../../components/Funcionario/FHeader";
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
  `;
  return (
    <FEstoqueView>
      <FHeader
        btnHome={{ display: "none" }}
        className={"btn custom-btn styleHeader"}
        style={style}
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
