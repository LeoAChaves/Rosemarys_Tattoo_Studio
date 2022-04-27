import * as S from "./styled.js";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Button from "../../Button/index.jsx";

function FAgendaMain() {
  return (
    <S.Container>
      <S.Quadro>
        <h2>Agenda</h2>
        <S.Form>
          {/* <div class="caixa">
            <Calendar />
          </div> */}
          <div class="lista">
            <ul>
              <li>ID:</li>
              <li>CLIENTE_ID:</li>
              <li>FUNCIONARIO_ID:</li>
              <li>DATA:</li>
              <li>HORA:</li>
              <li>SERVIÇO:</li>
              <li>DURAÇÃO:</li>
              <div className="botao">
                <Button
                  className="styleForm"
                  type="submit"
                  nome="Alterar"
                  //onClick={(e) => alterarEstoque(e)}
                ></Button>
                <Button
                  className="styleForm"
                  type="submit"
                  nome="Deletar"
                  //onClick={(e) => deletarEstoque(e)}
                ></Button>
              </div>
            </ul>
          </div>
        </S.Form>
      </S.Quadro>
    </S.Container>
  );
}
export default FAgendaMain;
