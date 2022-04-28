import { useState } from "react";

import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

import * as yup from "yup";
import toast from 'react-hot-toast';

import * as S from "./styled.js";

function EsqueceuSenha({changeTheme}) {
    const style = {
        height: "70px",
    }

    const [email, setEmail] = useState({email: ""})

    async function validate(e){
        e.preventDefault()
        let schema = yup.object().shape({
            email: yup.string("Campo de nome completo deve ser preenchido com letras").email("E-mail inválido.").required("Campo de email não pode estar vazio"),
        })
        try {
            await schema.validate(email)
            toast.success('Isso aí, seu e-mail foi identificado e enviamos um link de redefinição de senha, basta clicar nele e escolher uma senha nova! ✨')
            return true
        } catch (error) {
            toast.error(error.errors)
        }
        return false
    }

    return (
        <>
            <Header btnVoltar={{display: "none"}} btnHome={{display: "none"}} btnPortfolio={{display: "none"}} btnSair={{display: "none"}} className={"btn custom-btn styleHeader"} style={style} login="Login" changeTheme={changeTheme}/>
            <S.Container>
                <S.Form>
                    <S.Paragrafo>Informe seu email de cadastro para receber uma nova senha de acesso para sua conta.</S.Paragrafo>
                    
                    <Input placeholder="Email" name="email" type="email" onChange={(e) => setEmail({email:e.target.value})}/>
                
                    <Button onClick={(e) => validate(e)} className="styleForm enviar" nome="Enviar" />
                </S.Form>
            </S.Container>
            <Footer />
        </>
    );
}

export default EsqueceuSenha;