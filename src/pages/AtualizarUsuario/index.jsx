import * as S from "./styled.js";

import Header from "../../components/Header";
import FormAtualizarUsuario from "../../components/Form/FormAtualizarUsuario";
import Footer from "../../components/Footer";

function AtualizarUsuario({changeTheme}){
    const style = {
        height: "70px",
    }

    return(
        <>
            <Header btnHome={{display: "none"}} btnPortfolio={{display: "none"}} btnLogin={{display: "none"}} className={"btn custom-btn styleHeader"} style={style} div={{display:"none"}} voltar="Voltar" sair="Sair" changeTheme={changeTheme}  />
            <S.Main>
                <FormAtualizarUsuario />
            </S.Main>
            <Footer />
        </>
    );
}

export default AtualizarUsuario;