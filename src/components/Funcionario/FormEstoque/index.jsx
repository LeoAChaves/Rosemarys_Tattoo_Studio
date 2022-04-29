import * as S from "./styled.js";

import Button from "../../Button/index.jsx";
import Input from "../../Input/index.jsx";

import * as yup from "yup";
import toast from "react-hot-toast";

import { useState } from "react";
import { apiEstoque } from "../../../services/api.js";

function FormEstoque() {
  const [estoque, setEstoque] = useState({});

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
    if(!(await validate())) return
    try {
      await apiEstoque.post("/estoque", estoque);
    } catch (error) {
      throw new Error(error.message)
    }
  };

  async function validate(){
    let schema = yup.object().shape({
      NOME: yup.string("Campo de item deve ser preenchido com letras").required("Campo de item não pode estar vazio"),
      QUANTIDADE: yup.number("Campo de quantidade deve ser preenchido com números").required("Campo de quantidade não pode estar vazio"),
      PRECO: yup.string("Campo de preço deve ser preenchido com números decimais").required("Campo de preço não pode estar vazio"),
      TIPO: yup.string("Campo de tipo deve ser preenchido com letras").required("Campo de tipo não pode estar vazio"),
    })
    try {
        await schema.validate(estoque)
        toast.success("Estoque inserido com sucesso! 🗃️")
        return true
    } catch (error) {
        toast.error(error.errors)
    }
    return false
  }

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

          <Button
            className="styleForm"
            type="submit"
            nome="Inserir"
            onClick={(e) => inserirEstoque(e)}
          ></Button>
        </S.Form>
      </S.Quadro>
    </S.Container>
  );
}
export default FormEstoque;
