import * as S from "./styled.js";
import Button from "../../Button/index.jsx";
import Input from "../../Input/index.jsx";

function FormAgenda() {
  return (
    <S.Container>
      <S.Quadro>
        <h2>Agendamento</h2>
        <S.Form>
          <div class="caixa">
            <Input
              placeholder="CLIENTE_ID"
              type="number"
              name="cliente_id"
              id="cId"
            ></Input>
            <Input
              placeholder="FUNCIONARIO_ID"
              type="number"
              name="func_id"
              id="func_id"
            ></Input>
            <Input
              placeholder="DATA"
              type="date"
              name="func_id"
              id="func_id"
            ></Input>
          </div>
          <div class="caixa">
            <Input
              placeholder="HORA"
              type="time"
              name="func_id"
              id="func_id"
            ></Input>
            <Input
              placeholder="SERVIÇO"
              type="text"
              name="func_id"
              id="func_id"
            ></Input>
            <Input
              placeholder="DURACAO"
              type="text"
              name="duracao"
              id="duracao"
            ></Input>
            <Button type="submit" nome="INSERIR"></Button>
          </div>
        </S.Form>
      </S.Quadro>
    </S.Container>
  );
}
export default FormAgenda;
