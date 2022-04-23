import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Amaranth";
  }
li {
    list-style: none;
}
body {
    background: ${({ theme }) => theme.body}
    }
`;
