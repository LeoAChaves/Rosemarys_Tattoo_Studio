import styled from "styled-components";
import FHeader from "../../../components/Funcionario/FHeader";
import FormAgendaUpdate from "../../../components/Funcionario/FormAgendaUpdate/index.jsx";
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
      <FormAgendaUpdate />
      <FFooter />
    </FAgendamentoUpdate>
  );
}

export default FAgendamentoUpdate;
