import * as S from "./styled.js";

import Header from "../../components/Header";
import Paragrafo from "../../components/Paragrafo";
import Subtitulo from "../../components/Subtitulo/index.jsx";
import HeroText from "../../components/Hero/index.jsx";
// import Button from "../../components/Button";

function Home({ changeTheme }) {
  const style = {
    height: "70px",
  };

  return (
    <>
      <Header
        style={style}
        div={{ display: "none" }}
        portfolio="Portifólio"
        changeTheme={changeTheme}
      />
      <S.Main>
        <S.BlocoUm>
          <HeroText texto="de artista" />
          <HeroText texto=" para artista" />
        </S.BlocoUm>
        <S.BlocoDois>
          <section>
            <Subtitulo texto="Sobre o Rosemary's" />
            <div></div>
          </section>
        </S.BlocoDois>

        <S.BlocoTres>
          <div>
            <Subtitulo texto="Time" />
          </div>
        </S.BlocoTres>

        <S.BlocoQuatro>
          <div>
            <Subtitulo texto="Últimos trabalhos" />
          </div>
        </S.BlocoQuatro>

        <S.BlocoCinco>
          <div>
            <Subtitulo texto="Quer ser cliente/Quer ser do time" />
          </div>
        </S.BlocoCinco>
      </S.Main>
    </>
  );
}

export default Home;