import Button from "../Button/index.jsx";
import * as S from "./styled.js";

function Card({numeroAgendamento, servico, profissional, descricao, onClick}) {
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
                <Button nome="Apagar agendamento" onClick={onClick}/>
            </div>
        </S.Div>
    );
}

export default Card;