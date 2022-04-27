import * as S from "./styled.js";

function Card({numeroAgendamento, servico, profissional, descricao}) {
    return ( 
        <S.Div>
            <div className="card">
                <h2>Agendamento Pendente {numeroAgendamento}</h2>
                <p>Serviço:</p>
                <span>{servico}</span>
                <p>Profissional:</p>
                <span>{profissional}</span>
                <p>Descrição:</p>
                <span>{descricao}</span>
            </div>
        </S.Div>
    );
}

export default Card;