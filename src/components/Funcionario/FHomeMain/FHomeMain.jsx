import styled from "styled-components";
import FHomeMainCard from "./FHomeMainCard";

function FHomeMain() {
  const FHomeMain = styled.main``;
  return (
    <FHomeMain>
      <FHomeMainCard tipo="primeiro" texto="Agendamento" />
      <FHomeMainCard tipo="segundo" texto="Portifólio" />
      <FHomeMainCard tipo="terceiro" texto="Estoque" />
    </FHomeMain>
  );
}

export default FHomeMain;
