import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: calc(100vh - 110px);
  display: flex;
  align-items: center;
`;

export const Quadro = styled.section`
  background-color: ${({ theme }) => theme.primary};
  width: 100%;
  height: 85%;
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
`;

export const Form = styled.section`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 20px;

.lista{
    width:55%;
    height:100%;
    align-self: center;
    display:flex;
    align-items: center;
    justify-content:space-between;
    margin: 20px;
    padding:20px;
    background-color: ${({ theme }) => theme.card};
    border: 4px solid ${({ theme }) => theme.button};
    border-radius: 10px;
  }

  .lista div{
    padding:20px;
  }
 
  .lista img{
    width: 350px;
    height: 320px;
  }
.lista li{
  padding-bottom:20px;
}
  .imagem{
    display: flex;
    flex-direction: column;
    align-self: center
  }

  .busca{
    align-self: flex-end;
    margin-right: 30px;
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
