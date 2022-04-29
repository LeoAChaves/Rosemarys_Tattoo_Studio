import * as S from "./styled.js";

import { useEffect, useState } from "react";

import Header from "../../components/Header";
import Image from "../../components/Image";
import Input from "../../components/Input";
import Button from "../../components/Button";

import * as yup from "yup";
import toast from "react-hot-toast";

import { GiDaggerRose, GiRose, GiSacrificialDagger } from "react-icons/gi";
import Carregando from "../../components/Carregando";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

import { apiPortfolio } from "../../services/api.js";
import Footer from "../../components/Footer/index.jsx";
import FooterMain from "../../components/Footer/FooterMain/index.jsx";

import { AnimationOnScroll } from "react-animation-on-scroll";

function Home({ changeTheme }) {
  const [portfolio, setPortifolio] = useState([]);
  const [contato, setContato] = useState({});
  const [load, setLoad] = useState(true);

  const handleOnchange = (e) => {
    setContato({ ...contato, [e.target.name]: e.target.value });
  };

  const pegaContato = async (e) => {
    e.preventDefault();
    if (!(await validate())) return;
  };

  async function validate() {
    let schema = yup.object().shape({
      nome: yup.string("").required("Campo de nome não pode estar vazio"),
      email: yup
        .string("Campo de email deve ser preenchido com letras")
        .email("E-mail inválido.")
        .required("Campo de email não pode estar vazio"),
      celular: yup
        .string("Campo de celular deve ser preenchido com números")
        .required("Campo de celular não pode estar vazio")
        .min(11, "O celular precisa ter 11 digitos"),
      textarea: yup
        .string("")
        .required("Campo de descrição não pode estar vazio"),
    });
    try {
      await schema.validate(contato);
      toast.success(
        "Seu comentário foi enviado para a equipe e será respondido em algumas horas em seu número de contato! ✨"
      );
      return true;
    } catch (error) {
      toast.error(error.errors);
    }
    return false;
  }

  useEffect(() => {
    async function getPortfolios() {
      try {
        const response = await apiPortfolio.get("/portfolio");
        setPortifolio(response.data.portfolios);
        setLoad(false);
      } catch (error) {
        console.log(error);
      }
    }
    getPortfolios();
  }, []);

  const ultimoTrabalho1 = portfolio[portfolio.length - 1];
  const ultimoTrabalho2 = portfolio[portfolio.length - 2];
  const ultimoTrabalho3 = portfolio[portfolio.length - 3];
  const ultimoTrabalho4 = portfolio[portfolio.length - 4];
  const ultimoTrabalho5 = portfolio[portfolio.length - 5];
  const ultimoTrabalho6 = portfolio[portfolio.length - 6];
  const ultimoTrabalho7 = portfolio[portfolio.length - 7];
  const ultimoTrabalho8 = portfolio[portfolio.length - 8];

  const style = {
    height: "70px",
  };

  return (
    <>
      {load ? (
        <Carregando />
      ) : (
        <div>
          <Header
            id="inicio"
            btnHome={{ display: "none" }}
            btnVoltar={{ display: "none" }}
            btnSair={{ display: "none" }}
            className={"btn custom-btn styleHeader"}
            style={style}
            portfolio="Galeria"
            login="Login"
            cadastro="Cadastre-se"
            changeTheme={changeTheme}
          />
          <S.Main>
            <S.BlocoUm>
              <div className="respoH">
                <S.H1 className="heroText">de artista</S.H1>
                <S.H1 className="heroText">para artista</S.H1>
              </div>
            </S.BlocoUm>

            <S.BlocoDois  className="respo">
              <S.DivCard className="respoDiv">
                <AnimationOnScroll animateIn="animate__fadeInLeft" >
                <S.DivTexto>
                
                  <S.H1>Nossa filosofia</S.H1>
                  <S.Line />
                  <S.Paragrafo>
                  Nós da Rosemary’s Tattoo Studio acreditamos na arte pela arte, de artista para artista. Nossos tatuadores, muito mais do que riscadores de pele, acreditam plenamente no trabalho e na conexão criada com os clientes. Munidos de desenhos autorais e traços certeiros, estamos aqui para proporcionar a melhor experiência possível, numa imersão artística única. 
                  </S.Paragrafo>
                  <S.IconFD>
                    <GiDaggerRose />
                  </S.IconFD>
                  
                </S.DivTexto>
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__fadeInRight"><S.DivImage className="socorro">
                
                  <Image
                    src="https://images.pexels.com/photos/1304469/pexels-photo-1304469.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="Foto de tatuagem sendo realizada"
                  />
                  <Image
                    src="https://images.pexels.com/photos/4123707/pexels-photo-4123707.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="Foto de flash de tatuagem"
                  />
                  
                </S.DivImage>
                </AnimationOnScroll>
              </S.DivCard>
              <S.Line2></S.Line2>
              
              <S.DivCard  className="respoDiv" >
                <AnimationOnScroll animateIn="animate__fadeInLeft">
                <S.DivImage className="socorro">
                
                  <Image
                    src="https://images.pexels.com/photos/4123712/pexels-photo-4123712.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="Foto de livros de tatuagem sobre a mesa"
                  />
                  <Image
                    src="https://i.pinimg.com/564x/cc/d7/4d/ccd74dcfa5b67f092eb7cbe5674586f2.jpg"
                    alt="Foto de sofá de couro tatuado"
                  />
                  
                </S.DivImage></AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInRight"><S.DivTexto>
                
                  <S.H1>Quem somos</S.H1>
                  <S.Line />
                  <S.Paragrafo>
                  Fundado em 2021 por um time que visava criar um ambiente onde a arte vive e inunda cada canto, o Rosemary’s nasceu de um sonho e por meio de muito trabalho, cheio de dedicação e carinho.
                  </S.Paragrafo>
                  <S.IconFD>
                    <GiDaggerRose />
                  </S.IconFD>
                  
                </S.DivTexto></AnimationOnScroll>
              </S.DivCard>
            </S.BlocoDois>

            <S.BlocoTres>
              <S.Time className="respoTimeTrab">
                <S.Artista>
                  <Image
                    src="https://images.pexels.com/photos/7147841/pexels-photo-7147841.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="Foto da tatuadora Rose Herculano"
                  />
                  <S.IconFD>
                    <GiRose />
                  </S.IconFD>
                  <S.H3>Rose Herculano</S.H3>
                </S.Artista>

                <S.Artista>
                  <Image
                    src="https://images.pexels.com/photos/8375273/pexels-photo-8375273.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="Foto do tatuador Maurício Castro"
                  />
                  <S.IconFD>
                    <GiRose />
                  </S.IconFD>
                  <S.H3>Maurício Castro</S.H3>
                </S.Artista>

                <S.Artista>
                  <Image
                    src="https://images.pexels.com/photos/7005665/pexels-photo-7005665.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="Foto do tatuador Pietro ALves"
                  />
                  <S.IconFD>
                    <GiRose />
                  </S.IconFD>
                  <S.H3>Pietro Alves</S.H3>
                </S.Artista>

                <S.Artista>
                  <Image
                    src="https://images.pexels.com/photos/3376116/pexels-photo-3376116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="Foto da tatuadora Amanda Santos"
                  />
                  <S.IconFD>
                    <GiRose />
                  </S.IconFD>
                  <S.H3>Amanda Santos</S.H3>
                </S.Artista>

                <S.Artista>
                  <Image
                    src="https://images.pexels.com/photos/7005726/pexels-photo-7005726.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="Foto da tatuadora Maria Andrade"
                  />
                  <S.IconFD>
                    <GiRose />
                  </S.IconFD>
                  <S.H3>Maria Andrade</S.H3>
                </S.Artista>

                <S.Artista>
                  <Image
                    src="https://images.pexels.com/photos/8521181/pexels-photo-8521181.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="Foto do tatuador Gabriel Fernandes"
                  />
                  <S.IconFD>
                    <GiRose />
                  </S.IconFD>
                  <S.H3>Gabriel Fernandes</S.H3>
                </S.Artista>

                <S.Artista>
                  <Image
                    src="https://images.pexels.com/photos/7594057/pexels-photo-7594057.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Foto da perfuradora Maria Eugenia Chaves"
                  />
                  <S.IconFD>
                    <GiSacrificialDagger />
                  </S.IconFD>
                  <S.H3>Maria Eugenia Chaves</S.H3>
                </S.Artista>

                <S.Artista>
                  <Image
                    src="https://images.pexels.com/photos/5235735/pexels-photo-5235735.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="Foto da perfuradora Fernanda Vasconcelos"
                  />
                  <S.IconFD>
                    <GiSacrificialDagger />
                  </S.IconFD>
                  <S.H3>Fernanda Vasconcelos</S.H3>
                </S.Artista>

                <S.Artista>
                  <Image
                    src="https://images.pexels.com/photos/3728826/pexels-photo-3728826.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                    alt="Foto do perfurador Lucca Rodrigues"
                  />
                  <S.IconFD>
                    <GiSacrificialDagger />
                  </S.IconFD>
                  <S.H3>Lucca Rodrigues</S.H3>
                </S.Artista>
              </S.Time>
            </S.BlocoTres>

            <S.BlocoQuatro>
              <S.IconFD>
                <GiDaggerRose />
              </S.IconFD>
              <S.H2>Últimos trabalhos</S.H2>

              <S.Trabalhos className="respoTimeTrab">
                <AnimationOnScroll animateIn="animate__backInUp" className="trabAnima">
                  <Image
                    key={ultimoTrabalho8.ID}
                    id={ultimoTrabalho8.ID}
                    alt={ultimoTrabalho8.DESCRICAO}
                    src={ultimoTrabalho8.FOTO}
                    className="fotoTrab"
                  />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__backInUp" className="trabAnima">
                  <Image
                    key={ultimoTrabalho7.ID}
                    id={ultimoTrabalho7.ID}
                    alt={ultimoTrabalho7.DESCRICAO}
                    src={ultimoTrabalho7.FOTO}
                    className="fotoTrab"
                  />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__backInUp" className="trabAnima">
                  {" "}
                  <Image
                    key={ultimoTrabalho6.ID}
                    id={ultimoTrabalho6.ID}
                    alt={ultimoTrabalho6.DESCRICAO}
                    src={ultimoTrabalho6.FOTO}
                    className="fotoTrab"
                  />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__backInUp" className="trabAnima">
                  <Image
                    key={ultimoTrabalho5.ID}
                    id={ultimoTrabalho5.ID}
                    alt={ultimoTrabalho5.DESCRICAO}
                    src={ultimoTrabalho5.FOTO}
                    className="fotoTrab"
                  />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__backInUp" className="trabAnima">
                  <Image
                    key={ultimoTrabalho4.ID}
                    id={ultimoTrabalho4.ID}
                    alt={ultimoTrabalho4.DESCRICAO}
                    src={ultimoTrabalho4.FOTO}
                    className="fotoTrab"
                  />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__backInUp" className="trabAnima">
                  <Image
                    key={ultimoTrabalho3.ID}
                    id={ultimoTrabalho3.ID}
                    alt={ultimoTrabalho3.DESCRICAO}
                    src={ultimoTrabalho3.FOTO}
                    className="fotoTrab"
                  />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__backInUp" className="trabAnima">
                  <Image
                    key={ultimoTrabalho2.ID}
                    id={ultimoTrabalho2.ID}
                    alt={ultimoTrabalho2.DESCRICAO}
                    src={ultimoTrabalho2.FOTO}
                    className="fotoTrab"
                  />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__backInUp" className="trabAnima">
                  <Image
                    key={ultimoTrabalho1.ID}
                    id={ultimoTrabalho1.ID}
                    alt={ultimoTrabalho1.DESCRICAO}
                    src={ultimoTrabalho1.FOTO}
                    className="fotoTrab"
                  />
                </AnimationOnScroll>
              </S.Trabalhos>
            </S.BlocoQuatro>

            <S.BlocoCinco>
              <div >
                <S.H2>Quer nos dizer algo?</S.H2>
                <S.Paragrafo2>
                  Manda aí pra gente se tem uma sugestão ou dúvida que logo
                  entramos em contato!
                  <S.Form onSubmit={(e) => pegaContato(e)}  className="respoCinco">
                    <div className="formContato">
                      <Input
                        className="cardForm"
                        placeholder="Nome"
                        type="text"
                        name="nome"
                        onChange={(e) => handleOnchange(e)}
                      />
                      <Input
                        className="cardForm"
                        placeholder="Email"
                        type="text"
                        name="email"
                        onChange={(e) => handleOnchange(e)}
                      />
                      <Input
                        className="cardForm"
                        placeholder="Celular"
                        type="text"
                        name="celular"
                        onChange={(e) => handleOnchange(e)}
                      />
                      <textarea
                        className="cardForm"
                        placeholder="Digite aqui sua sugestão ou dúvida"
                        type="text"
                        name="textarea"
                        onChange={(e) => handleOnchange(e)}
                      />
                      <Button
                        className="styleForm enviar"
                        onClick={(e) => pegaContato(e)}
                        nome="Enviar"
                      />
                    </div>
                  </S.Form>
                </S.Paragrafo2>
              </div>
            </S.BlocoCinco>
          </S.Main>

         <FooterMain/>
         <Footer />
         <a href="#inicio" className="linkTopo">
            <BsFillArrowUpCircleFill className="iconLinkTopo"/>
          </a>
        </div>
      )}
    </>
  );
}

export default Home;
