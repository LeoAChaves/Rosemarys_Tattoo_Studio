import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/themes.js";
import { GlobalStyle } from "./styles/global.js";
import FHome from "./pages/Funcionario/FHome.jsx";
import FEstoque from "./pages/Funcionario/FEstoque.jsx";
import FPortfolio from "./pages/Funcionario/FPortfolio.jsx";
import FAgendamento from "./pages/Funcionario/FAgenda.jsx";
import FAgendaView from "./pages/Funcionario/FAgendaView.jsx";
import FPortfolioView from "./pages/Funcionario/FPortfolioView.jsx";
import FEstoqueView from "./pages/Funcionario/FEstoqueView.jsx";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Usuario from "./pages/Usuario";
import AtualizarUsuario from "./pages/AtualizarUsuario";
import EsqueceuSenha from "./pages/EsqueceuSenha";

function App() {
  const [theme, setTheme] = useState(darkTheme);

  const changeTheme = () => {
    setTheme(theme === darkTheme ? lightTheme : darkTheme);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/funcionario/home" element={<FHome />} />
          <Route path="/funcionario/estoque" element={<FEstoque />} />
          <Route path="/funcionario/portfolio" element={<FPortfolio />} />
          <Route path="/funcionario/agendamento" element={<FAgendamento />} />
          <Route path="/funcionario/agenda" element={<FAgendaView />} />
          <Route
            path="/funcionario/portfolio-view"
            element={<FPortfolioView />}
          />
          <Route path="/funcionario/estoque-view" element={<FEstoqueView />} />
          <Route path="/login" element={<Login changeTheme={changeTheme} />} />
          <Route
            path="/esqueceuSenha"
            element={<EsqueceuSenha changeTheme={changeTheme} />}
          />
          <Route
            path="/cadastro"
            element={<Cadastro changeTheme={changeTheme} />}
          />
          <Route
            path="/usuario/:id"
            element={<Usuario changeTheme={changeTheme} />}
          />
          <Route
            path="/atualizarUsuario/:id"
            element={<AtualizarUsuario changeTheme={changeTheme} />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
