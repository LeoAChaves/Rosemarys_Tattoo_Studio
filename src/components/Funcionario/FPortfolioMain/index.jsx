import * as S from "./styled.js";

import { apiPortfolio } from "../../../services/api.js";
import { useEffect, useState, useRef } from "react";
import Carregando from "../../Carregando";

import Button from "../../Button/index.jsx";
import Input from "../../Input/index.jsx";
import iconBack from "../../../assets/iconBack.png";
import iconNext from "../../../assets/iconNext.png";

function FPortfolioMain() {
  const [portfolio, setPortifolio] = useState([]);
  const [load, setLoad] = useState(true);
  const carousel = useRef(null);

  useEffect(() => {
    async function getPortfolios() {
      try {
        const response = await apiPortfolio.get("/portfolio");
        setPortifolio(response.data.portfolios);
        setLoad(false);
      } catch (error) {
        console.log(error);
      }
    }
    getPortfolios();
  }, []);

  const handleBackClick = (e) => {
    e.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };
  const handleNextClick = (e) => {
    e.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <>
      {load ? (
        <Carregando />
      ) : (
        <div>
          <S.Container>
            <S.Quadro>
              <h2>Portfólio</h2>
              <div className="busca">
                <Input
                  placeholder="palavra-chave"
                  type="text"
                  name="search"
                  id="search"
                ></Input>
                <Button type="submit" nome="Buscar"></Button>
              </div>
              <S.Form ref={carousel}>
                {portfolio.map((portfolio) => {
                  console.log(portfolio);
                  return (
                    <div className="lista" key={portfolio.ID}>
                      <div className="dados">
                        <ul>
                          <li>
                            ID: <span>{portfolio.ID}</span>
                          </li>
                          <li>
                            CLIENTE_ID: <span>{portfolio.CLIENTEID}</span>
                          </li>
                          <li>
                            FUNCIONARIO_ID:{" "}
                            <span>{portfolio.FUNCIONARIOID}</span>
                          </li>
                          <li>
                            DURAÇÃO: <span>{portfolio.DURACAO}</span>
                          </li>
                          <li>
                            DESCRIÇÃO: <span>{portfolio.DESCRICAO}</span>
                          </li>
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
                        <img src={portfolio.FOTO} alt={portfolio.DESCRICAO} />
                      </div>
                    </div>
                  );
                })}
              </S.Form>
              <div className="seta">
                <button className="btnBusca" onClick={handleBackClick}>
                  <img src={iconBack} alt="back"></img>
                </button>
                <button className="btnBusca" onClick={handleNextClick}>
                  <img src={iconNext} alt="next"></img>
                </button>
              </div>
            </S.Quadro>
          </S.Container>
        </div>
      )}
    </>
  );
}
export default FPortfolioMain;
