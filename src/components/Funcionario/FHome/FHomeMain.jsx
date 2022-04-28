import FHomeCard from "../FHomeCard/FHomeCard";
import { useNavigate } from "react-router-dom";
import useFuncionario from "../../Hooks/funcionario.jsx";

import * as S from "./styled.js";

function FHomeMain() {
  const navigate = useNavigate();
  const [funcionario] = useFuncionario();
  return (
    <S.HomeMain>
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
    </S.HomeMain>
  );
}

export default FHomeMain;
