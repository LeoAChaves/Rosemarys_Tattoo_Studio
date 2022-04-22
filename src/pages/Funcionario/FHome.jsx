import styled from "styled-components";
import FHeader from "../../components/Funcionario/FHeader/FHeader.jsx";
import FHomeMain from "../../components/Funcionario/FHome/FHomeMain.jsx";
import FFooter from "../../components/Funcionario/FFooter/FFooter.jsx";

function FHome() {
  const FHome = styled.body`
    height: 100vh;
    width: 100%;
    background-image: url(${({ theme }) => theme.funcBG});
    background-size: cover;
    background-position: center;
  `;
  return (
    <FHome>
      <FHeader />
      <FHomeMain />
      <FFooter />
    </FHome>
  );
}

export default FHome;
