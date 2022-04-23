import * as S from "./styled";

import Input from "../../Input";
import Button from "../../Button";
import Label from "../../Label";
import Select from "../../Select";
import Option from "../../Select/Option";

function FormCadastro(){
    return(
        <S.Container>
            <S.Form>
            <h1>Cadastro</h1>
                <Input placeholder="Nome completo" className="inputNormal" type="text" name="nome" id="nome" />
                
                <S.DivCenter>
                <div>
                    <S.DivCenter className="labelTeste">
                    <Label htmlFor="dtNascimento" nome="Data de Nascimento"></Label>
                    </S.DivCenter>

                    <Input className="inputDtNasc" type="date" name="dtNascimento" id="dtNascimento" />
                </div>
                
                <div>
                    <Label htmlFor="genero" nome="Gênero"></Label>
                    <Select className="inputGenero" name="genero" id="genero">
                        <Option value=""></Option>
                        <Option value="Feminino">Feminino</Option>
                        <Option value="Masculino">Masculino</Option>
                        <Option value="Outros">Outros</Option>
                    </Select>
                </div>
                </S.DivCenter>

                <Input placeholder="CPF" className="inputNormal" type="text" name="cpf" id="cpf" />

                <Input placeholder="Email" className="inputNormal" type="email" name="email" id="email" />

                <S.DivCenter>
                <div className="senha">
                    <Input placeholder="Senha" className="inputSenha" type="password" name="senha" id="senha" />
                </div>

                <div>
                    <Input placeholder="Confirmar senha" className="inputSenha" type="password" name="confSenha" id="confSenha" />
                </div>
                </S.DivCenter>
                
                <small>A senha deve ter no mínimo 8 dígitos</small>

                <Button type="submit" nome="Cadastrar"></Button>
            </S.Form>
        </S.Container>
    );
}

export default FormCadastro;