import styled from "styled-components";
import FHeader from "../../components/Funcionario/FHeader";
import FormEstoque from "../../components/Funcionario/FormEstoque/index.jsx";
import FFooter from "../../components/Funcionario/FFooter/FFooter.jsx";

function FEstoque({ changeTheme }) {
  const style = {
    height: "80px",
  };
  const FEstoque = styled.body`
    height: 100vh;
    width: 100%;
    background-image: url(${({ theme }) => theme.background});
    background-size: cover;
    background-position: center;
  `;
  return (
    <FEstoque>
      <FHeader
        btnHome={{ display: "none" }}
        className={"btn custom-btn styleHeader"}
        style={style}
        voltar="Voltar"
        sair="Sair"
        changeTheme={changeTheme}
      />
      <FormEstoque />
      <FFooter />
    </FEstoque>
  );
}

export default FEstoque;
