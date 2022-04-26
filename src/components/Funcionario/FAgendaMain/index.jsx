import * as S from "./styled.js";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function FAgendaMain() {
  return (
    <S.Container>
      <S.Quadro>
        <h2>Agenda</h2>
        <S.Form>
          <div class="caixa">
            <Calendar />
          </div>
          <div class="lista">
            <div>
              <p>Agendamento 1</p>
            </div>
            <div>
              <p>Agendamento 2</p>
            </div>
            <div>
              <p>Agendamento 3</p>
            </div>
            <div>
              <p>Agendamento 4</p>
            </div>
          </div>
        </S.Form>
      </S.Quadro>
    </S.Container>
  );
}
export default FAgendaMain;
