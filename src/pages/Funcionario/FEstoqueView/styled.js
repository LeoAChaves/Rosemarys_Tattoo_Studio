import styled from "styled-components";

export const EstoqueView = styled.body`
    height: 100vh;
    width: 100%;
    background-image: url(${({ theme }) => theme.background});
    background-size: cover;
    background-position: center;

    @media (max-width: 600px) {
      background-size: cover;
      height: auto;
    }
`;