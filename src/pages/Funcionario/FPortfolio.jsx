import styled from "styled-components";
import FHeader from "../../components/Funcionario/FHeader";
import FormPortfolio from "../../components/Funcionario/FormPortfolio/index.jsx";
import FFooter from "../../components/Funcionario/FFooter/FFooter.jsx";

function FPortfolio({ changeTheme }) {
  const style = {
    height: "80px",
  };
  const FPortfolio = styled.body`
    height: 100vh;
    width: 100%;
    background-image: url(${({ theme }) => theme.background});
    background-size: cover;
    background-position: center;

    @media (max-width: 600px) {
      background-size: cover;
      height: auto;
    }
  `;
  return (
    <FPortfolio>
      <FHeader
        btnHome={{ display: "none" }}
        className={"btn custom-btn styleHeader"}
        style={style}
        voltar="Voltar"
        sair="Sair"
        changeTheme={changeTheme}
      />
      <FormPortfolio />
      <FFooter />
    </FPortfolio>
  );
}

export default FPortfolio;
