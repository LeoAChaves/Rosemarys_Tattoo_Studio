import { useNavigate } from "react-router-dom";

import * as S from "./styled.js";

import Button from "../Button";
import Image from "../Image";
import { VscColorMode } from "react-icons/vsc";
import { useState } from "react";

function Header({
  id,
  style,
  btnPortfolio,
  btnVoltar,
  btnHome,
  btnLogin,
  btnSair,
  className,
  sair,
  portfolio,
  home,
  login,
  voltar,
  changeTheme,
}) {
  const navigate = useNavigate();
  const [cor, setCor] = useState('#000000')
  return (
    <S.Header id={id} style={style}>
      <div>
      
        {cor === '#000000' ? 
        <Image
          className="logoGeral"
          src="https://media.discordapp.net/attachments/923686382659059742/969457766894813224/logoDark.png"
          alt="logoDark"
        /> 
        :
          <Image
            className="logoGeral"
            src="https://media.discordapp.net/attachments/923686382659059742/969457767385563156/logoLight.png"
            alt="logoLight"
          />
        }
       
        {cor === '#000000' ?
          <Image
          className="logoResponsivo"
          src="https://media.discordapp.net/attachments/923686382659059742/969457767582687323/logoLightR.png?width=670&height=670"
          alt="logoLightR"
        />
          :
          <Image
            className="logoResponsivo"
            src="https://media.discordapp.net/attachments/923686382659059742/969457767175843910/logoDarkR.png?width=670&height=670"
            alt="logoDarkR"
          /> 
        }
      </div>
      <div className="divLinks">
        <Button
          style={btnPortfolio}
          className={className}
          nome={portfolio}
          onClick={() => navigate(`/portfolio`)}
        />
        <Button
          style={btnHome}
          className={className}
          nome={home}
          onClick={() => navigate(`/home`)}
        />
        <Button
          style={btnLogin}
          className={className}
          nome={login}
          onClick={() => navigate(`/login`)}
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
