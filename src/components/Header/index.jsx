import * as S from "./styled.js";

import Paragrafo from "../Paragrafo";
import Button from "../Button";
import Image from "../Image";

import { VscColorMode } from "react-icons/vsc";

function Header({style, div, sair, portfolio, a, b, c, changeTheme}){

    return(
        <S.Header style = {style}>
            <S.Div div = {div}>
                <Paragrafo texto="ID:" atributo="" />
                <Paragrafo texto="FUNCIONÁRIO:" atributo="" />
                <Paragrafo texto="FUNÇÃO:" atributo="" />
                <Paragrafo texto="STATUS:" atributo="" />
            </S.Div>
            <div>
                <Image src="data:image/jpeg;base64,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" alt="periquito azul" />
            </div>
            <div className="divLinks">
                <Button nome={portfolio} />
                <Button nome={a} />
                <Button nome={b} />
                <Button nome={c} />
                <Button nome={sair} />
                <VscColorMode className="themeMode" onClick={changeTheme}/>
            </div>
        </S.Header>
    );
}

export default Header;