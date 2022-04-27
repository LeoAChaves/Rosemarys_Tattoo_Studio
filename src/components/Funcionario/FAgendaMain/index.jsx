import * as S from "./styled.js";
import "react-calendar/dist/Calendar.css";
import Button from "../../Button/index.jsx";
import Input from "../../Input/index.jsx";

import { apiAgenda } from "../../../services/api.js";
import { useEffect, useState } from "react";
import Carregando from "../../Carregando";
import toast from "react-hot-toast";

function FAgendaMain() {
  const [agenda, setAgenda] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function getagenda() {
      try {
        const response = await apiAgenda.get("/agenda");
        setAgenda(response.data.agenda);
        setLoad(false);
      } catch (error) {
        toast.error(error.response.data);
      }
    }
    getagenda();
  }, []);

  async function deletarAgendamento(id) {
    try {
      const response = await apiAgenda.delete(`/agenda/id/${id}`);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  return (
    <>
      {load ? (
        <Carregando />
      ) : (
        <S.Container>
          <S.Quadro>
            <h2>Agenda</h2>
            <div class="busca">
              <Input
                placeholder="palavra-chave"
                type="text"
                name="search"
                id="search"
              ></Input>
              <Button type="submit" nome="Buscar"></Button>
            </div>
            <S.Form>
              {/* <div class="caixa">
            <Calendar />
          </div> */}
              {agenda.map((agendamento) => {
                return (
                  <div class="lista" key={agendamento.ID}>
                    <ul>
                      <li>ID: {agendamento.ID}</li>
                      <li>CLIENTE_ID: {agendamento.Cliente_ID}</li>
                      <li>FUNCIONARIO_ID: {agendamento.Funcionario_ID}</li>
                      <li>DATA: {agendamento.Data}</li>
                      <li>HORA: {agendamento.Hora}</li>
                      <li>SERVIÇO: {agendamento.Servico}</li>
                      <li>DURAÇÃO: {agendamento.Duracao}</li>
                      <div className="botao">
                        <Button
                          className="styleForm"
                          type="submit"
                          nome="Alterar"
                          //onClick={(e) => alteraragenda(e)}
                        ></Button>
                        <Button
                          className="styleForm"
                          type="submit"
                          nome="Deletar"
                          onClick={(e) => {
                            deletarAgendamento(agendamento.ID);
                          }}
                        ></Button>
                      </div>
                    </ul>
                  </div>
                );
              })}
            </S.Form>
          </S.Quadro>
        </S.Container>
      )}
    </>
  );
}
export default FAgendaMain;
