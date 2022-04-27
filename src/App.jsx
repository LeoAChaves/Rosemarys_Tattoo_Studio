import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/themes.js";
import { GlobalStyle } from "./styles/global.js";

import AgendamentoPendente from "./pages/AgendamentoPendente";
import AtualizarUsuario from "./pages/AtualizarUsuario";
import Cadastro from "./pages/Cadastro";
import EsqueceuSenha from "./pages/EsqueceuSenha";
import FHome from "./pages/Funcionario/FHome.jsx";
import Login from "./pages/Login";
import Portfolio from "./pages/Portfolio";
import Usuario from "./pages/Usuario";

function App() {
  const [theme, setTheme ] = useState(darkTheme)

  const changeTheme = ()=>{
    setTheme(theme === darkTheme ? lightTheme : darkTheme)
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/funcionario/home" element={<FHome />} />
          <Route path="/login" element={<Login changeTheme={changeTheme}/>}/>
          <Route path="/esqueceuSenha" element={<EsqueceuSenha changeTheme={changeTheme}/>}/>
          <Route path="/cadastro" element={<Cadastro changeTheme={changeTheme}/>}/>
          <Route path="/usuario/:id" element={<Usuario changeTheme={changeTheme}/>}/>
          <Route path="/atualizarUsuario/:id" element={<AtualizarUsuario changeTheme={changeTheme}/>}/>
          <Route path="/portfolio" element={<Portfolio changeTheme={changeTheme}/>}/>
          <Route path="/agendamentoPendente" element={<AgendamentoPendente changeTheme={changeTheme}/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
