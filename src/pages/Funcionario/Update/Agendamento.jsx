import styled from "styled-components";
import Header from "../../../components/Header/index.jsx";
import FormAgenda from "../../../components/Funcionario/FormAgenda/index.jsx";
import FFooter from "../../../components/Funcionario/FFooter/FFooter.jsx";

function FAgendamentoUpdate({ changeTheme }) {
  const style = {
    height: "80px",
  };
  const FAgendamentoUpdate = styled.body`
    height: 100vh;
    width: 100%;
    background-image: url(${({ theme }) => theme.background});
    background-size: cover;
    background-position: center;
  `;
  return (
    <FAgendamentoUpdate>
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
      <FormAgenda botao="ALTERAR" />
      <FFooter />
    </FAgendamentoUpdate>
  );
}

export default FAgendamentoUpdate;
