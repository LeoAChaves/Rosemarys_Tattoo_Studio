import * as S from "./styled.js";
import Button from "../../Button/index.jsx";
import Input from "../../Input/index.jsx";
//import { apiPortfolio } from "../../../services/api.js";
//import { useEffect, UseState, UseRef } from "react";
import iconBack from "../../../assets/iconBack.png";
import iconNext from "../../../assets/iconNext.png";

function FPortfolioMain() {
  /* const carouseul = useRef(null);
  useEffect(() => {
    fetch(apiPortfolio)
      .then((response) => response.json())
      .then(console.log);
  }, []);

  const handleBackClick = (e) => {
    e.preventDefault();
    console.log(carousel.current);
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    console.log(carousel.current);
  }; */

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
            <div className="dados">
              <ul>
                <li>ID:</li>
                <li>CLIENTE_ID:</li>
                <li>FUNCIONARIO_ID:</li>
                <li>DURAÇÃO:</li>
                <li>DESCRIÇÃO:</li>
              </ul>
              <div className="botao">
                <Button
                  className="styleForm"
                  type="submit"
                  nome="Alterar"
                  //onClick={(e) => alterarPortfolio(e)}
                ></Button>
                <Button
                  className="styleForm"
                  type="submit"
                  nome="Deletar"
                  //onClick={(e) => deletarPortfolio(e)}
                ></Button>
              </div>
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
        <div className="seta">
          <button>
            <img src={iconBack} alt="back"></img>
          </button>
          <button>
            <img src={iconNext} alt="next"></img>
          </button>
        </div>
      </S.Quadro>
    </S.Container>
  );
}
export default FPortfolioMain;
