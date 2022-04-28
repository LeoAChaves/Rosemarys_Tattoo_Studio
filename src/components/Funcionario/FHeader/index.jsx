import { useNavigate } from "react-router-dom";

import * as S from "./styled.js";

import Paragrafo from "../../Paragrafo";
import Button from "../../Button";
import Image from "../../Image";

import { VscColorMode } from "react-icons/vsc";
import useFuncionario from '../../Hooks/funcionario.jsx'
function Header({
  style,
  div,
  btnVoltar,
  btnHome,
  btnLogin,
  btnSair,
  className,
  sair,
  home,
  login,
  voltar,
  changeTheme,
}) {
  const navigate = useNavigate();
  const [funcionario] = useFuncionario()
  return (
    <S.Header style={style}>
      <div>
        <Paragrafo texto="ID:" atributo={funcionario.ID}/>
        <Paragrafo texto="FUNCIONÁRIO:" atributo={funcionario.NOME} />
        <Paragrafo texto="FUNÇÃO:" atributo={funcionario.CARGO} />
        <Paragrafo texto="STATUS:" atributo={funcionario.STATUS}/>
      </div>
      <div>
        <Image
          src="https://media.discordapp.net/attachments/968220165194014750/968303712965636156/unknown__2_-removebg-preview.png"
          alt="logo"
        />
      </div>
      <div className="divLinks">
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
          onClick={() => navigate("/funcionario/home")}
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
