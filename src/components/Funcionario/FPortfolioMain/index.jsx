import * as S from "./styled.js";
import Button from "../../Button/index.jsx";
import Input from "../../Input/index.jsx";

function FPortfolioMain() {
  return (
    <S.Container>
      <S.Quadro>
        <h2>Portfólio</h2>
        <S.Form>
          <div className="busca">
            <Input
              placeholder="palavra-chave"
              type="text"
              name="search"
              id="search"
            ></Input>
            <Button type="submit" nome="Buscar"></Button>
          </div>
          <div className="lista">
            <div>
              <ul>
                <li>ID:</li>
                <li>CLIENTE_ID:</li>
                <li>FUNCIONARIO_ID:</li>
                <li>DURAÇÃO:</li>
                <li>DESCRIÇÃO:</li>
              </ul>
            </div>
            <div className="imagem">
              <label>FOTO:</label>
              <img
                src="https://i.pinimg.com/736x/cd/83/c0/cd83c0569f4bb8087c9885fbbde9b336.jpg"
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
