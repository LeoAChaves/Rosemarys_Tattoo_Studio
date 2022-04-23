import * as S from "./styled.js";
import Button from "../../Button/index.jsx";
import Input from "../../Input/index.jsx";

function FormEstoque() {
  return (
    <S.Container>
      <S.Quadro>
        <h2>Estoque</h2>
        <S.Form>
          <div>
            <Input placeholder="ITEM" type="text" name="item" id="item"></Input>
            <Input
              placeholder="QUANTIDADE"
              type="number"
              name="qtd"
              id="qtd"
            ></Input>
          </div>
          <div>
            <Input
              placeholder="PRECO"
              type="number"
              name="preco"
              id="preco"
            ></Input>
            <Input placeholder="TIPO" type="text" name="tipo" id="tipo"></Input>
          </div>
          <Button type="submit" nome="INSERIR"></Button>
        </S.Form>
      </S.Quadro>
    </S.Container>
  );
}
export default FormEstoque;
