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

    h1{
        width: 33%;
        margin: 20px;
        color: ${({ theme }) => theme.text};
        text-align: center;
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