import * as S from "./styled.js";

import Label from "../../Label";
import Input from "../../Input";
import Button from "../../Button";
import { useState } from "react";
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

            <Label className="labelWhatsapp" htmlFor="whatsapp"></Label>
            <Input type="number" id="whatsapp" name="whatsapp" onChange={handleChange}/>

            <textarea className="textareaForm" placeholder="Ja teve alguma idéia de tatuagem ou já sabe a perfuração que vai fazer? Essa é a hora e nos contar, aproveite e fale os dias e horários disponíveis!" id="descricao" cols="60"></textarea>
            <small><IoIosArrowForward />Sua mensagem será respondida em no máximo 2 horas se a mensagem for enviada em horário de expediente.</small>

            <Button onClick={()=>salvaAgendamento()} nome="Enviar" />
        </S.Form>
    );
}

export default FormUsuario;