import styled from "styled-components";

function FHomeCard({ tipo, texto }) {
  const FHomeCard = styled.div`
    width: 480px;
    height: 320px;
    background-color: ${({ theme }) => theme.primary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 1s;
    & p {
      color: ${({ theme }) => theme.text};
      text-transform: uppercase;
      font-weight: 700;
    }
    &:hover {
      background-color: ${({ theme }) => theme.primary_solid};
    }
    &.primeiro {
      position: absolute;
      top: 115px;
      left: 10px;
    }
    &.segundo {
      position: absolute;
      top: 205px;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      text-align: center;
    }
    &.terceiro {
      position: absolute;
      top: 295px;
      right: 10px;
    }
    .opcoes {
      z-index: 1;
      margin-top: 70px;
      width: 70%;
      display: flex;
      justify-content: space-between;
      text-align: center;
      opacity: 0;
      transition: 1.5s;
    }
    .opcoes p {
      color: ${({ theme }) => theme.card_text};
    }
    &:hover .opcoes {
      opacity: 1;
    }
    .opcoes:hover {
      cursor: pointer;
    }
    .visualizarP {
      transition: all 0.5;
    }
    .visualizar:hover .visualizarP {
      color: ${({ theme }) => theme.card_text2};
      transition: 0.5s;
    }
    .inserir:hover .inserirP {
      color: ${({ theme }) => theme.card_text2};
      transition: 0.5s;
    }
  `;
  return (
    <FHomeCard className={tipo}>
      <p>{texto}</p>
      <div className="opcoes">
        <div className="visualizar">
          <p className="visualizarP">visualizar</p>
          <p className="visualizarP">{texto}</p>
        </div>
        <div className="inserir">
          <p className="inserirP">inserir</p>
          <p className="inserirP">{texto}</p>
        </div>
      </div>
    </FHomeCard>
  );
}

export default FHomeCard;
