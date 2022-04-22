import styled from "styled-components";

function FHomeCard({ tipo, texto }) {
  const FHomeCard = styled.div`
    width: 480px;
    height: 320px;
    background-color: ${({ theme }) => theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1s;
    p {
      color: ${({ theme }) => theme.text};
      text-transform: uppercase;
      font-weight: 700;
    }
    &:hover {
      background-color: ${({ theme }) => theme.primary_solid};
      cursor: pointer;
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
  `;
  return (
    <FHomeCard className={tipo}>
      <p>{texto}</p>
    </FHomeCard>
  );
}

export default FHomeCard;
