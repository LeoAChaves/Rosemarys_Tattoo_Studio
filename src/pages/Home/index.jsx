import * as S from "./styled.js";

import Header from "../../components/Header";
import HeroText from "../../components/Hero/index.jsx";
import Image from "../../components/Image/index.jsx";
import { GiDaggerRose, GiRose, GiSacrificialDagger } from "react-icons/gi";

function Home({ changeTheme }) {
  const style = {
    height: "70px",
  };

  return (
    <>
      <Header
        btnHome={{ display: "none" }}
        btnVoltar={{ display: "none" }}
        btnInicial={{ display: "none" }}
        btnSair={{ display: "none" }}
        className={"btn custom-btn styleHeader"}
        style={style}
        div={{ display: "none" }}
        portfolio="Portifólio"
        login="Login"
        changeTheme={changeTheme}
      />
      <S.Main>
        <S.BlocoUm>
          <HeroText texto="de artista" />
          <HeroText texto=" para artista" />
        </S.BlocoUm>

        <S.BlocoDois>
          <S.DivCard>
            <S.DivTexto>
              <S.H1>Nossa filosofia</S.H1>
              <S.Line />
              <S.Paragrafo>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </S.Paragrafo>
              <S.IconFD><GiDaggerRose className="themeMode"/></S.IconFD>
            </S.DivTexto>
            <S.DivImage>
              <Image
                src="https://images.pexels.com/photos/1304469/pexels-photo-1304469.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="cao"
              />
              <Image
                src="https://images.pexels.com/photos/4123707/pexels-photo-4123707.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="cao"
              />
            </S.DivImage>
          </S.DivCard>
          <S.Line2 />
          <S.DivCard>
            <S.DivImage>
              <Image
                src="https://images.pexels.com/photos/4123712/pexels-photo-4123712.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="cao"
              />
              <Image
                src="https://i.pinimg.com/564x/cc/d7/4d/ccd74dcfa5b67f092eb7cbe5674586f2.jpg"
                alt="cao"
              />
            </S.DivImage>
            <S.DivTexto>
              <S.H1>Quem somos</S.H1>
              <S.Line />
              <S.Paragrafo>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </S.Paragrafo>
              <S.IconFD><GiDaggerRose className="themeMode"/></S.IconFD>
            </S.DivTexto>
          </S.DivCard>
        </S.BlocoDois>

        <S.BlocoTres>
          <S.Time>
            <S.Artista>
              <Image
                src="https://images.pexels.com/photos/7147841/pexels-photo-7147841.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="cao"
              />
              <S.IconFD><GiRose className="themeMode"/></S.IconFD>
              <S.Paragrafo2>Rose Herculano</S.Paragrafo2>
            </S.Artista>

            <S.Artista>
              <Image
                src="https://images.pexels.com/photos/8375273/pexels-photo-8375273.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="cao"
              />
              <S.IconFD><GiRose className="themeMode"/></S.IconFD>
              <S.Paragrafo2>Maurício Castro</S.Paragrafo2>
            </S.Artista>

            <S.Artista>
              <Image
                src="https://images.pexels.com/photos/7005665/pexels-photo-7005665.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="cao"
              />
              <S.IconFD><GiRose className="themeMode"/></S.IconFD>
              <S.Paragrafo2>Pietro Alves</S.Paragrafo2>
            </S.Artista>

            <S.Artista>
              <Image
                src="https://images.pexels.com/photos/3376116/pexels-photo-3376116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="cao"
              />
              <S.IconFD><GiRose className="themeMode"/></S.IconFD>
              <S.Paragrafo2>Amanda Santos</S.Paragrafo2>
            </S.Artista>

            <S.Artista>
              <Image
                src="https://images.pexels.com/photos/7005726/pexels-photo-7005726.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="cao"
              />
              <S.IconFD><GiRose className="themeMode"/></S.IconFD>
              <S.Paragrafo2>Maria Andrade</S.Paragrafo2>
            </S.Artista>

            <S.Artista>
              <Image
                src="https://images.pexels.com/photos/8521181/pexels-photo-8521181.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="cao"
              />
              <S.IconFD><GiRose className="themeMode"/></S.IconFD>
              <S.Paragrafo2>Gabriel Fernandes</S.Paragrafo2>
            </S.Artista>

            <S.Artista>
              <Image
                src="https://images.pexels.com/photos/7594057/pexels-photo-7594057.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="cao"
              />
              <S.IconFD><GiSacrificialDagger className="themeMode"/></S.IconFD>
              <S.Paragrafo2>Maria Eugenia Chaves</S.Paragrafo2>
            </S.Artista>

            <S.Artista>
              <Image
                src="https://images.pexels.com/photos/5235735/pexels-photo-5235735.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="cao"
              />
              <S.IconFD><GiSacrificialDagger className="themeMode"/></S.IconFD>
              <S.Paragrafo2>Fernanda Vasconcelos</S.Paragrafo2>
            </S.Artista>

            <S.Artista>
              <Image
                src="https://images.pexels.com/photos/3728826/pexels-photo-3728826.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="cao"
              />
              <S.IconFD><GiSacrificialDagger className="themeMode"/></S.IconFD>
              <S.Paragrafo2>Lucca Rodrigues</S.Paragrafo2>
            </S.Artista>
          </S.Time>
        </S.BlocoTres>

        <S.BlocoQuatro>
        <S.IconFD><GiDaggerRose className="themeMode"/></S.IconFD>
          <S.H2>Últimos trabalhos</S.H2>

          <S.Trabalhos>
            <Image
              src="https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png?quality=90&strip=info&resize=680,453"
              alt="cao"
            />
            <Image
              src="https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png?quality=90&strip=info&resize=680,453"
              alt="cao"
            />
            <Image
              src="https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png?quality=90&strip=info&resize=680,453"
              alt="cao"
            />
            <Image
              src="https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png?quality=90&strip=info&resize=680,453"
              alt="cao"
            />
            <Image
              src="https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png?quality=90&strip=info&resize=680,453"
              alt="cao"
            />
            <Image
              src="https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png?quality=90&strip=info&resize=680,453"
              alt="cao"
            />
            <Image
              src="https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png?quality=90&strip=info&resize=680,453"
              alt="cao"
            />
            <Image
              src="https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png?quality=90&strip=info&resize=680,453"
              alt="cao"
            />
          </S.Trabalhos>
        </S.BlocoQuatro>

        <S.BlocoCinco>
          <div>
            <S.H2>Quer nos dizer algo?</S.H2>
            <S.Paragrafo3>
              Manda aí pra gente se tem uma sugestão ou dúvida que logo entramos
              em contato!
            </S.Paragrafo3>
          </div>
        </S.BlocoCinco>
      </S.Main>
    </>
  );
}

export default Home;
