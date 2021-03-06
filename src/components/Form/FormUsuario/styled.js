import styled from "styled-components";

export const Form = styled.form`
  background-color:  ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  min-height: auto;

  margin-bottom: 40px;

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

    width: 60vw;
  }

  .selectForm{
    height: 40px;
  }

  small{
    margin: 0 20px;
  }

  a{
    color: ${({ theme }) => theme.portfolioAgendamento};
  }

  .textareaForm{
    height: 10vh;
  }

  .labelWhatsapp{
    margin-top: 20px;
  }

  .enviar{
    margin: 20px 0;
    background-color: ${({ theme }) => theme.btn_agendamento};
    color: ${({ theme }) => theme.button_text};
  }

  .enviar:hover{
    box-shadow: 0px 0px 10px 5px ${({ theme }) => theme.btn_agendamento};
  }

  @media(min-width: 1000px) {
    width: 50vw;
    margin-bottom: 0px;

    input, .selectForm{
      height: 40px;
      width: 30vw;
    }

    .textareaForm{
      width: 30vw;
    }
  }
`