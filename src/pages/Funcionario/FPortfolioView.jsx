import styled from "styled-components";
import FHeader from "../../components/Funcionario/FHeader/FHeader.jsx";
import FPortfolioMain from "../../components/Funcionario/FPortfolioMain/index.jsx";
import FFooter from "../../components/Funcionario/FFooter/FFooter.jsx";

function FPortfolioView() {
  const FPortfolioView = styled.body`
    height: 100vh;
    width: 100%;
    background-image: url(${({ theme }) => theme.background});
    background-size: cover;
    background-position: center;
  `;
  return (
    <FPortfolioView>
      <FHeader />
      <FPortfolioMain />
      <FFooter />
    </FPortfolioView>
  );
}

export default FPortfolioView;
