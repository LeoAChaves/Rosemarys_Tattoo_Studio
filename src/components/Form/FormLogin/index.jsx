import { useState } from "react";
import { useNavigate} from "react-router-dom";
import Input from "../../Input";
import Image from "../../Image";
import Button from "../../Button";
import * as yup from "yup";
import toast from 'react-hot-toast';

import ClienteIMG from "../../../assets/cliente.svg"
import FuncionarioIMG from "../../../assets/funcionario.svg";

import * as S from "./styled.js";
import { apiCliente, apiFuncionario } from "../../../services/api";

function FormLogin(){
    const navigate = useNavigate()
   
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
        if(!(await validate())) return
        try {
            const response = await apiCliente.post('/cliente/login', usuarioLogin)
            const idUsuario = response.data.cliente._id
            navigate(`/usuario/${idUsuario}`)   
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const loginFuncionario = async (e) =>{
        e.preventDefault();
        if(!(await validate())) return
        try {
            const response = await apiFuncionario.post('/funcionario/login', usuarioLogin)
            const idFuncionario = response.data.cliente[0].ID
            navigate(`/funcionario/home/${idFuncionario}`)   
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    async function validate(){
        let schema = yup.object().shape({
            email: yup.string("Campo de nome completo deve ser preenchido com letras").email("E-mail inválido.").required("Campo de email não pode estar vazio"),
            senha: yup.string().required('Campo de senha não pode estar vazio, sua senha deve ter no mínimo 8 dígitos, letras e números '),
        })
        try {
            await schema.validate(usuarioLogin)
            return true
        } catch (error) {
            toast.error(error.errors)
        }
        return false
    }

    return(
        <S.Container>
            <S.Form >
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
                
                <Input placeholder="Email" type="email" name="email" id="email"  onChange={(e) => handleOnchange(e)} disabled={tipoLogin.length === 0 ? true : false}/>
            
                <Input placeholder="Senha" type="password" name="senha" id="senha"  onChange={(e) => handleOnchange(e)} disabled={tipoLogin.length === 0 ? true : false}/>
                {tipoLogin === 'CLIENTE' ? <Button className="styleForm entrar" type="submit" nome="Entrar" onClick={(e)=> loginCliente(e)}/>
                :
                <Button className="styleForm entrar" type="submit" nome="Entrar" onClick={(e)=> loginFuncionario(e)}/>}
                
                <a className="linkTagA" onClick={()=>navigate(`/esqueceuSenha`)}>Esqueceu a senha?</a>
                
                <div className="linhaPontilhada"></div>

                <Button className="styleForm cadastro" onClick={()=>navigate('/cadastro')} nome="Criar nova conta" style={{display:  tipoLogin == "FUNCIONARIO" ? 'none': 'block'}}></Button>
            </S.Form>
        </S.Container>
    );
}

export default FormLogin;