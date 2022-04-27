import styled from "styled-components";

export const Main = styled.main`
    min-height: 90vh;

    padding: 20px;
    background: url(${({ theme }) => theme.background}) no-repeat bottom center scroll;
    background-position: 30% 0%;
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .grid{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }

    @media(min-width: 700px) and (max-width: 1099px) {
        .grid{
            display: grid;
            grid-template-columns: repeat(2, 2fr);
        }
    }

    @media(min-width: 1100px) {
        .grid{
            display: grid;
            grid-template-columns: repeat(3, 3fr);
        }
    }
`