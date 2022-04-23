import FHeader from "../../components/Funcionario/FHeader/FHeader.jsx";
import FEstoqueMain from "../../components/Funcionario/FEstoque/FEstoqueMain.jsx";
import FundoMain from "../../components/Funcionario/FFundoMain/FundoMain.jsx";
import FFooter from "../../components/Funcionario/FFooter/FFooter.jsx";

function FEstoque() {
  return (
    <FEstoque>
      <FHeader />
      <FEstoqueMain>
        <FundoMain />
      </FEstoqueMain>
      <FFooter />
    </FEstoque>
  );
}

export default FEstoque;
