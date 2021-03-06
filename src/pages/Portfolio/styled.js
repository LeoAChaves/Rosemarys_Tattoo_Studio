import styled from "styled-components";

export const Main = styled.main`
    min-height: 80vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    .blocoUm{
        width: 100%;
    }
    
    .inputBtn{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        text-align: center;

        padding-right: 40px;
    }

    .divIcon{
        margin-left: 20px;
    }

    .cancelarFiltro{
        font-size: 30px;
        color: ${({ theme }) => theme.text};
        cursor: pointer;
    }

    input{
        background-color: ${({ theme }) => theme.branco_rosado_opaco};

        border-radius: 10px 0px 0px 10px;
        border: none;
        
        padding: 10px;
        
        height: 40px;
        width: 250px;
    }

    button{
        border-radius: 0px 10px 10px 0px;
        border: none;
        height: 40px;
        
        padding: 10px;

        background-color: ${({ theme }) => theme.amarelo};
        cursor: pointer;
    }

    .grid{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }

    h1{
        margin: 20px 0;
        color: ${({ theme }) => theme.text};
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .divMsgPort{
        display: flex;
        justify-content: center;
        align-items: center;

        min-height: 90vh;
    }

    .msgNEncontradoPort{
        color: ${({ theme }) => theme.text};
    }

    @media(min-width: 1100px) {
        .grid{
            display: grid;
            grid-template-columns: repeat(3, 3fr);
        }
    }

    @media(min-width: 700px) and (max-width: 1099px) {
        .grid{
            display: grid;
            grid-template-columns: repeat(2, 2fr);
        }
    }
`