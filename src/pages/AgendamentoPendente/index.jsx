import Header from "../../components/Header";
import Card from "../../components/Card";
import Footer from "../../components/Footer";

import * as S from "./styled.js";

function AgendamentoPendente({changeTheme}) {
    const style = {
        height: "70px",
    }

    return (
        <>
            <Header btnHome={{display: "none"}} btnVoltar={{display: "none"}} btnPortfolio={{display: "none"}} btnLogin={{display: "none"}} className={"btn custom-btn styleHeader"} style={style} div={{display:"none"}} inicialUsuario="Página Inicial" sair="Sair" changeTheme={changeTheme}/>
            <S.Main> 
                <div className="grid">
                    <Card numeroAgendamento="1" servico="Tatuador" profissional="Pietro Alves" descricao="Batas cozidas são as melhores"/>
                </div>
            </S.Main>
            <Footer />
        </>
    );
}

export default AgendamentoPendente;