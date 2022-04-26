import styled from "styled-components";
import LoginBackground from "../../../assets/loginBackground.svg";


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

  h1{
    text-align: center;
    margin-bottom: 20px;
  }

  input, .inputGenero{
    border-radius: 10px;
    border: none;
    height: 30px;
    
    margin: 10px;
    padding: 10px;
  }
  
  .inputNormal{
    width: 360px;
  }

  label{
    margin-left: 10px;
  }
  
  .inputDtNasc{
    width: 170px;
    padding: 12px;
    color: #3c3c3c;
    
    margin-left: 60px;
  }

  .inputGenero{
    width: 170px;
    padding: 0 12px;

    margin-right: 60px;
  }
  
  .senha{
    margin-right: 10px;
  }

  .inputSenha{
    width: 165px;
  }
  
  .condSenha{
    display: flex;
    align-self: flex-start;
  }

  small{
    display: flex;
    align-items: center;
  }
  
  .cadastrar{
    background-color: ${({ theme }) => theme.vermelho};
    color: white;
  }

  .cadastrar:hover{
    box-shadow: 0px 0px 10px 5px ${({ theme }) => theme.vermelho};
  }

  @media(min-width: 600px) {
    height: 82vh;
    width: 450px;
  }
`

export const DivCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`