import * as S from "./styled.js";
import Button from "../../Button/index.jsx";
import Input from "../../Input/index.jsx";

function FEstoqueMain() {
  return (
    <S.Container>
      <S.Quadro>
        <h2>Estoque</h2>
        <S.Form>
          <div class="busca">
            <Input
              placeholder="palavra-chave"
              type="text"
              name="search"
              id="search"
            ></Input>
            <Button type="submit" nome="Buscar"></Button>
          </div>
          <S.Cards>
            <div class="lista">
              <ul>
                <li>ID:</li>
                <li>ITEM:</li>
                <li>PREÇO:</li>
                <li>QUANTIDADE:</li>
                <li>TIPO:</li>
              </ul>
            </div>

            <div class="lista">
              <ul>
                <li>ID:</li>
                <li>ITEM:</li>
                <li>PREÇO:</li>
                <li>QUANTIDADE:</li>
                <li>TIPO:</li>
              </ul>
            </div>

            <div class="lista">
              <ul>
                <li>ID:</li>
                <li>ITEM:</li>
                <li>PREÇO:</li>
                <li>QUANTIDADE:</li>
                <li>TIPO:</li>
              </ul>
            </div>
          </S.Cards>
        </S.Form>
      </S.Quadro>
    </S.Container>
  );
}
export default FEstoqueMain;
