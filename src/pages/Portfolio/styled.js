import styled from "styled-components";

export const Main = styled.main`
    min-height: 80vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .grid{
        display: grid;
        grid-template-columns: repeat(3, 3fr);
    }

    h1{
        margin: 20px;
        color: ${({ theme }) => theme.text};
    }

    .inputProfissional{
        border-radius: 10px;
        border: none;
        height: 30px;
        
        margin: 10px;
        padding: 10px;
    }
`