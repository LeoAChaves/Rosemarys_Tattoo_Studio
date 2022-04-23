import * as S from "./styled.js";
import Button from "../../Button/index.jsx";
import Input from "../../Input/index.jsx";

function FormPortfolio() {
  return (
    <S.Container>
      <S.Quadro>
        <h2>Portfolio</h2>
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
            <textarea
              placeholder="DESCRICAO"
              type="text"
              rows="8"
              name="descricao"
              id="descricao"
            ></textarea>
          </div>
          <div class="caixa">
            <Input
              placeholder="DURACAO"
              type="text"
              name="duracao"
              id="duracao"
            ></Input>
            <label>FOTO:</label>
            <Input placeholder="FOTO" type="file" name="foto" id="foto"></Input>
            <Button type="submit" nome="INSERIR"></Button>
          </div>
        </S.Form>
      </S.Quadro>
    </S.Container>
  );
}
export default FormPortfolio;
