import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/themes.js";
import { GlobalStyle } from "./styles/global.js";
import FHome from "./pages/Funcionario/FHome.jsx";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Usuario from "./pages/Usuario";
import AtualizarUsuario from "./pages/AtualizarUsuario";
import EsqueceuSenha from "./pages/EsqueceuSenha";
import { useState } from "react";

function App() {
  const [theme, setTheme ] = useState(darkTheme)

  const changeTheme = ()=>{
    setTheme(theme === darkTheme ? lightTheme : darkTheme)
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/funcionario/home" element={<FHome />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/esqueceuSenha" element={<EsqueceuSenha />}/>
          <Route path="/cadastro" element={<Cadastro />}/>
          <Route path="/usuario" element={<Usuario changeTheme={changeTheme}/>}/>
          <Route path="/atualizarUsuario" element={<AtualizarUsuario changeTheme={changeTheme}/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
