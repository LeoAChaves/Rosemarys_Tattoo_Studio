import * as S from "./styled.js";
import Button from "../../Button/index.jsx";
import Input from "../../Input/index.jsx";

import { apiEstoque } from "../../../services/api.js";
import { useEffect, useState } from "react";
import Carregando from "../../Carregando";
import toast from "react-hot-toast";

function FEstoqueMain() {
  const [estoque, setEstoque] = useState([]);
  const [load, setLoad] = useState(true);

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

  return (
    <>
      {load ? (
        <Carregando />
      ) : (
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
                {estoque.map((estoque) => {
                  return (
                    <div class="lista" key={estoque.ID}>
                      <ul>
                        <li>ID:{estoque.ID}</li>
                        <li>ITEM:{estoque.NOME}</li>
                        <li>PREÇO:{estoque.PRECO}</li>
                        <li>QUANTIDADE:{estoque.QUANTIDADE}</li>
                        <li>TIPO:{estoque.TIPO}</li>
                        <div className="botao">
                          <Button
                            className="styleForm"
                            type="submit"
                            nome="Alterar"
                            //onClick={(e) => alterarEstoque(e)}
                          ></Button>
                          <Button
                            className="styleForm"
                            type="submit"
                            nome="Deletar"
                            //onClick={(e) => deletarEstoque(e)}
                          ></Button>
                        </div>
                      </ul>
                    </div>
                  );
                })}
              </S.Cards>
            </S.Form>
          </S.Quadro>
        </S.Container>
      )}
    </>
  );
}
export default FEstoqueMain;
