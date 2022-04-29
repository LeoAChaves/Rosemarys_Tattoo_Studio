import { useNavigate } from "react-router-dom";

import * as S from "./styled.js";

import Paragrafo from "../../Paragrafo";
import Button from "../../Button";
import Image from "../../Image";

import { VscColorMode } from "react-icons/vsc";
import useFuncionario from "../../Hooks/funcionario.jsx";
import { useState } from "react";
function Header({
  style,
  btnVoltar,
  btnHome,
  btnSair,
  className,
  sair,
  home,
  voltar,
  changeTheme,
}) {
  const navigate = useNavigate();
  const [funcionario] = useFuncionario();
  const [cor, setCor] = useState('#000000')


  return (
    
    <S.Header style={style}>
      
      <div className="dadosFunc">
        <Paragrafo texto="ID:" atributo={funcionario.ID} />
        <Paragrafo texto="FUNCIONÁRIO:" atributo={funcionario.NOME} />
        <Paragrafo texto="FUNÇÃO:" atributo={funcionario.CARGO} />
        <Paragrafo texto="STATUS:" atributo={funcionario.STATUS} />
      </div>
      <div>
      
      {cor === '#000000' ? <Image
          className="logoGeral"
          src="https://media.discordapp.net/attachments/923686382659059742/969457766894813224/logoDark.png"
          alt="logoDark"
        /> :
        <Image
          className="logoGeral"
          src="https://media.discordapp.net/attachments/923686382659059742/969457767385563156/logoLight.png"
          alt="logoLight"
        />}
        {/* <Image
          className="logoResponsivo"
          src="https://media.discordapp.net/attachments/923686382659059742/969457767175843910/logoDarkR.png?width=670&height=670"
          alt="logoDarkR"
        /> */}
        {/* <Image
          className="logoResponsivo"
          src="https://media.discordapp.net/attachments/923686382659059742/969457767582687323/logoLightR.png?width=670&height=670"
          alt="logoLightR"
        /> */}
        
      </div>
      <div className="divLinks">
        <Button
          style={btnHome}
          className={className}
          nome={home}
          onClick={() => navigate(`/home`)}
        />
        <Button
          style={btnVoltar}
          className={className}
          nome={voltar}
          onClick={() => window.history.back()}
        />
        <Button
          style={btnSair}
          className={className}
          nome={sair}
          onClick={() => navigate(`/login`)}
        />
        
     
        <VscColorMode className="themeMode" onClick={()=>setCor(changeTheme())} />
      </div>
    </S.Header>
  );
}

export default Header;
