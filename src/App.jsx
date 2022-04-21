import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/themes.js";
import { GlobalStyle } from "./styles/global.js";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <h1>Rosemery's Tattoo Studio</h1>
      <h2>Rosemery's Tattoo Studio</h2>
      <h3>Rosemery's Tattoo Studio</h3>
      <h4>Rosemery's Tattoo Studio</h4>
      <h5>Rosemery's Tattoo Studio</h5>
      <h6>Rosemery's Tattoo Studio</h6>
    </ThemeProvider>
  );
}

export default App;
