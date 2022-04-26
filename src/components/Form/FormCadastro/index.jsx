import * as S from "./styled";

import Input from "../../Input";
import Button from "../../Button";
import Label from "../../Label";

import * as yup from "yup";
import toast from 'react-hot-toast';

import { apiCliente } from "../../../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { IoIosArrowForward } from "react-icons/io";


function FormCadastro(){
    const navigate = useNavigate()
    const [usuario, setUsuario] = useState({})

    const [status, setStatus] = useState({type:"", mensagem:""}) 
    
    const handleOnchange = (e) => {
        e.preventDefault()
        setUsuario({...usuario, [e.target.name]: e.target.value})  
    }

    const cadastroCliente = async (e) => {
        e.preventDefault()
        if(!(await validate())) return
        try {
            const response = await apiCliente.post('/clientes', usuario)
            console.log(response)
            navigate('/login')
        } catch (error) {
            console.log(error.response.data.msg)
        }
    }

    async function validate(){
        let schema = yup.object().shape({
            nome: yup.string("Preencher nome").required("Preencher nome"),
            data_nascimento: yup.date("Formato data").required("Preencher data de nascimento")
        })
        try {
            await schema.validate(usuario)
            return true
        } catch (error) {
            toast.error(error.errors)
        }
        return false
    }

    return(
        <S.Container>
            <S.Form onSubmit={(e=> cadastroCliente(e))}>
            <h1>Cadastro</h1>
                <Input placeholder="Nome completo" className="inputNormal" type="text" name="nome" id="nome" onChange={(e)=> handleOnchange(e)} />
                <S.DivCenter>
                    <div>
                        <S.DivCenter className="labelTeste">
                            <Label htmlFor="dtNascimento" nome="Data de Nascimento" />
                        </S.DivCenter>

                        <Input className="inputDtNasc" type="date" name="data_nascimento" id="dtNascimento" onChange={(e)=> handleOnchange(e)}/>
                    </div>
                    
                    <div>
                        <Label htmlFor="genero" nome="Gênero"></Label>
                        <select className="inputGenero" name="genero" id="genero" onChange={handleOnchange}> 
                            <option value=""></option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Outros">Outros</option>
                        </select>
                    </div>
                </S.DivCenter>

                <Input placeholder="CPF" className="inputNormal" type="text" name="cpf" id="cpf" onChange={(e)=> handleOnchange(e)}/>

                <Input placeholder="Email" className="inputNormal" type="email" name="email" id="email" onChange={(e)=> handleOnchange(e)}/>

                <S.DivCenter>
                <div className="senha">
                    <Input placeholder="Senha" className="inputSenha" type="password" name="senha" id="senha" onChange={(e)=> handleOnchange(e)}/>
                </div>

                <div>
                    <Input placeholder="Confirmar senha" className="inputSenha" type="password" name="confSenha" id="confSenha"/>
                </div>
                </S.DivCenter>
                
                <small><IoIosArrowForward />A senha deve ter no mínimo 8 dígitos</small>

                <Button className="styleForm cadastrar" type="submit" nome="Cadastrar"></Button>
            </S.Form>
        </S.Container>
    );
}

export default FormCadastro;