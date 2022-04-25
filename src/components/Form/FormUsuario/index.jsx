import * as S from "./styled.js";

import Label from "../../Label";
import Input from "../../Input";
import Button from "../../Button";

import toast from 'react-hot-toast';

import { IoIosArrowForward } from "react-icons/io";

function FormUsuario(){
    const notify = (e) => {
        e.preventDefault()
        toast.success('Successfully toasted!')    
    }
    
    return(
        <S.Form>
            <h2>Agende sua sessão</h2>

            <Label htmlFor="servico" nome="Selecione o serviço"></Label>
            <select className="selectForm" id="servico">
                <option value=""></option>
                <option value="piercing">Body Piercing</option>
                <option value="tatuagem">Tatuador</option>
            </select>

            <Label htmlFor="profissional" nome="Selecione o Profissional"></Label>
            <select className="selectForm" id="profissional">
                <option value=""></option>
                <option value="#God">Só Deus sabe</option>
            </select>
            <small>Caso não saiba qual escolher, confira no <a>portfólio</a> as artes ou perfurações que prefereir</small>

            <Label className="labelWhatsapp" htmlFor="whatsapp"></Label>
            <Input type="number" id="whatsapp" />

            <textarea className="textareaForm" placeholder="Ja teve alguma idéia de tatuagem ou já sabe a perfuração que vai fazer? Essa é a hora e nos contar, aproveite e fale os dias e horários disponíveis!" id="descricao" cols="60"></textarea>
            <small><IoIosArrowForward />Sua mensagem será respondida em no máximo 2 horas se a mensagem for enviada em horário de expediente.</small>

            <Button onClick={(e) => notify(e)} nome="Enviar" />
        </S.Form>
    );
}

export default FormUsuario;