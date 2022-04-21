import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

body {
    background: ${({ theme }) => theme.body}
    }
h1 {
    color: ${({ theme }) => theme.h1}
    }
h2 {
    color: ${({ theme }) => theme.h2}
    }
h3 {
    color: ${({ theme }) => theme.h3}
    }
h4 {
    color: ${({ theme }) => theme.h4}
    }
h5 {
    color: ${({ theme }) => theme.h5}
}
h6 {
    color: ${({ theme }) => theme.h6}
}
`;
