import * as S from "./styled.js";

import Button from "../../Button/index.jsx";
import Input from "../../Input/index.jsx";

import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { apiPortfolio } from "../../../services/api.js";
import { useParams } from "react-router-dom";

function FormPortfolioUpdate() {
  const [portfolio, setPortfolio] = useState({});
  const { update } = useParams();

  useEffect(() => {
    async function buscaPortfolio() {
      try {
        console.log(`Update:${update}`);
        const response = await apiPortfolio.get(
          `/portfolio/portfolioId/${update}`
        );
        setPortfolio(response.data.portfolio[0]);
      } catch (error) {
        toast.error(error.response.data.mensagem);
      }
    }
    buscaPortfolio();
  }, []);

  console.log(portfolio);

  const handleOnChange = (e) => {
    e.preventDefault();
    setPortfolio({ ...portfolio, [e.target.name]: e.target.value });
  };

  const alterarPortfolio = async (e) => {
    e.preventDefault();
    try {
      const response = await apiPortfolio.put(
        `/portfolio/portfolioId/${update}`,
        portfolio
      );
      toast.success(response.data.mensagem);
    } catch (error) {
      toast.error(error.response.data.mensagem);
    }
  };

  return (
    <S.Container>
      <S.Quadro>
        <h2>Portfólio</h2>
        <S.Form>
          <div className="caixa">
            <label>CLIENTE_ID:</label>
            <Input
              placeholder="CLIENTE_ID"
              type="number"
              name="CLIENTEID"
              id="cId"
              onChange={(e) => handleOnChange(e)}
              value={portfolio.CLIENTEID}
            ></Input>
            <label>FUNCIONARIO_ID:</label>
            <Input
              placeholder="FUNCIONARIO_ID"
              type="text"
              name="FUNCIONARIOID"
              id="func_id"
              onChange={(e) => handleOnChange(e)}
              value={portfolio.FUNCIONARIOID}
            ></Input>
            <label>DESCRIÇÃO:</label>
            <textarea
              placeholder="DESCRICAO"
              type="text"
              rows="8"
              name="DESCRICAO"
              id="descricao"
              onChange={(e) => handleOnChange(e)}
              value={portfolio.DESCRICAO}
            ></textarea>
          </div>
          <div className="caixa">
            <label>DURAÇÃO:</label>
            <Input
              placeholder="DURACAO"
              type="text"
              name="DURACAO"
              id="duracao"
              onChange={(e) => handleOnChange(e)}
              value={portfolio.DURACAO}
            ></Input>
            <label>FOTO:</label>
            <Input
              placeholder="URL"
              type="text"
              name="url"
              id="url"
              onChange={(e) => handleOnChange(e)}
            ></Input>
            <Button
              className="styleForm"
              type="submit"
              nome="Alterar"
              onClick={(e) => alterarPortfolio(e)}
            ></Button>
          </div>
        </S.Form>
      </S.Quadro>
    </S.Container>
  );
}
export default FormPortfolioUpdate;
