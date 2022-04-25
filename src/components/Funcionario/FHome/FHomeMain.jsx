import styled from "styled-components";
import FHomeCard from "./FHomeCard.jsx";
import { useNavigate } from "react-router-dom";

function FHomeMain() {
  const navigate = useNavigate();
  const FHomeMain = styled.main`
    width: 100%;
    height: calc(100vh - 80px);
  `;
  return (
    <FHomeMain>
      <FHomeCard
        tipo="agendamento"
        texto="Agendamento"
        onClickVisu={() => navigate("/funcionario/agendamento-view")}
        onClickInse={() => navigate("/funcionario/agendamento")}
      />
      <FHomeCard
        tipo="portfolio"
        texto="Portifólio"
        onClickVisu={() => navigate("/funcionario/portfolio-view")}
        onClickInse={() => navigate("/funcionario/portfolio")}
      />
      <FHomeCard
        tipo="estoque"
        texto="Estoque"
        onClickVisu={() => navigate("/funcionario/estoque-view")}
        onClickInse={() => navigate("/funcionario/estoque")}
      />
    </FHomeMain>
  );
}

export default FHomeMain;
