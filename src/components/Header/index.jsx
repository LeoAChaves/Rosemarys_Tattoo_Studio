import { useNavigate } from "react-router-dom";

import * as S from "./styled.js";

import Paragrafo from "../Paragrafo";
import Button from "../Button";
import Image from "../Image";

import { VscColorMode } from "react-icons/vsc";

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
  return (
    <S.Header id={id} style={style}>
      <div>
        <Image
          src="https://media.discordapp.net/attachments/968220165194014750/968303712965636156/unknown__2_-removebg-preview.png"
          alt="periquito azul"
        />
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
        <VscColorMode className="themeMode" onClick={changeTheme} />
      </div>
    </S.Header>
  );
}

export default Header;
