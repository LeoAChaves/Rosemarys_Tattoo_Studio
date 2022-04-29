import * as S from "./styled.js";

import Button from "../../Button/index.jsx";
import Input from "../../Input/index.jsx";

import * as yup from "yup";
import toast from "react-hot-toast";

import { useState } from "react";
import { apiAgenda } from "../../../services/api.js";

function FormAgenda({ botao }) {
  const [agendamento, setAgendamento] = useState({});

  const handleOnchange = (e) => {
    e.preventDefault();
    setAgendamento({ ...agendamento, [e.target.name]: e.target.value });
  };
  const handleOnchangeNumber = (e) => {
    e.preventDefault();
    setAgendamento({
      ...agendamento,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const inserirAgendamento = async (e) => {
    e.preventDefault();
    if(!(await validate())) return
    try {
      const response = await apiAgenda.post("/agenda", agendamento);
      
    
      console.log(response.data.message);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  async function validate(){
    let schema = yup.object().shape({
      Cliente_ID: yup.number("Campo de clienteID deve ser preenchido com letras").required("Campo de ClienteID não pode estar vazio"),
      Funcionario_ID: yup.number("Campo de FuncionarioID deve ser preenchido com letras").required("Campo de FuncionarioID não pode estar vazio"),
      Data: yup.date("Campo só aceita data").required("Campo de data não pode estar vazio"),
      Hora: yup.string("").required("Campo de hora não pode estar vazio"),
      Servico: yup.string("Campo de serviço deve ser preenchido com letras").required("Campo de serviço não pode estar vazio"),
      Duracao: yup.number("Campo de duração deve ser preenchido com números").required("Campo de duração não pode estar vazio"),
    })
    try {
      await schema.validate(agendamento)
      toast.success("Agendamento inserido com sucesso! 🗓️")
      return true
    } catch (error) {
      toast.error(error.errors)
    }
    return false
  }

  return (
    <S.Container>
      <S.Quadro>
        <h2>Agendamento</h2>
        <S.Form>
          <div className="caixa">
            <Input
              placeholder="CLIENTE_ID"
              type="number"
              name="Cliente_ID"
              id="cId"
              onChange={(e) => handleOnchangeNumber(e)}
            ></Input>
            <Input
              placeholder="FUNCIONARIO_ID"
              type="number"
              name="Funcionario_ID"
              id="func_id"
              onChange={(e) => handleOnchangeNumber(e)}
            ></Input>
            <Input
              placeholder="DATA"
              type="date"
              name="Data"
              id="func_id"
              onChange={(e) => handleOnchange(e)}
            ></Input>
          </div>
          <div className="caixa">
            <Input
              placeholder="HORA"
              type="time"
              name="Hora"
              id="func_id"
              onChange={(e) => handleOnchange(e)}
            ></Input>
            <Input
              placeholder="SERVIÇO"
              type="text"
              name="Servico"
              id="func_id"
              onChange={(e) => handleOnchange(e)}
            ></Input>

            <div>
              <Input
                placeholder="DURAÇÃO"
                className="inputduracao"
                name="Duracao"
                id="Duracao"
                onChange={(e) => handleOnchange(e)}
              ></Input>
            </div>
            <Button
              className="styleForm"
              type="submit"
              nome="Inserir"
              onClick={(e) => inserirAgendamento(e)}
            ></Button>
          </div>
        </S.Form>
      </S.Quadro>
    </S.Container>
  );
}
export default FormAgenda;
