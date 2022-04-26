import styled from "styled-components"

export const Main = styled.main`
    color: ${({ theme }) => theme.text};
    
    min-height: 110vh;
    width: 100%;

    padding: 20px;
    background: url(${({ theme }) => theme.background}) no-repeat bottom center scroll;
    background-position: 30% 0%;
    background-size: cover;
`

export const BlocoUm = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    margin-bottom: 20px;

    section{
        background-color: ${({ theme }) => theme.agendamento};
        padding: 30px;
        border-radius: 10px;

        margin: 20px;
    }
`

export const BlocoDois = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    section{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container{
        display: flex;
        justify-content: space-around;
        align-items: center;

        position: relative;
        overflow: hidden;


        width: 425px;
        height: 425px;

        background: linear-gradient(90deg, rgba(255,185,48,1) 0%, rgba(123,0,0,1) 35%);

        border-radius: 10px;
    }

    .bordaAnimada{
        width: 620px;
        height: 410px;

        background-color: white;

        position: absolute;

        animation: rotate 4s infinite ease-in-out;
    }

    .corner{
        width: 418px;
        height: 418px;

        background-color: ${({ theme }) => theme.body};

        z-index: 1;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .dados{
        width: 400px;
        height: 400px;

        background-color: ${({ theme }) => theme.body};
        z-index: 2;

        display: flex;
        justify-content: space-around;
        align-items: center;

        border: 2px solid ${({ theme }) => theme.text};
    }

    @keyframes rotate{
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    
    h2{
        text-align: center;
    }

    .btnAlterar{
        width: 120px;
        height: 40px;

        border-radius: 10px;
        border: none;

        cursor: pointer;
        
        background-color: ${({ theme }) => theme.text};
        color: ${({ theme }) => theme.body};
    }

    @media(min-width: 1000px) {
        flex-direction: row;

        section{
            width: 50%;
        }
    }
`