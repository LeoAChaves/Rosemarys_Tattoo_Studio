import styled from "styled-components";
import Header from "../../components/Header/index.jsx";
import FHomeMain from "../../components/Funcionario/FHome/FHomeMain.jsx";
import FFooter from "../../components/Funcionario/FFooter/FFooter.jsx";

function FHome({ changeTheme }) {
  const style = {
    height: "80px",
  };
  const FHome = styled.body`
    height: 100vh;
    width: 100%;
    background-image: url(${({ theme }) => theme.background});
    background-size: cover;
    background-position: center;
  `;
  return (
    <FHome>
      <Header
        btnHome={{ display: "none" }}
        btnVoltar={{ display: "none" }}
        btnLogin={{ display: "none" }}
        btnInicial={{ display: "none" }}
        className={"btn custom-btn styleHeader"}
        style={style}
        div={{ display: "block" }}
        portfolio="Portifólio"
        sair="Sair"
        changeTheme={changeTheme}
      />
      <FHomeMain />
      <FFooter />
    </FHome>
  );
}

export default FHome;
