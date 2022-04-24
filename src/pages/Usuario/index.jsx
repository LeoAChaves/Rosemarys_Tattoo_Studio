import Moldura from "../../assets/molduraDadosUsuario.png";

import Header from "../../components/Header";
import FormUsuario from "../../components/Form/FormUsuario";
import Paragrafo from "../../components/Paragrafo";
import Subtitulo from "../../components/Subtitulo";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

import * as S from "./styled";

function Usuario(){
    const style = {
        height: "70px",
    }

    return(
        <>
            <Header style={style} div={{display:"none"}} portfolio="Portifólio" sair="Sair"></Header>
            <S.Main>
                <S.BlocoUm>
                    <Subtitulo texto="Bem vindo de volta {nome}" nome=""></Subtitulo>
                    <section>
                        <p>Você não tem agendamentos disponíveis</p>
                    </section>
                </S.BlocoUm>
                <S.BlocoDois>
                    <FormUsuario></FormUsuario>
                    <section>
                        <img src={Moldura} alt="Moldura" />
                        <div>
                            <h2>Seus dados</h2>
                            <Paragrafo texto="Nome completo:" atributo=""></Paragrafo>
                            <Paragrafo texto="Data de nascimento:" atributo=""></Paragrafo>
                            <Paragrafo texto="Gênero:" atributo=""></Paragrafo>
                            <Paragrafo texto="CPF:" atributo=""></Paragrafo>
                            <Paragrafo texto="Email:" atributo=""></Paragrafo>
                
                            <Button nome="Alterar"></Button>
                        </div>
                    </section>

                </S.BlocoDois>
            </S.Main>
            <Footer></Footer>
        </>
    );
}

export default Usuario;