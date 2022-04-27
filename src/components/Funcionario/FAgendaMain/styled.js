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
    padding: 30px 10px 0 0;
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
  height: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }

.caixa{
  width:30%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items: center;
  margin: 20px;
}

.lista{
    width:30%;
    height:100%;
    display:flex;
    flex: none;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    margin: 20px;
    padding:20px;
    background-color: #FDFDFD;
    border: 4px solid ${({ theme }) => theme.button};
    border-radius: 10px;
  }

  .lista div{
    padding:20px;
    border-bottom: 2px solid  #282320 
  }

  Input {
    width: 500px;
    height: 50px;
    background-color: ${({ theme }) => theme.input};
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 40px;
    border: none;
    font-size: 16px;
  }

  
  Button {
    width: 130px;
    height: 50px;
    background: ${({ theme }) => theme.button};
    font-size: 14px;
    color:  ${({ theme }) => theme.text};
    
`;
