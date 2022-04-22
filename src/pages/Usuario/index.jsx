import Moldura from "../../assets/molduraDadosUsuario.png";

import * as S from "./styled";

function Usuario(){
    return(
        <main>
            <div>
                <h2>Bem vindo de volta nome</h2>
                <section>
                    <p>Você não tem agendamentos disponíveis</p>
                </section>
            </div>
            {/* <div>
                <form>
                    <h2>Agende sua sessão</h2>

                    <label htmlFor="servico">Selecione o serviço</label>
                    <select name="servico" id="servico">
                        <option value="piercing">Body Piercing</option>
                        <option value="tatuagem">Tatuador</option>
                    </select>

                    <label htmlFor="profissional">Selecione o Profissional</label>
                    <select name="profissional" id="profissional">
                        <option value=""></option>
                        <option value="#God">Só Deus sabe</option>
                    </select>
                    <small>Caso não saiba qual escolher, confira no <a>portfólio</a> as artes ou perfurações que prefereir</small>

                    <label htmlFor="whatsapp">Whatsapp</label>
                    <input type="number" name="whatsapp" id="whatsapp" />

                    <textarea placeholder="Ja teve alguma idéia de tatuagem ou já sabe a perfuração que vai fazer? Essa é a hora e nos contar, aproveite e fale os dias e horários disponíveis!" name="descricao" id="descricao" cols="30" rows="10"></textarea>
                    <small>Sua mensagem será respondida em no máximo 2 horas se a mensagem for enviada em horário de expediente.</small>

                    <button>Enviar</button>
                </form>
                
                <section>
                    <img src={Moldura} alt="Moldura" />
                    <h2>Seus dados</h2>
                    <p>Nome completo: </p>
                    <p>Data de nascimento: </p>
                    <p>Gênero: </p>
                    <p>CPF: </p>
                    <p>Email: </p>

                    <button>Alterar</button>
                </section>

            </div> */}
        </main>
    );
}

export default Usuario;