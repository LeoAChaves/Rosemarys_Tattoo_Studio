import styled from "styled-components";

function FHomeMainCard({ tipo, texto }) {
  const FHomeMainCard = styled.div`
    width: 480px;
    height: 320px;
    background-color: ${({ theme }) => theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    transition: 1s;
    p {
      color: ${({ theme }) => theme.text};
      text-transform: uppercase;
      font-weight: 700;
    }
    &:hover {
      background-color: ${({ theme }) => theme.primary_solid};
    }
    &.primeiro {
      position: absolute;
      top: 150px;
      left: 10px;
    }
    &.segundo {
      position: absolute;
      top: 200px;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      text-align: center;
    }
    &.terceiro {
      position: absolute;
      top: 250px;
      right: 10px;
    }
  `;
  return (
    <FHomeMainCard className={tipo}>
      <p>{texto}</p>
    </FHomeMainCard>
  );
}

export default FHomeMainCard;
