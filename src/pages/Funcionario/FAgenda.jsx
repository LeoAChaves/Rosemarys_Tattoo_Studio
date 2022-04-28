import styled from "styled-components";
import FHeader from "../../components/Funcionario/FHeader";
import FormAgenda from "../../components/Funcionario/FormAgenda/index.jsx";
import FFooter from "../../components/Funcionario/FFooter/FFooter.jsx";

function FAgendamento({ changeTheme }) {
  const style = {
    height: "80px",
  };
  const FAgendamento = styled.body`
    height: 100vh;
    width: 100%;
    background-image: url(${({ theme }) => theme.background});
    background-size: cover;
    background-position: center;
  `;
  return (
    <FAgendamento>
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
      <FormAgenda />
      <FFooter />
    </FAgendamento>
  );
}

export default FAgendamento;
