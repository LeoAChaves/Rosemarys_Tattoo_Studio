import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";

import toast from 'react-hot-toast';

import * as S from "./styled.js";

function EsqueceuSenha({changeTheme}) {
    const style = {
        height: "70px",
    }

    const notify = (e) => {
        e.preventDefault()
        toast.success('Isso aí, seu e-mail foi identificado e enviamos um link de redefinição de senha, basta clicar nele e escolher uma senha nova! ✨')    
    }

    return (
        <>
            <Header style={style} div={{display:"none"}} portfolio="Login" changeTheme={changeTheme}/>
            <S.Container>
                <S.Form>
                    <S.Paragrafo>Informe seu email de cadastro para receber uma nova senha de acesso para sua conta.</S.Paragrafo>
                    
                    <Input placeholder="Email" type="email"/>
                
                    <Button onClick={(e) => notify(e)} className="btnSubmit" nome="Enviar" />
                </S.Form>
            </S.Container>
        </>
    );
}

export default EsqueceuSenha;