import styled from "styled-components";
import FHeader from "../../components/Funcionario/FHeader/FHeader.jsx";
import FormEstoque from "../../components/Funcionario/FormEstoque/index.jsx";
import FFooter from "../../components/Funcionario/FFooter/FFooter.jsx";

function FEstoque() {
  const FEstoque = styled.body`
    height: 100vh;
    width: 100%;
    background-image: url(${({ theme }) => theme.funcBG});
    background-size: cover;
    background-position: center;
  `;
  return (
    <FEstoque>
      <FHeader />
      <FormEstoque />
      <FFooter />
    </FEstoque>
  );
}

export default FEstoque;
