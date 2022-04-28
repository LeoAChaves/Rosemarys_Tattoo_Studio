import styled from "styled-components";
import FHeader from "../../components/Funcionario/FHeader";
import FAgendaMain from "../../components/Funcionario/FAgendaMain/index.jsx";
import FFooter from "../../components/Funcionario/FFooter/FFooter.jsx";

function FAgendaView({ changeTheme }) {
  const style = {
    height: "80px",
  };
  const FAgendaView = styled.body`
    height: 100vh;
    width: 100%;
    background-image: url(${({ theme }) => theme.background});
    background-size: cover;
    background-position: center;
  `;
  return (
    <FAgendaView>
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
      <FAgendaMain />
      <FFooter />
    </FAgendaView>
  );
}

export default FAgendaView;
