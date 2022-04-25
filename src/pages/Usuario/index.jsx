import Moldura from "../../assets/molduraDadosUsuario.png";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import FormUsuario from "../../components/Form/FormUsuario";
import Paragrafo from "../../components/Paragrafo";
import Subtitulo from "../../components/Subtitulo";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

import * as S from "./styled";
import { apiCliente } from "../../services/api";

function Usuario({changeTheme}){
    const style = {
        height: "70px",
    }

    const {id} = useParams()
    const navigate = useNavigate()
    const [usuario, setUsuario] = useState({})
    const [load, setLoad] = useState(true)
    useEffect(() => {
        async function buscaUsuario(){
            try {
              const response = await apiCliente.get(`/cliente/${id}`)
                setLoad(false)
                setUsuario(response.data.cliente)
            } catch (error) {
                console.log(error);
            }
        }
        buscaUsuario()
    }, []);

    const dataCorreta= (data)=>{
        const dataArr = data.split('-')
        const ano = dataArr.shift()
        const dia = dataArr.pop()
       
        return `${dia}-${dataArr.pop()}-${ano}`
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
                            <Paragrafo texto="Nome completo:" atributo={usuario.nome} />
                            <Paragrafo texto="Data de nascimento:" atributo={load === false ? dataCorreta(usuario.data_nascimento) : ''}/>
                            <Paragrafo texto="Gênero:" atributo={usuario.genero} />
                            <Paragrafo texto="CPF:" atributo={usuario.cpf} />
                            <Paragrafo texto="Email:" atributo={usuario.email} />
                
                            <Button className="btnAlterar" nome="Alterar" onClick={()=>navigate(`/atualizarUsuario/${id}`)}/>
                        </div>
                    </section>

                </S.BlocoDois>
            </S.Main>
            <Footer />
        </>
    );
}

export default Usuario;