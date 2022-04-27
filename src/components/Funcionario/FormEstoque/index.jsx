import * as S from "./styled.js";

import Button from "../../Button/index.jsx";
import Input from "../../Input/index.jsx";

import toast from "react-hot-toast";
import { useState } from "react";
import { apiEstoque } from "../../../services/api.js";

function FormEstoque() {
  const [estoque, setEstoque] = useState([]);

  const handleOnChange = (e) => {
    e.preventDefault();
    setEstoque({ ...estoque, [e.target.name]: e.target.value });
  };
  const handleOnChangeNumber = (e) => {
    e.preventDefault();
    setEstoque({
      ...estoque,
      [e.target.name]: parseInt(e.target.value),
    });
  };
  const inserirEstoque = async (e) => {
    e.preventDefault();
    try {
      const response = await apiEstoque.post("/estoque", estoque);
      console.log(response.data.mensagem);
      toast.success(response.data.mensagem);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.mensagem);
    }
  };
  return (
    <S.Container>
      <S.Quadro>
        <h2>Estoque</h2>
        <S.Form>
          <div>
            <Input
              placeholder="ITEM"
              type="text"
              name="NOME"
              id="item"
              onChange={(e) => handleOnChange(e)}
            ></Input>
            <Input
              placeholder="QUANTIDADE"
              type="number"
              name="QUANTIDADE"
              id="qtd"
              onChange={(e) => handleOnChangeNumber(e)}
            ></Input>
          </div>
          <div>
            <Input
              placeholder="PRECO"
              type="number"
              name="PRECO"
              id="preco"
              onChange={(e) => handleOnChange(e)}
            ></Input>
            <Input
              placeholder="TIPO"
              type="text"
              name="TIPO"
              id="tipo"
              onChange={(e) => handleOnChange(e)}
            ></Input>
          </div>
          <div className="botao">
            <Button
              className="styleForm"
              type="submit"
              nome="Inserir"
              onClick={(e) => inserirEstoque(e)}
            ></Button>
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
        </S.Form>
      </S.Quadro>
    </S.Container>
  );
}
export default FormEstoque;
