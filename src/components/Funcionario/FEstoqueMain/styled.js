import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: calc(100vh - 130px);
  display: flex;
  align-items: flex-end;
`;

export const Quadro = styled.section`
  background-color: ${({ theme }) => theme.primary};
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    padding-top: 30px;
    color: ${({ theme }) => theme.text};
    font-size: 24px;
    font-weight: 400;
    text-align: center;
  }

  .busca {
    width: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    margin-right: 30px;
  }

  .divIcon{
    margin-right: 20px;
  }

  .cancelarFiltro{
    font-size: 30px;
    color: ${({ theme }) => theme.text};
    cursor: pointer;
  }

  Input {
    width: 200px;
    height: 30px;
    background-color: ${({ theme }) => theme.input};
    padding: 10px;
    border: none;
    font-size: 16px;
  }

  .busca Button {
    width: 100px;
    height: 33px;
    background: ${({ theme }) => theme.button};
    font-size: 14px;
    color: ${({ theme }) => theme.button_text};
    border: 2px solid #000000;
  }
  Button:hover {
    transform: scale(1.1);
  }

  .btnBusca {
    background: none;
    width: 40px;
    height: 35px;
    margin: 0 10px 20px 10px;
    border: 4px solid ${({ theme }) => theme.button};
    cursor: pointer;
  }

  .seta img {
    width: 30px;
    height: 30px;
  }
`;

export const Form = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const Cards = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .lista {
    width: 20%;
    height: 80%;
    display: flex;
    flex: none;
    align-items: center;
    justify-content: space-between;
    margin: 20px;
    padding: 20px;
    background-color: ${({ theme }) => theme.card};
    border: 4px solid ${({ theme }) => theme.button};
    border-radius: 10px;
  }

  .lista li {
    padding: 10px 0;
  }
  .dados {
    padding: 20px;
  }
  .dados span {
    color: #5e5a57;
  }
  .botao {
    align-self: flex-start;
  }

  .botao Button {
    width: 90px;
    height: 40px;
    margin: 20px 15px 10px 0;
    background: ${({ theme }) => theme.button};
    border-radius: 10px;
    font-size: 13px;
    color: ${({ theme }) => theme.button_text};
  }
  .botao Button:hover {
    box-shadow: 0px 0px 10px 5px ${({ theme }) => theme.button_text};
  }
`;
