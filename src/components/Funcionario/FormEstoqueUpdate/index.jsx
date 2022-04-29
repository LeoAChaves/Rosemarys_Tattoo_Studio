import * as S from "./styled.js";

import Button from "../../Button/index.jsx";
import Input from "../../Input/index.jsx";

import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { apiEstoque } from "../../../services/api.js";
import { useParams } from "react-router-dom";

function FormEstoqueUpdate() {
  const [estoque, setEstoque] = useState({});
  const { update } = useParams();

  useEffect(() => {
    async function buscaEstoque() {
      try {
        const response = await apiEstoque.get(`/estoque/id/${update}`);
        setEstoque(response.data.estoque);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
    buscaEstoque();
  }, [update]);

  const handleOnChange = (e) => {
    setEstoque({ ...estoque, [e.target.name]: e.target.value });
  };
  const handleOnChangeNumber = (e) => {
    setEstoque({
      ...estoque,
      [e.target.name]: parseInt(e.target.value),
    });
  };
  const alterarEstoque = async (e) => {
    e.preventDefault();
    try {
      const response = await apiEstoque.post(`/estoque/id/${update}`, estoque);
      toast.success(response.data.mensagem);
    } catch (error) {
      toast.error(error.response.data.mensagem);
    }
  };
  return (
    <S.Container>
      <S.Quadro>
        <h2>Estoque</h2>
        <S.Form>
          <div className="campos">
            <section>
              <label>ITEM:</label>
              <Input
                placeholder="ITEM"
                type="text"
                name="NOME"
                id="item"
                onChange={(e) => handleOnChange(e)}
                value={estoque.NOME}
              ></Input>
            </section>
            <section>
              <label>QUANTIDADE:</label>
              <Input
                placeholder="QUANTIDADE"
                type="number"
                name="QUANTIDADE"
                id="qtd"
                onChange={(e) => handleOnChangeNumber(e)}
                value={estoque.QUANTIDADE}
              ></Input>
            </section>
          </div>
          <div className="campos">
            <section>
              <label>PREÇO:</label>
              <Input
                placeholder="PRECO"
                type="number"
                name="PRECO"
                id="preco"
                onChange={(e) => handleOnChange(e)}
                value={estoque.PRECO}
              ></Input>
            </section>
            <section>
              <label>TIPO:</label>
              <Input
                placeholder="TIPO"
                type="text"
                name="TIPO"
                id="tipo"
                onChange={(e) => handleOnChange(e)}
                value={estoque.TIPO}
              ></Input>
            </section>
          </div>

          <Button
            className="styleForm"
            type="submit"
            nome="Alterar"
            onClick={(e) => alterarEstoque(e)}
          ></Button>
        </S.Form>
      </S.Quadro>
    </S.Container>
  );
}
export default FormEstoqueUpdate;
