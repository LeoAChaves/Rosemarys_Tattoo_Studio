import Moldura from "../../assets/molduraDadosUsuario.png";

import Header from "../../components/Header";
import FormUsuario from "../../components/Form/FormUsuario";
import Paragrafo from "../../components/Paragrafo";
import Subtitulo from "../../components/Subtitulo";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

import * as S from "./styled";

function Usuario({changeTheme}){
    const style = {
        height: "70px",
    }

    

    return(
        <>
            <Header style={style} div={{display:"none"}} portfolio="Portifólio" sair="Sair" changeTheme={changeTheme} />
            <S.Main>
                <S.BlocoUm>
                    <Subtitulo texto="Bem vindo de volta {nome}" nome="" />
                    <section>
                        <p>Você não tem agendamentos disponíveis</p>
                    </section>
                </S.BlocoUm>
                <S.BlocoDois>
                    <FormUsuario />
                    <section>
                        <img src={Moldura} alt="Moldura" />
                        <div>
                            <h2>Seus dados</h2>
                            <Paragrafo texto="Nome completo:" atributo="" />
                            <Paragrafo texto="Data de nascimento:" atributo="" />
                            <Paragrafo texto="Gênero:" atributo="" />
                            <Paragrafo texto="CPF:" atributo="" />
                            <Paragrafo texto="Email:" atributo="" />
                
                            <Button className="btnAlterar" nome="Alterar" />
                        </div>
                    </section>

                </S.BlocoDois>
            </S.Main>
            <Footer />
        </>
    );
}

export default Usuario;