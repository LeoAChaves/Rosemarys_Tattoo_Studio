import styled from "styled-components";
import FHomeCard from "./FHomeCard.jsx";
import { useNavigate } from "react-router-dom";
import useFuncionario from "../../Hooks/funcionario.jsx";

function FHomeMain() {
  const navigate = useNavigate();
  const FHomeMain = styled.main`
    width: 100%;
    height: calc(100vh - 80px);
  `;
  const [funcionario] = useFuncionario()
  return (
    <FHomeMain>
      <FHomeCard
        tipo="agendamento"
        texto="Agendamento"
        onClickVisu={() => navigate("/funcionario/agendamento-view/"+funcionario.ID)}
        onClickInse={() => navigate("/funcionario/agendamento/"+funcionario.ID)}
      />
      <FHomeCard
        tipo="portfolio"
        texto="Portifólio"
        onClickVisu={() => navigate("/funcionario/portfolio-view/"+funcionario.ID)}
        onClickInse={() => navigate("/funcionario/portfolio/"+funcionario.ID)}
      />
      <FHomeCard
        tipo="estoque"
        texto="Estoque"
        onClickVisu={() => navigate("/funcionario/estoque-view/"+funcionario.ID)}
        onClickInse={() => navigate("/funcionario/estoque/"+funcionario.ID)}
      />
    </FHomeMain>
  );
}

export default FHomeMain;
