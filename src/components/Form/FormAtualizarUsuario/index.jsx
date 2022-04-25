import * as S from "./styled.js";

import Input from "../../Input";
import Button from "../../Button";
import Label from "../../Label";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiCliente } from "../../../services/api.js";

function AtualizarUsuario() {

  
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
        try {
           const response = await apiCliente.patch(`/cliente/${id}`, usuario)
           console.log(response);
        } catch (error) {
            console.log(error.response);
        }

     
    }
    return (
        <S.Form>
            <h1>Seus Dados</h1>
            <div>
                <Input className="inputNormal" placeholder="Nome completo" type="text" nome="nome" name="nome" onChange={(e)=> handleChange(e)} value={usuario.nome}/>
                <Input className="inputNormal" placeholder="Email" type="email" name="email" onChange={(e)=> handleChange(e)} value={usuario.email}/>
            </div>
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
            <div>
                <Input className="inputNormal" placeholder="CPF" type="text" name="cpf"  onChange={(e)=> handleChange(e)}  value={usuario.cpf}/>
                <Input className="inputNormal" placeholder="Senha" type="password" name="senha"  onChange={(e)=> handleChange(e)} value={usuario.senha}/>
            </div>
            <div>
                <Button className="alterar" nome="Alterar" onClick={(e)=> atualizarDados(e)}/>
                <Button className="deletar" nome="Apagar conta"/>
            </div>
        </S.Form>
    );
}

export default AtualizarUsuario;