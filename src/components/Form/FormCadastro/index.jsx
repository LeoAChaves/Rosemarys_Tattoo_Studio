import * as S from "./styled";

import Input from "../../Input";
import Button from "../../Button";
import Label from "../../Label";
import { apiCliente } from "../../../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormCadastro(){
    const navigate = useNavigate()
    const [usuario, setUsuario] = useState([])

    const handleOnchange = (e) => {
        e.preventDefault()
        setUsuario({...usuario, [e.target.name]: e.target.value})
        
    }

    const cadastroCliente = async (e) => {
        e.preventDefault()
        try {
            console.log(usuario);
            const response = await apiCliente.post('/clientes', usuario)
            console.log(response)
            navigate('/login')
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <S.Container>
            <S.Form onSubmit={(e=> cadastroCliente(e))}>
            <h1>Cadastro</h1>
                <Input placeholder="Nome completo" className="inputNormal" type="text" name="nome" id="nome" onChange={(e)=> handleOnchange(e)} />
                
                <S.DivCenter>
                <div>
                    <S.DivCenter className="labelTeste">
                    <Label htmlFor="data_nascimento" nome="Data de Nascimento"></Label>
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
                
                <small>A senha deve ter no mínimo 8 dígitos</small>

                <Button type="submit" nome="Cadastrar"></Button>
            </S.Form>
        </S.Container>
    );
}

export default FormCadastro;