import * as S from "./styled.js";

import Label from "../../Label";
import Input from "../../Input";
import Button from "../../Button";
import { useState } from "react";

import * as yup from "yup";
import toast from 'react-hot-toast';

import { IoIosArrowForward } from "react-icons/io";

function FormUsuario(){

    const [agendamento, setAgendamento] = useState([])


    const handleChange = (e)=>{
        setAgendamento({...agendamento, [e.target.name]: e.target.value})
    }

    const salvaAgendamento = ()=>{
        
        const meusAgendamentos = localStorage.getItem('agendamentos')
   
        const agendamentosSalvos = JSON.parse(meusAgendamentos) || []
   
        agendamentosSalvos.push(agendamento)
   
        localStorage.setItem('agendamentos', JSON.stringify(agendamentosSalvos)) 
    }

    // async function validate(){
    //     let schema = yup.object().shape({
    //         servico: yup.string("").required("Campo de gênero não pode estar vazio"),
    //         profissional: yup.string("Campo de nome completo deve ser preenchido com letras").required("Campo de nome completo não pode estar vazio"),
    //         whatsapp: yup.string("Campo de Whatsapp deve ser preenchido com números").required("Campo de whatsapp não pode estar vazio").min(11, 'O whatsapp precisa ter 11 digitos').max(11,'O whatsapp precisa ter 11 digitos'),
    //     })
    //     try {
    //         await schema.validate(agendamento)
    //         return true
    //     } catch (error) {
    //         toast.error(error.errors)
    //     }
    //     return false
    // }
    
    return(
        <S.Form>
            <h2>Agende sua sessão</h2>

            <Label htmlFor="servico" nome="Selecione o serviço"></Label>
            <select className="selectForm" id="servico" name="servico" onChange={handleChange}>
                <option value=""></option>
                <option value="piercing">Body Piercing</option>
                <option value="tatuagem">Tatuador</option>
            </select>

            <Label htmlFor="profissional" nome="Selecione o Profissional"></Label>
            <select className="selectForm" id="profissional" name="profissional" onChange={handleChange}>
                <option value=""></option>
                <option value="#God">Só Deus sabe</option>
            </select>
            <small>Caso não saiba qual escolher, confira no <a>portfólio</a> as artes ou perfurações que prefereir</small>

            <Label className="labelWhatsapp" htmlFor="whatsapp" nome="Whatsapp"></Label>
            <Input type="number" id="whatsapp" name="whatsapp" placeholder="(XX) XXXXX-XXXX" onChange={handleChange}/>

            <textarea className="textareaForm" placeholder="Ja teve alguma idéia de tatuagem ou já sabe a perfuração que vai fazer? Essa é a hora e nos contar, aproveite e fale os dias e horários disponíveis!" id="descricao" cols="60"></textarea>
            <small><IoIosArrowForward />Sua mensagem será respondida em no máximo 2 horas se a mensagem for enviada em horário de expediente.</small>

            <Button className="styleForm enviar" onClick={()=>salvaAgendamento()} nome="Enviar" />
        </S.Form>
    );
}

export default FormUsuario;