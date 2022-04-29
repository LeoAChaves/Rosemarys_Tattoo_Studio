import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/themes.js";
import { GlobalStyle } from "./styles/global.js";
// Page Site Institucional
import Home from "./pages/Home/index.jsx";
// Pages Funcionário
import FEstoqueUpdate from "./pages/Funcionario/Update/Estoque.jsx";
import FHome from "./pages/Funcionario/FHome.jsx";
import FPortfolioUpdate from "./pages/Funcionario/Update/Portfolio.jsx";
import FAgendamentoUpdate from "./pages/Funcionario/Update/Agendamento.jsx";
import EsqueceuSenha from "./pages/EsqueceuSenha";
import FEstoque from "./pages/Funcionario/FEstoque.jsx";
import FPortfolio from "./pages/Funcionario/FPortfolio.jsx";
import FAgendamento from "./pages/Funcionario/FAgenda.jsx";
import FAgendaView from "./pages/Funcionario/FAgendaView.jsx";
import FPortfolioView from "./pages/Funcionario/FPortfolioView.jsx";
import FEstoqueView from "./pages/Funcionario/FEstoqueView.jsx";
// Pages Usuário
import Login from "./pages/Login";
import Portfolio from "./pages/Portfolio";
import Usuario from "./pages/Usuario";
import AgendamentoPendente from "./pages/AgendamentoPendente";
import AtualizarUsuario from "./pages/AtualizarUsuario";
import Cadastro from "./pages/Cadastro";

function App() {
  const [theme, setTheme] = useState(darkTheme);
 const [cor, setCor] = useState()
  const changeTheme = () => {
    setCor(theme.body);
    setTheme(theme === darkTheme ? lightTheme : darkTheme);
    return cor
   
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          {/* Rota Site Institucional */}
          <Route path="/home" element={<Home changeTheme={changeTheme} />} />

          {/* Rotas Funcionário */}
          <Route
            path="/funcionario/home/:id"
            element={<FHome changeTheme={changeTheme} />}
          />
          <Route
            path="/funcionario/estoque/:id"
            element={<FEstoque changeTheme={changeTheme} />}
          />
          <Route
            path="/funcionario/portfolio/:id"
            element={<FPortfolio changeTheme={changeTheme} />}
          />
          <Route
            path="/funcionario/agendamento/:id"
            element={<FAgendamento changeTheme={changeTheme} />}
          />
          <Route
            path="/funcionario/agendamento-view/:id"
            element={<FAgendaView changeTheme={changeTheme} />}
          />
          <Route
            path="/funcionario/portfolio-view/:id"
            element={<FPortfolioView changeTheme={changeTheme} />}
          />
          <Route
            path="/funcionario/estoque-view/:id"
            element={<FEstoqueView changeTheme={changeTheme} />}
          />
          <Route
            path="/funcionario/estoque-update/:id/:update"
            element={<FEstoqueUpdate changeTheme={changeTheme} />}
          />
          <Route
            path="/funcionario/portfolio-update/:id/:update"
            element={<FPortfolioUpdate changeTheme={changeTheme} />}
          />
          <Route
            path="/funcionario/agendamento-update/:id/:update"
            element={<FAgendamentoUpdate changeTheme={changeTheme} />}
          />

          {/* Rotas Usuário */}
          <Route path="/login" element={<Login changeTheme={changeTheme} />} />
          <Route path="/esqueceuSenha" element={<EsqueceuSenha changeTheme={changeTheme} />} />
          <Route path="/cadastro" element={<Cadastro changeTheme={changeTheme} />} />
          <Route path="/usuario/:id" element={<Usuario changeTheme={changeTheme} />} />
          <Route path="/atualizarUsuario/:id" element={<AtualizarUsuario changeTheme={changeTheme} />} />
          <Route path="/portfolio" element={<Portfolio changeTheme={changeTheme} />} />
          <Route path="/agendamentoPendente" element={<AgendamentoPendente changeTheme={changeTheme} />} />
        </Routes>
      </BrowserRouter>

       </ThemeProvider>
       
  );
}

export default App;
