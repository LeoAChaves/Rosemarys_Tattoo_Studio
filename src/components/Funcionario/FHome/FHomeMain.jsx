import styled from "styled-components";
import FHomeCard from "./FHomeCard.jsx";

function FHomeMain() {
  const FHomeMain = styled.main`
    width: 100%;
    height: calc(100vh - 70px);
  `;
  return (
    <FHomeMain>
      <FHomeCard tipo="agendamento" texto="Agendamento" />
      <FHomeCard tipo="portfolio" texto="Portifólio" />
      <FHomeCard tipo="estoque" texto="Estoque" />
    </FHomeMain>
  );
}

export default FHomeMain;
