import styled from "styled-components";

export const Form = styled.form`
    background-color:  ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text};
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    min-width: 60vw;
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

    .inputDtNasc{
        padding: 12px;
        color: #3c3c3c;  
    }

    .labelInput{
        display: flex;
        flex-direction: column;

        margin: 20px;
    }
    
    .alterar, .deletar{
        margin: 20px;
        color: white;
    }
    
    .alterar{
        background-color: ${({ theme }) => theme.amarelo};
        
    }

    .alterar:hover{
        box-shadow: 0px 0px 10px 5px ${({ theme }) => theme.amarelo};
    }

    .deletar{
        background-color: ${({ theme }) => theme.preto};
    }

    .deletar:hover{
        box-shadow: 0px 0px 10px 5px ${({ theme }) => theme.preto};
    }

    @media(min-width: 1000px) {
        button{
            margin: 40px;
        }
    }
`

export const DivCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media(min-width: 1000px) {
        flex-direction: row;
    }
`