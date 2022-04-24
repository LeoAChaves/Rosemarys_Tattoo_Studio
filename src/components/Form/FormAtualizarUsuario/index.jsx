import * as S from "./styled.js";

import Input from "../../Input";
import Button from "../../Button";
import Label from "../../Label";

function AtualizarUsuario() {
    return (
        <S.Form>
            <h1>Seus Dados</h1>
            <div>
                <Input className="inputNormal" placeholder="Nome completo" type="text"></Input>
                <Input className="inputNormal" placeholder="Email" type="email"></Input>
            </div>
            <S.DivCenter>
                <div className="labelInput">
                    <Label htmlFor="dtNascimento" nome="Data de Nascimento" />
                    <Input className="inputDtNasc" type="date" name="data_nascimento" id="dtNascimento" disabled={true} />
                </div>
                <div className="labelInput">
                    <Label htmlFor="genero" nome="Gênero"></Label>
                    <select className="inputGenero" name="genero" id="genero"> 
                        <option value=""></option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Outros">Outros</option>
                    </select>
                </div>
            </S.DivCenter>
            <div>
                <Input className="inputNormal" placeholder="CPF" type="text"></Input>
                <Input className="inputNormal" placeholder="Senha" type="senha"></Input>
            </div>
            <div>
                <Button className="alterar" nome="Alterar"></Button>
                <Button className="deletar" nome="Apagar conta"></Button>
            </div>
        </S.Form>
    );
}

export default AtualizarUsuario;