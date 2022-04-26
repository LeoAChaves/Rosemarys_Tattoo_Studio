import styled from "styled-components"
import LoginBackground from "../../assets/loginBackground.svg";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  
  background: url(${LoginBackground}) no-repeat bottom center scroll;
  min-height: 88vh;
  width: 100%;
  background-position: 0% 0%;
  background-size: cover;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100%;
  border-radius: 4px;
  
  background-color: ${({ theme }) => theme.branco_rosado_opaco};

  p{
    margin: 30px;
  }

  input{
    border-radius: 10px;
    border: none;
    height: 30px;
    width: 350px;
    margin: 10px;
    padding: 10px;
  }

  .enviar{
    background-color: ${({ theme }) => theme.vermelho};
    color: white;
  }

  .enviar:hover{
    box-shadow: 0px 0px 10px 5px ${({ theme }) => theme.vermelho};
  }

  @media(min-width: 800px) {
    height: 60vh;
    width: 800px;
  }
`

export const Paragrafo = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  text-align: center;
`