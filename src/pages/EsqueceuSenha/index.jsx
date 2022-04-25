import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";

import * as S from "./styled.js";

function EsqueceuSenha({changeTheme}) {
    const style = {
        height: "70px",
    }

    return (
        <>
            <Header style={style} div={{display:"none"}} portfolio="Login" changeTheme={changeTheme}/>
            <S.Container>
                <S.Form>
                    <S.Paragrafo>Informe seu email de cadastro para receber uma nova senha de acesso para sua conta.</S.Paragrafo>
                    
                    <Input placeholder="Email" type="email"/>
                
                    <Button className="btnSubmit" nome="Enviar" />
                </S.Form>
            </S.Container>
        </>
    );
}

export default EsqueceuSenha;