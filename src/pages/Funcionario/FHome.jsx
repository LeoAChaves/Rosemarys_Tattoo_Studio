import styled from "styled-components";
import FHeader from "../../components/Funcionario/FHeader";
import FHomeMain from "../../components/Funcionario/FHome/FHomeMain.jsx";
import FFooter from "../../components/Funcionario/FFooter/FFooter.jsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {apiFuncionario} from '../../services/api.js'
import useFuncionario from "../../components/Hooks/funcionario.jsx";
function FHome({ changeTheme }) {
  const style = {
    height: "80px",
  };
  const FHome = styled.body`
    height: 100vh;
    width: 100%;
    background-image: url(${({ theme }) => theme.background});
    background-size: cover;
    background-position: center;
  `;

  return (
    
          <FHome>
      <FHeader
      
        btnHome={{ display: "none" }}
        btnVoltar={{ display: "none" }}
        btnLogin={{ display: "none" }}
        btnInicial={{ display: "none" }}
        btnPortfolio={{ display: "none" }}
        className={"btn custom-btn styleHeader"}
        style={style}
        sair="Sair"
        changeTheme={changeTheme}
      
        
      />
      
      <FHomeMain />
      <FFooter />
    </FHome>
 
  
  );
}

export default FHome;
