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

  .seta button {
    background: none;
    widht: 80px;
    height: 35px;
    margin: 0 10px 20px 10px;
    border: 4px solid ${({ theme }) => theme.button};
  }

  .seta img {
    widht: 30px;
    height: 30px;
  }
`;

export const Form = styled.section`
  width: 100%;
  height: 80%;
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

  .busca {
    align-self: flex-end;
    margin: 30px;
  }

  Input {
    width: 200px;
    height: 30px;
    background-color: ${({ theme }) => theme.input};
    padding: 10px;
    border: none;
    font-size: 16px;
  }
    
  Button {
    width: 100px;
    height: 33px;
    background: ${({ theme }) => theme.button};
    font-size: 14px;
    color:  ${({ theme }) => theme.button_text};
    border: 2px solid #000000;
`;
export const Cards = styled.section`
  width: 100%;
  height: 75%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .lista {
    width: 20%;
    height: 100%;
    padding: 20px;
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

  .botao {
    align-self: flex-start;
  }

  .botao Button {
    width: 90px;
    height: 40px;
    margin-top: 20px;
    background: ${({ theme }) => theme.button};
    border-radius: 10px;
    font-size: 13px;
    color: ${({ theme }) => theme.button_text};
    margin-right: 15px;
  }
  .botao Button:hover {
    box-shadow: 0px 0px 10px 5px ${({ theme }) => theme.button_text};
  }
`;
