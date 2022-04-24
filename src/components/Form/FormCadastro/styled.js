import styled from "styled-components";
import LoginBackground from "../../../assets/loginBackground.svg";


export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-image: url(${LoginBackground});
  height: 100vh;
  width: 100%;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 82vh;
  width: 450px;
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
  
  button{
    width: 120px;
    height: 40px;

    border-radius: 10px;
    border: none;
    margin-top: 40px;

    cursor: pointer;
  }
`

export const DivCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`