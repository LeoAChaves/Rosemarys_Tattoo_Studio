import * as S from "./styled.js";
import Button from "../../Button/index.jsx";
import Input from "../../Input/index.jsx";
import iconBack from "../../../assets/iconBack.png";
import iconNext from "../../../assets/iconNext.png";

import { apiEstoque } from "../../../services/api.js";
import { useEffect, useState, useRef } from "react";
import Carregando from "../../Carregando";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useFuncionario from "../../Hooks/funcionario.jsx";

function FEstoqueMain() {
  const [estoque, setEstoque] = useState([]);
  const [load, setLoad] = useState(true);
  const carousel = useRef(null);
  const navigate = useNavigate();
  const [funcionario] = useFuncionario();

  useEffect(() => {
    async function getEstoque() {
      try {
        const response = await apiEstoque.get("/estoque");
        setEstoque(response.data.estoque);
        setLoad(false);
      } catch (error) {
        toast.error(error.response.data);
      }
    }
    getEstoque();
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

  async function deletarEstoque(id) {
    try {
      const response = await apiEstoque.delete(`/estoque/id/${id}`);
      toast.success(response.data.mensagem);
    } catch (error) {
      toast.error(error.response.data.mensagem);
    }
  }

  return (
    <>
      {load ? (
        <Carregando />
      ) : (
        <S.Container>
          <S.Quadro>
            <h2>Estoque</h2>
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
              <S.Cards>
                {estoque.map((estoque) => {
                  return (
                    <div className="lista dados" key={estoque.ID}>
                      <ul>
                        <li>
                          ID: <span>{estoque.ID}</span>
                        </li>
                        <li>
                          ITEM: <span>{estoque.NOME}</span>
                        </li>
                        <li>
                          PREÇO: <span>{estoque.PRECO}</span>
                        </li>
                        <li>
                          QUANTIDADE: <span>{estoque.QUANTIDADE}</span>
                        </li>
                        <li>
                          TIPO: <span>{estoque.TIPO}</span>
                        </li>
                        <div className="botao">
                          <Button
                            className="styleForm"
                            type="submit"
                            nome="Alterar"
                            onClick={() =>
                              navigate(
                                "/funcionario/estoque-update/" +
                                  funcionario.ID +
                                  "/" +
                                  estoque.ID
                              )
                            }
                          ></Button>
                          <Button
                            className="styleForm"
                            type="submit"
                            nome="Deletar"
                            onClick={() => deletarEstoque(estoque.ID)}
                          ></Button>
                        </div>
                      </ul>
                    </div>
                  );
                })}
              </S.Cards>
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
      )}
    </>
  );
}
export default FEstoqueMain;
