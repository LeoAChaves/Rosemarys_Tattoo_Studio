import styled from "styled-components";
import FHeader from "../../components/Funcionario/FHeader/FHeader.jsx";
import FormPortfolio from "../../components/Funcionario/FormPortfolio/index.jsx";
import FFooter from "../../components/Funcionario/FFooter/FFooter.jsx";

function FPortfolio() {
  const FPortfolio = styled.body`
    height: 100vh;
    width: 100%;
    background-image: url(${({ theme }) => theme.funcBG});
    background-size: cover;
    background-position: center;
  `;
  return (
    <FPortfolio>
      <FHeader />
      <FormPortfolio />
      <FFooter />
    </FPortfolio>
  );
}

export default FPortfolio;
