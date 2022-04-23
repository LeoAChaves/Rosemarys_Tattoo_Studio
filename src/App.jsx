import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/themes.js";
import { GlobalStyle } from "./styles/global.js";
import FHome from "./pages/Funcionario/FHome.jsx";
import FEstoque from "./pages/Funcionario/FEstoque.jsx";
import FPortfolio from "./pages/Funcionario/FPortfolio.jsx";
import FAgendamento from "./pages/Funcionario/FAgendamento.jsx";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/funcionario/home" element={<FHome />} />
          <Route path="/funcionario/estoque" element={<FEstoque />} />
          <Route path="/funcionario/portfolio" element={<FPortfolio />} />
          <Route path="/funcionario/agendamento" element={<FAgendamento />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
