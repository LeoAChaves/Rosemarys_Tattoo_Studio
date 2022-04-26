import styled, { css } from "styled-components"
import LoginBackground from "../../../assets/loginBackground.svg"

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  overflow-y: hidden;
  overflow-x: hidden;
  
  background: url(${LoginBackground}) no-repeat bottom center scroll;
  height: 95vh;
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

  input{
    border-radius: 10px;
    border: none;
    height: 30px;
    width: 250px;
    margin: 10px;
    padding: 10px;
  }

  .entrar{
    background-color: ${({ theme }) => theme.vermelho};
    color: white;
  }

  .entrar:hover{
    box-shadow: 0px 0px 10px 5px ${({ theme }) => theme.vermelho};
  }

  .cadastro{
    background-color: ${({ theme }) => theme.amarelo};
    color: white;
  }

  .cadastro:hover{
    box-shadow: 0px 0px 10px 5px ${({ theme }) => theme.amarelo};
  }

  a{
    margin: 20px;
    cursor: pointer;
  }
  
  .linhaPontilhada{
    border: 1px dashed #757575;
    width: 400px;
  }

  @media(min-width: 600px) {
    height: 82vh;
    width: 480px;
  }
`

export const ParagrafoConta = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  text-align: center;
`

export const ContainerTipo = styled.div`
  display: flex;
  gap: 16px;
`

export const SeletorTipo = styled.button`
  margin-bottom: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  p {
    margin: 10px;
  }

  img {
    ${props => props.loginSelecionado 
      ? css`
        border: 2px solid green;
      `
      : css`
        border: 1px solid black;
      `
    }

    border-radius: 100%;
    width: 150px;
  }
`