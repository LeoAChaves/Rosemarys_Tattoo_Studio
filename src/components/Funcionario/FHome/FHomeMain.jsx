import FHomeCard from "../FHomeCard/FHomeCard";
import { useNavigate } from "react-router-dom";

import * as S from "./styled.js";

function FHomeMain() {
  const navigate = useNavigate();
  return (
    <S.HomeMain>
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
    </S.HomeMain>
  );
}

export default FHomeMain;
