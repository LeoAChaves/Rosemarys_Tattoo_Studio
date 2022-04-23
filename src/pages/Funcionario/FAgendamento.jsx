import styled from "styled-components";
import FHeader from "../../components/Funcionario/FHeader/FHeader.jsx";
import FAgendamentoMain from "../../components/Funcionario/FAgendamento/FAgendamentoMain.jsx";
import FFooter from "../../components/Funcionario/FFooter/FFooter.jsx";

function FAgendamento() {
  const FAgendamento = styled.body`
    height: 100vh;
    width: 100%;
    background-image: url(${({ theme }) => theme.funcBG});
    background-size: cover;
    background-position: center;
  `;
  return (
    <FAgendamento>
      <FHeader />
      <FAgendamentoMain />
      <FFooter />
    </FAgendamento>
  );
}

export default FAgendamento;
