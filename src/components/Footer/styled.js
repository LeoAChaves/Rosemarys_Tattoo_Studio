import styled from "styled-components";

export const Footer = styled.footer`
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text};
    height: 60px;

    p{
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`