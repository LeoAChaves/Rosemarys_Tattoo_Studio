import { useState } from "react";

import Input from "../../Input";
import Image from "../../Image";
import Button from "../../Button";

import ClienteIMG from "../../../assets/cliente.svg"
import FuncionarioIMG from "../../../assets/funcionario.svg";

import * as S from "./styled.js";

function FormLogin(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [tipoLogin, setTipoLogin] = useState("");

    const handleTipoLogin = (e, value) => {
        e.preventDefault();
        setTipoLogin(value);
    }


    return(
        <S.Container>
            <S.Form>
                <S.ParagrafoConta>Escolha o tipo de conta</S.ParagrafoConta>

                <S.ContainerTipo>
                    <S.SeletorTipo onClick={(e) => handleTipoLogin(e, "CLIENTE")} loginSelecionado={tipoLogin === "CLIENTE"}>
                        <Image src={ClienteIMG} alt="Icone de Cliente" />
                        <p>Cliente</p>
                    </S.SeletorTipo>

                    <S.SeletorTipo onClick={(e) => handleTipoLogin(e, "FUNCIONARIO")} loginSelecionado={tipoLogin === "FUNCIONARIO"}>
                        <Image src={FuncionarioIMG} alt="Icone de Funcionário" />
                        <p>Funcionário</p>
                    </S.SeletorTipo>
                </S.ContainerTipo>
                
                <Input placeholder="Email" type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            
                <Input placeholder="Senha" type="password" name="senha" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>

                <Button className="btnSubmit" type="submit" nome="Entrar"></Button>

                <a>Esqueceu a senha?</a>
                
                <div className="linhaPontilhada"></div>

                <Button className="btnSubmit" onClick="" nome="Criar nova conta"></Button>
            </S.Form>
        </S.Container>
    );
}

export default FormLogin;