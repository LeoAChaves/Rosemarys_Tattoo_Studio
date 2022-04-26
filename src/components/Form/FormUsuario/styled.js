import styled from "styled-components";

export const Form = styled.form`
  background-color:  ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 50vw;

  border-radius: 10px;

  h2{
    margin: 20px 0;
  }  

  input, .selectForm, .textareaForm{
    border-radius: 10px;
    border: none;
    height: 40px;
    
    margin: 10px;
    padding: 10px;

    width: 30vw;
  }

  .selectForm{
    height: 40px;
  }

  small{
    margin: 0 20px;
  }

  .textareaForm{
    height: 10vh;
  }

  .labelWhatsapp{
    margin-top: 20px;
  }

  button{
    width: 120px;
    height: 40px;

    border-radius: 10px;
    border: none;
    margin: 20px 0;

    cursor: pointer;

    background-color: ${({ theme }) => theme.btn_agendamento};
    color: ${({ theme }) => theme.button_text};
  }
`