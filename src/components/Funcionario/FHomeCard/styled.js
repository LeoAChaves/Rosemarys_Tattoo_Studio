import styled from "styled-components";

export const HomeCard = styled.div`
    width: 35%;
    height: 50%;
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
    &.agendamento {
      position: relative;
      text-align: center;
      margin-left: 40px;
      margin-right: auto;
      left: 0;
      right: 0;
      top: 40px;
      /* left: 30px; */
    }
    &.portfolio {
      position: relative;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      text-align: center;
      top: -180px;
    }
    &.estoque {
      position: relative;
      text-align: center;
      margin-left: auto;
      margin-right: 40px;
      left: 0;
      right: 0;
      top: -400px;
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
      border-bottom: solid 2px ${({ theme }) => theme.amarelo};
    }
    .inserir:hover .inserirP {
      color: ${({ theme }) => theme.card_text2};
      transition: 0.5s;
      border-bottom: solid 2px ${({ theme }) => theme.amarelo};
    }
  `;