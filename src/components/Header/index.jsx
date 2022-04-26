import * as S from "./styled.js";

import Paragrafo from "../Paragrafo";
import Button from "../Button";
import Image from "../Image";

import { VscColorMode } from "react-icons/vsc";

function Header({style, div, btnPortfolio, btnVoltar, btnHome, btnLogin, btnSair, className, sair, portfolio, home, login, voltar, changeTheme}){

    return(
        <S.Header style = {style}>
            <S.Div div = {div}>
                <Paragrafo texto="ID:" atributo="" />
                <Paragrafo texto="FUNCIONÁRIO:" atributo="" />
                <Paragrafo texto="FUNÇÃO:" atributo="" />
                <Paragrafo texto="STATUS:" atributo="" />
            </S.Div>
            <div>
                <Image src="https://media.discordapp.net/attachments/968220165194014750/968303712965636156/unknown__2_-removebg-preview.png" alt="periquito azul" />
            </div>
            <div className="divLinks">
                <Button style={btnPortfolio} className={className} nome={portfolio} />
                <Button style={btnHome} className={className} nome={home} />
                <Button style={btnLogin} className={className} nome={login} />
                <Button style={btnSair} className={className} nome={sair} />
                <Button style={btnVoltar} className={className} nome={voltar} />
                <VscColorMode className="themeMode" onClick={changeTheme}/>
            </div>
        </S.Header>
    );
}

export default Header;