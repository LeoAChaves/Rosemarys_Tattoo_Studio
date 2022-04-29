import * as S from "./styled.js";

import Label from "../../Label";
import Input from "../../Input";
import Button from "../../Button";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as yup from "yup";
import toast from 'react-hot-toast';

import { IoIosArrowForward } from "react-icons/io";

function FormUsuario(){

    const navigate = useNavigate()
    const [agendamento, setAgendamento] = useState({})

    const handleOnchange = (e)=>{
        setAgendamento({...agendamento, [e.target.name]: e.target.value})
    }

    const salvaAgendamento = async (e) => {
        e.preventDefault()
        if(!(await validate())) return
        const meusAgendamentos = localStorage.getItem('agendamentos')
   
        const agendamentosSalvos = JSON.parse(meusAgendamentos) || []
   
        agendamentosSalvos.push(agendamento)
   
        localStorage.setItem('agendamentos', JSON.stringify(agendamentosSalvos)) 
    }

    async function validate(){
        let schema = yup.object().shape({
            servico: yup.string("").required("Campo de serviço não pode estar vazio"),
            profissional: yup.string("").required("Campo de profissional não pode estar vazio"),
            whatsapp: yup.number("Campo de Whatsapp deve ser preenchido com números").required("Campo de whatsapp não pode estar vazio").min(11, 'O whatsapp precisa ter 11 digitos'),
        })
        try {
            await schema.validate(agendamento)
            toast.success("Sua solicitação foi enviada com sucesso e será respondida em no máximo 2h, confira seus agendamentos pendentes no botão de agendamentos! ✨")
            return true
        } catch (error) {
            toast.error(error.errors)
        }
        return false
    }
    
    return(
        <S.Form onSubmit={(e=> salvaAgendamento(e))}>
            <h2>Agende sua sessão</h2>

            <Label htmlFor="servico" nome="Selecione o serviço"></Label>
            <select className="selectForm" id="servico" name="servico" onChange={(e)=> handleOnchange(e)}>
                <option value=""></option>
                <option value="piercing">Body Piercing</option>
                <option value="tatuagem">Tatuador</option>
            </select>

            <Label htmlFor="profissional" nome="Selecione o Profissional"></Label>
            <select className="selectForm" id="profissional" name="profissional" onChange={(e)=> handleOnchange(e)}>
                <option value=""></option>
                <option value="Rose Herculano">Rose Herculano</option>
                <option value="Maurício Castro">Maurício Castro</option>
                <option value="Pietro Alves">Pietro Alves</option>
                <option value="Amanda Santos">Amanda Santos</option>
                <option value="Maria Andrade">Maria Andrade</option>
                <option value="Gabriel Fernandes">Gabriel Fernandes</option>
                <option value="Maria Eugenia Chaves">Maria Eugenia Chaves</option>
                <option value="Fernanda Vasconcelos">Fernanda Vasconcelos</option>
                <option value="Lucca Rodrigues">Lucca Rodrigues</option>
            </select>
            <small>Caso não saiba qual escolher, confira no <a className="linkTagA" onClick={()=>navigate(`/portfolio`)}>portfólio</a> as artes ou perfurações que prefereir</small>

            <Label className="labelWhatsapp" htmlFor="whatsapp" nome="Whatsapp"></Label>
            <Input type="number" id="whatsapp" name="whatsapp"  onChange={(e)=> handleOnchange(e)} placeholder="(XX) XXXXX-XXXX"/>

            <textarea className="textareaForm" placeholder="Ja teve alguma idéia de tatuagem ou já sabe a perfuração que vai fazer? Essa é a hora e nos contar, aproveite e fale os dias e horários disponíveis!" id="descricao" cols="60" name="descricao" onChange={(e)=> handleOnchange(e)}></textarea>
            <small><IoIosArrowForward />Sua mensagem será respondida em no máximo 2 horas se a mensagem for enviada em horário de expediente.</small>

            <Button className="styleForm enviar" onClick={(e)=>salvaAgendamento(e)} nome="Enviar" />
        </S.Form>
    );
}

export default FormUsuario;