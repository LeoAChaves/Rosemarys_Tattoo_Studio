import Header from "../../components/Header";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import * as S from "./styled.js";

function AgendamentoPendente({changeTheme}) {
    const style = {
        height: "70px",
    }


    const [agendamentos, setAgendamentos] = useState([])

    useEffect(()=>{
        const agendamentosSalvos = localStorage.getItem('agendamentos')
        const agendamentosParse = JSON.parse(agendamentosSalvos) || []
        
        setAgendamentos(agendamentosParse);
       
    }, [])

    const excluiAgendamento= (indexAgendamento)=>{
        const agendamentoRemovido = agendamentos.filter((e, index)=>{
              return index !== indexAgendamento
         })
         setAgendamentos(agendamentoRemovido)
         localStorage.setItem('agendamentos', JSON.stringify(agendamentoRemovido))
  
     }
    return (
        <>
            <Header btnHome={{display: "none"}} btnVoltar={{display: "none"}} btnPortfolio={{display: "none"}} btnLogin={{display: "none"}} className={"btn custom-btn styleHeader"} style={style} div={{display:"none"}} inicialUsuario="Página Inicial" sair="Sair" changeTheme={changeTheme}/>
            <S.Main> 
                <div className="grid">
                    {agendamentos.length === 0 ? <h2 className="avisoAgendamento">Voce nao tem agendamentos</h2>
                    :
                    agendamentos.map((agendamentos, index)=> <Card numeroAgendamento={index+1} servico={agendamentos.servico} profissional={agendamentos.profissional} descricao={agendamentos.descricao} onClick={()=> excluiAgendamento(index)}/>)}
                </div>
            </S.Main>
            <Footer />
        </>
    );
}

export default AgendamentoPendente;