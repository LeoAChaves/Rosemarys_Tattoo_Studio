import styled from "styled-components";

export const Form = styled.form`
    background-color:  ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text};
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 60vw;
    border-radius: 4px;

    h1{
        margin: 20px 0;
    }  


    input, .inputGenero{
        border-radius: 10px;
        border: none;
        height: 40px;
        
        padding: 10px;

        width: 250px;
    }

    .inputNormal{
        margin: 20px;
    }

    .inputDtNasc{
        padding: 12px;
        color: #3c3c3c;  
    }

    .labelInput{
        display: flex;
        flex-direction: column;

        margin: 20px;
    }

    button{
        width: 120px;
        height: 40px;

        border-radius: 10px;
        border: none;
        margin: 40px;

        cursor: pointer;

        color: ${({ theme }) => theme.text};
    }

    .alterar{
        background-color: ${({ theme }) => theme.amarelo};
    }

    .deletar{
        background-color: ${({ theme }) => theme.preto};
    }
`

export const DivCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`