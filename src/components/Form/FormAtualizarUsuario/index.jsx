import * as S from "./styled.js";

import * as yup from "yup";
import toast from 'react-hot-toast';

import Input from "../../Input";
import Button from "../../Button";
import Label from "../../Label";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { apiCliente } from "../../../services/api.js";

function AtualizarUsuario() {
    
    const navigate = useNavigate()
    const [usuario, setUsuario] = useState({})
    const {id} = useParams()

    useEffect(() => {
        async function buscaUsuario(){
            try {
                const response = await apiCliente.get(`/cliente/${id}`)
                setUsuario(response.data.cliente)
            } catch (error) {
                console.log(error.response);
            }
        }
        buscaUsuario()
    }, [])

     const handleChange = (e) => {
        setUsuario({...usuario, [e.target.name]: e.target.value})

    }

    async function atualizarDados(e) {
        e.preventDefault()
        if(!(await validate())) return
        try {
             await apiCliente.patch(`/cliente/${id}`, usuario)
            toast.success("Usuário atualizado com sucesso! ✨")
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    async function deletarConta(e) {
        e.preventDefault()
        try {
         const response =  await apiCliente.delete(`/cliente/${id}`)
         toast.success(response.data.message)
           navigate('/home')
        } catch (error) {
            console.log(error.response);
        }
    }


    async function validate(){
        let schema = yup.object().shape({
            nome: yup.string("Campo de nome completo deve ser preenchido com letras").required("Campo de nome completo não pode estar vazio"),
            email: yup.string("Campo de nome completo deve ser preenchido com letras").email("E-mail inválido.").required("Campo de email não pode estar vazio"),
            genero: yup.string("").required("Campo de gênero não pode estar vazio"),
            cpf: yup.string("Campo de CPF deve ser preenchido com números").required("Campo de CPF não pode estar vazio").min(11, 'O cpf precisa ter 11 digitos').max(11,'O cpf precisa ter 11 digitos'),
            senha: yup.string().required('Campo de senha não pode estar vazio, sua senha deve ter no mínimo 8 dígitos, letras e números ').min(8, 'Senha deve ter no mínimo 8 dígitos, letras e números').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[0-9])/, 'Senha deve ter no mínimo 8 dígitos, letras e números')
        })
        try {
            await schema.validate(usuario)
            return true
        } catch (error) {
            toast.error(error.errors)
        }
        return false
    }

    return (
        <S.Form>
            <h1>Seus Dados</h1>
            <S.DivCenter>
                <div className="labelInput">
                    <Label htmlFor="nome" nome="Nome Completo" name="nome"  />
                    <Input type="text" id="nome" nome="nome" name="nome" onChange={(e)=> handleChange(e)} value={usuario.nome}/>
                </div>
                <div className="labelInput">
                    <Label htmlFor="email" nome="Email" name="email"  />
                    <Input id="email" type="email" name="email" onChange={(e)=> handleChange(e)} value={usuario.email}/>
                </div>
            </S.DivCenter>
            <S.DivCenter>
                <div className="labelInput">
                    <Label htmlFor="dtNascimento" nome="Data de Nascimento" name="data_nascimento"  />
                    <Input className="inputDtNasc" type="date" name="data_nascimento" id="dtNascimento" disabled={true} onChange={(e)=> handleChange(e)} value={usuario.data_nascimento}/>
                </div>
                <div className="labelInput">
                    <Label htmlFor="genero" nome="Gênero"/>
                    <select className="inputGenero" name="genero" id="genero"  onChange={(e)=> handleChange(e)} value={usuario.genero}> 
                        <option value=""></option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Outros">Outros</option>
                    </select>
                </div>
            </S.DivCenter>
            <S.DivCenter>
                <div className="labelInput">
                    <Label htmlFor="cpf" nome="CPF" name="cpf"  />
                    <Input id="cpf" type="text" name="cpf"  onChange={(e)=> handleChange(e)}  value={usuario.cpf}/>
                </div>
                <div className="labelInput">
                    <Label htmlFor="senha" nome="Senha" name="senha"  />
                    <Input type="password" id="senha" name="senha" onChange={(e)=> handleChange(e)} value={usuario.senha}/>
                </div>
            </S.DivCenter>
            <div>
                <Button className="styleForm alterar" nome="Alterar" onClick={(e)=> atualizarDados(e)}/>
                <Button className="styleForm deletar" nome="Apagar conta" onClick={(e)=> deletarConta(e)}/>
            </div>
        </S.Form>
    );
}

export default AtualizarUsuario;