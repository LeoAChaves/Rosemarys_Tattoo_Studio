import styled from "styled-components";

export const Main = styled.main`
    color: ${({ theme }) => theme.text};
    
    min-height: 90vh;
    width: 100%;

    padding: 20px;
    background: url(${({ theme }) => theme.background}) no-repeat bottom center scroll;
    background-position: 30% 0%;
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;
`