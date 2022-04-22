import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/themes.js";
import { GlobalStyle } from "./styles/global.js";
import FHome from "./pages/Funcionario/FHome.jsx";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/funcionario/home" element={<FHome />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
