import styled from "styled-components";
import FHeader from "../../components/Funcionario/FHeader/FHeader.jsx";
import FAgendaMain from "../../components/Funcionario/FAgendaMain/index.jsx";
import FFooter from "../../components/Funcionario/FFooter/FFooter.jsx";

function FAgendaView() {
  const FAgendaView = styled.body`
    height: 100vh;
    width: 100%;
    background-image: url(${({ theme }) => theme.background});
    background-size: cover;
    background-position: center;
  `;
  return (
    <FAgendaView>
      <FHeader />
      <FAgendaMain />
      <FFooter />
    </FAgendaView>
  );
}

export default FAgendaView;
