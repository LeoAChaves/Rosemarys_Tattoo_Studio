import styled from "styled-components";
import FHeader from "../../components/Funcionario/FHeader/FHeader.jsx";
import FEstoqueMain from "../../components/Funcionario/FEstoqueMain/index.jsx";
import FFooter from "../../components/Funcionario/FFooter/FFooter.jsx";

function FEstoqueView() {
  const FEstoqueView = styled.body`
    height: 100vh;
    width: 100%;
    background-image: url(${({ theme }) => theme.funcBG});
    background-size: cover;
    background-position: center;
  `;
  return (
    <FEstoqueView>
      <FHeader />
      <FEstoqueMain />
      <FFooter />
    </FEstoqueView>
  );
}

export default FEstoqueView;
