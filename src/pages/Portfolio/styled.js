import styled from "styled-components";

export const Main = styled.main`
    min-height: 80vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .grid{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }

    .blocoUm{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .invisivel{
        width: 33%;
    }

    h1{
        width: 33%;
        margin: 20px;
        color: ${({ theme }) => theme.text};
        text-align: center;
    }

    .selectProfissional{
        width: 33%;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    label{
        color: ${({ theme }) => theme.text};
    }

    .inputProfissional{
        border-radius: 10px;
        border: none;
        height: 30px;
        
        padding: 10px;
        width: 170px;
        padding: 0 12px;

        background-color: ${({ theme }) => theme.branco_rosado_opaco}
    }

    @media(min-width: 1100px) {
        .grid{
            display: grid;
            grid-template-columns: repeat(3, 3fr);
        }
    }

    @media(min-width: 700px) and (max-width: 1099px) {
        .blocoUm{
            justify-content: space-between;
            flex-direction: row;
        }

        .grid{
            display: grid;
            grid-template-columns: repeat(2, 2fr);
        }
    }
`