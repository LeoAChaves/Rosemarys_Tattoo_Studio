import styled from "styled-components"
import LoginBackground from "../../assets/loginBackground.svg";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  
  background: url(${LoginBackground}) no-repeat bottom center scroll;
  height: 88vh;
  width: 100%;
  background-position: 0% 0%;
  background-size: cover;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 60vh;
  width: 800px;
  border-radius: 4px;
  
  background-color: ${({ theme }) => theme.branco_rosado_opaco};

  input{
    border-radius: 10px;
    border: none;
    height: 30px;
    width: 350px;
    margin: 10px;
    padding: 10px;
  }

  .btnSubmit{
    width: 120px;
    height: 40px;

    border-radius: 10px;
    border: none;
    margin-top: 20px;

    cursor: pointer;

    background-color:  ${({ theme }) => theme.vermelho};
    color: white;
  }
`

export const Paragrafo = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  text-align: center;
`