import { useState } from "react";

import Input from "../../Input";
import Image from "../../Image";
import Button from "../../Button";

import ClienteIMG from "../../../assets/cliente.svg"
import FuncionarioIMG from "../../../assets/funcionario.svg";

import * as S from "./styled.js";
import { apiCliente } from "../../../services/api";

function FormLogin(){

    const [usuarioLogin, setLogin] = useState({});
    const [tipoLogin, setTipoLogin] = useState("");

    const handleOnchange = (e) => {
        setLogin({...usuarioLogin, [e.target.name]: e.target.value})
    }

    const handleTipoLogin = (e, value) => {
        e.preventDefault();
        setTipoLogin(value);
    }

    const loginCliente = async (e) =>{
        e.preventDefault();
        try {
            const response = await apiCliente.post('/cliente/login', usuarioLogin)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <S.Container>
            <S.Form onSubmit={(e)=> loginCliente(e)}>
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
                
                <Input placeholder="Email" type="email" name="email" id="email"  onChange={(e) => handleOnchange(e)}/>
            
                <Input placeholder="Senha" type="password" name="senha" id="senha"  onChange={(e) => handleOnchange(e)}/>

                <Button className="btnSubmit" type="submit" nome="Entrar"></Button>

                <a>Esqueceu a senha?</a>
                
                <div className="linhaPontilhada"></div>

                <Button className="btnSubmit" onClick="" nome="Criar nova conta" style={{display:  tipoLogin == "FUNCIONARIO" ? 'none': 'block'}}></Button>
            </S.Form>
        </S.Container>
    );
}

export default FormLogin;