import * as S from "./styled.js";

import Button from "../../Button/index.jsx";
import Input from "../../Input/index.jsx";

import * as yup from "yup";
import toast from "react-hot-toast";

import { useState } from "react";
import { apiPortfolio } from "../../../services/api.js";

function FormPortfolio() {
  const [portfolio, setPortfolio] = useState({});

  const handleOnChange = (e) => {
    e.preventDefault();
    setPortfolio({ ...portfolio, [e.target.name]: e.target.value });
  };

  const inserirPortfolio = async (e) => {
    e.preventDefault();
    if (!(await validate())) return;
    try {
      const response = await apiPortfolio.post("/portfolio", portfolio);
      console.log(response.data.mensagem);
    } catch (error) {
      console.log(error);
    }
  };

  async function validate() {
    let schema = yup.object().shape({
      clienteid: yup
        .number("Campo de clienteID deve ser preenchido com letras")
        .required("Campo de ClienteID não pode estar vazio"),
      funcionarioid: yup
        .number("Campo de FuncionarioID deve ser preenchido com letras")
        .required("Campo de FuncionarioID não pode estar vazio"),
      duracao: yup
        .number("Campo de duração deve ser preenchido com números")
        .required("Campo de duração não pode estar vazio"),
      descricao: yup
        .string("Campo de descrição deve ser preenchido com letras")
        .required("Campo de descrição não pode estar vazio"),
      /* foto: yup.string("").required("Campo de foto não pode estar vazio"), */
    });
    try {
      await schema.validate(portfolio);
      toast.success("Portfolio inserido com sucesso! 📸");
      return true;
    } catch (error) {
      toast.error(error.errors);
    }
    return false;
  }

  return (
    <S.Container>
      <S.Quadro>
        <h2>Portfólio</h2>
        <S.Form>
          <div className="caixa">
            <Input
              placeholder="CLIENTE_ID"
              type="number"
              name="clienteid"
              id="cId"
              onChange={(e) => handleOnChange(e)}
            ></Input>
            <Input
              placeholder="FUNCIONARIO_ID"
              type="number"
              name="funcionarioid"
              id="func_id"
              onChange={(e) => handleOnChange(e)}
            ></Input>
            <textarea
              placeholder="DESCRICAO"
              type="text"
              rows="8"
              name="descricao"
              id="descricao"
              onChange={(e) => handleOnChange(e)}
            ></textarea>
          </div>
          <div className="caixa">
            <Input
              placeholder="DURACAO"
              type="text"
              name="duracao"
              id="duracao"
              onChange={(e) => handleOnChange(e)}
            ></Input>
            <Input
              placeholder="URL"
              type="text"
              name="url"
              id="url"
              onChange={(e) => handleOnChange(e)}
            ></Input>
            {/* <label>FOTO:</label>
            <Input
              placeholder="FOTO"
              type="file"
              name="foto"
              id="foto"
              onChange={(e) => handleOnChange(e)}
            ></Input> */}
            <Button
              className="styleForm"
              type="submit"
              nome="Inserir"
              onClick={(e) => inserirPortfolio(e)}
            ></Button>
          </div>
        </S.Form>
      </S.Quadro>
    </S.Container>
  );
}
export default FormPortfolio;
