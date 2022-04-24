import * as S from "./styled.js";
import Button from "../../Button/index.jsx";
import Input from "../../Input/index.jsx";
import Image from "../../Image/index.jsx";

function FPortfolioMain() {
  return (
    <S.Container>
      <S.Quadro>
        <h2>Portfólio</h2>
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
          <div class="lista">
            <div>
              <ul>
                <li>ID:</li>
                <li>CLIENTE_ID:</li>
                <li>FUNCIONARIO_ID:</li>
                <li>DURAÇÃO:</li>
                <li>DESCRIÇÃO:</li>
              </ul>
            </div>
            <div class="imagem">
              <label>FOTO:</label>
              <img
                src="https://api.inkclub.tattoo/Content/images/tatuagens/1540_21_8_2021_340.png"
                alt="Tatto_Portfólio"
              />
            </div>
          </div>
        </S.Form>
      </S.Quadro>
    </S.Container>
  );
}
export default FPortfolioMain;
