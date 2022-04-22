import styled from "styled-components";
import FHomeCard from "./FHomeCard.jsx";

function FHomeMain() {
  const FHomeMain = styled.main``;
  return (
    <FHomeMain>
      <FHomeCard tipo="primeiro" texto="Agendamento" />
      <FHomeCard tipo="segundo" texto="Portifólio" />
      <FHomeCard tipo="terceiro" texto="Estoque" />
    </FHomeMain>
  );
}

export default FHomeMain;
