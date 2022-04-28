import styled from "styled-components";
import FHeader from "../../components/Funcionario/FHeader";
import FHomeMain from "../../components/Funcionario/FHome/FHomeMain.jsx";
import FFooter from "../../components/Funcionario/FFooter/FFooter.jsx";
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

    @media (max-width: 600px) {
      background-size: cover;
      height: auto;
    }
  `;

  return (
    
          <FHome>
      <FHeader
      
        btnHome={{ display: "none" }}
        btnVoltar={{ display: "none" }}
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
