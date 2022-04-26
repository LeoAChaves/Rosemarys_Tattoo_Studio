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
            <Header style={style} div={{display:"none"}} portfolio="Portifólio" sair="Sair" changeTheme={changeTheme}  />
            <S.Main>
                <FormAtualizarUsuario />
            </S.Main>
            <Footer />
        </>
    );
}

export default AtualizarUsuario;