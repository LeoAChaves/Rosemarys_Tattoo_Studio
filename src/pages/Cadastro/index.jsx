import * as S from "./styled";

function Cadastro(){
    return(
    <S.Container>
      <S.Form>
      <h1>Cadastro</h1>
        <input placeholder="Nome completo" className="inputNormal" type="text" name="nome" id="nome" />
        
        <S.DivCenter>
          <div>
            <S.DivCenter className="labelTeste">
              <label htmlFor="dtNascimento">Data de Nascimento</label>
            </S.DivCenter>

            <input className="inputDtNasc" type="date" name="dtNascimento" id="dtNascimento" />
          </div>
          
          <div>
            <label htmlFor="genero">Gênero</label>
            <select className="inputGenero" name="genero" id="genero">
              <option value="F">Feminino</option>
              <option value="Masculino">Masculino</option>
              <option value="Outros">Outros</option>
            </select>
          </div>
        </S.DivCenter>

        <input placeholder="CPF" className="inputNormal" type="text" name="cpf" id="cpf" />

        <input placeholder="Email" className="inputNormal" type="email" name="email" id="email" />

        <S.DivCenter>
          <div className="senha">
            <input placeholder="Senha" className="inputSenha" type="password" name="senha" id="senha" />
          </div>

          <div>
            <input placeholder="Confirmar senha" className="inputSenha" type="password" name="confSenha" id="confSenha" />
          </div>
        </S.DivCenter>
        
        <small>A senha deve ter no mínimo 8 dígitos</small>

        <button type="submit">Cadastrar</button>
      </S.Form>
    </S.Container>
    );
}

export default Cadastro;