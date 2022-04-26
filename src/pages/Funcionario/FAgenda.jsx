import styled from "styled-components";
import FHeader from "../../components/Funcionario/FHeader/FHeader.jsx";
import FormAgenda from "../../components/Funcionario/FormAgenda/index.jsx";
import FFooter from "../../components/Funcionario/FFooter/FFooter.jsx";

function FAgendamento() {
  const FAgendamento = styled.body`
    height: 100vh;
    width: 100%;
    background-image: url(${({ theme }) => theme.background});
    background-size: cover;
    background-position: center;
  `;
  return (
    <FAgendamento>
      <FHeader />
      <FormAgenda />
      <FFooter />
    </FAgendamento>
  );
}

export default FAgendamento;
