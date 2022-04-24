import styled from "styled-components"

export const Main = styled.main`
    background: url(${({ theme }) => theme.background});
    color: ${({ theme }) => theme.text};
    
    height: 100vh;
    width: 100%;

    padding: 20px;
`

export const BlocoUm = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 20px;

    section{
        background-color: ${({ theme }) => theme.agendamento};
        padding: 30px;
        border-radius: 10px;
    }
`

export const BlocoDois = styled.div`
    display: flex;

    section{
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img{
        position: absolute;
        top: 30%;
        left: 59%;
    }

    div{
        position: relative;

        height: 50vh;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    
    h2{
        text-align: center;
    }

    button{
        width: 120px;
        height: 40px;

        border-radius: 10px;
        border: none;

        cursor: pointer;
    }
`