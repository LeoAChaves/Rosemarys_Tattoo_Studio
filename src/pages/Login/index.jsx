import { useState } from "react";

import ClienteIMG from "../../assets/cliente.svg"
import FuncionarioIMG from "../../assets/funcionario.svg"

import * as S from "./styled"

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [tipoLogin, setTipoLogin] = useState("");

  const handleTipoLogin = (e, value) => {
    e.preventDefault();
    setTipoLogin(value);
  }

  return (
    <S.Container>
      <S.Form>
        <S.ParagrafoConta>Escolha o tipo de conta</S.ParagrafoConta>

        <S.ContainerTipo>
          <S.SeletorTipo onClick={(e) => handleTipoLogin(e, "CLIENTE")} loginSelecionado={tipoLogin === "CLIENTE"}>
            <img src={ClienteIMG} alt="Icone de Cliente" />
            <p>Cliente</p>
          </S.SeletorTipo>

          <S.SeletorTipo onClick={(e) => handleTipoLogin(e, "FUNCIONARIO")} loginSelecionado={tipoLogin === "FUNCIONARIO"}>
            <img src={FuncionarioIMG} alt="Icone de Funcionário" />
            <p>Funcionário</p>
          </S.SeletorTipo>
        </S.ContainerTipo>
        
        <input placeholder="Email" type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      
        <input placeholder="Senha" type="password" name="senha" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>

        <button className="btnSubmit" type="submit">Entrar</button>

        <a>Esqueceu a senha?</a>
        
        <div className="linhaPontilhada"></div>

        <button className="btnSubmit">Criar nova conta</button>
      </S.Form>
    </S.Container>
  )
}

export default Login