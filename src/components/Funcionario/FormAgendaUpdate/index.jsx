import * as S from "./styled.js";

import Button from "../../Button/index.jsx";
import Input from "../../Input/index.jsx";

import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { apiAgenda } from "../../../services/api.js";
import { useParams } from "react-router-dom";

function FormAgendaUpdate() {
  const [agendamento, setAgendamento] = useState({});
  const { update } = useParams();

  useEffect(() => {
    async function buscaAgendamento() {
      try {
        const response = await apiAgenda.get(`/agenda/id/${update}`);
        setAgendamento(response.data.agenda[0]);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
    buscaAgendamento();
  }, [update]);

  const handleOnchange = (e) => {
    setAgendamento({ ...agendamento, [e.target.name]: e.target.value });
  };
  const handleOnchangeNumber = (e) => {
    setAgendamento({
      ...agendamento,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const alterarAgendamento = async (e) => {
    e.preventDefault();
    try {
      const response = await apiAgenda.put(`/agenda/id/${update}`, agendamento);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <S.Container>
      <S.Quadro>
        <h2>Agendamento</h2>
        <S.Form>
          <div className="caixa">
            <label>CLIENTE_ID:</label>
            <Input
              placeholder="CLIENTE_ID"
              type="number"
              name="Cliente_ID"
              id="cId"
              onChange={(e) => handleOnchangeNumber(e)}
              value={agendamento.Cliente_ID}
            ></Input>
            <label>FUNCIONARIO_ID:</label>
            <Input
              placeholder="FUNCIONARIO_ID"
              type="number"
              name="Funcionario_ID"
              id="func_id"
              onChange={(e) => handleOnchangeNumber(e)}
              value={agendamento.Funcionario_ID}
            ></Input>
            <label>DATA:</label>
            <Input
              placeholder="DATA"
              type="date"
              name="Data"
              id="func_id"
              onChange={(e) => handleOnchange(e)}
              value={agendamento.Data}
            ></Input>
          </div>
          <div className="caixa">
            <label>HORA:</label>
            <Input
              placeholder="HORA"
              type="time"
              name="Hora"
              id="func_id"
              onChange={(e) => handleOnchange(e)}
              value={agendamento.Hora}
            ></Input>
            <label>SERVIÇO:</label>
            <Input
              placeholder="SERVIÇO"
              type="text"
              name="Servico"
              id="func_id"
              onChange={(e) => handleOnchange(e)}
              value={agendamento.Servico}
            ></Input>
            <label>DURAÇÃO:</label>
            <Input
              placeholder="DURAÇÃO"
              className="inputduracao"
              name="Duracao"
              id="Duracao"
              onChange={(e) => handleOnchange(e)}
              value={agendamento.Duracao}
            ></Input>

            <Button
              className="styleForm"
              type="submit"
              nome="Alterar"
              onClick={(e) => alterarAgendamento(e)}
            ></Button>
          </div>
        </S.Form>
      </S.Quadro>
    </S.Container>
  );
}
export default FormAgendaUpdate;
