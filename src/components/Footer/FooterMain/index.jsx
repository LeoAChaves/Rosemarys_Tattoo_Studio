import * as S from "./styled.js";

import Paragrafo from "../../Paragrafo";
import Image from "../../Image/index.jsx"

import {BsInstagram, BsFacebook} from "react-icons/bs"

function FooterMain() {
  return (
    <S.FM>
      <div>
          <div>
              <Image src="https://media.discordapp.net/attachments/923686382659059742/969005498965823528/rose-dark_3.png?width=468&height=468" alt="logo"/>
          </div>
        <div>
          <h3>Endereço</h3>
          <Paragrafo texto="Rua X, Nº X"/>
          <Paragrafo texto="Bairro X, RJ"/>
        </div>

        <div>
          <h3>Contato</h3>
          <Paragrafo texto="(21) 9 xxxx xxxx"/>
          <Paragrafo texto="contato@rosemaryss.com.br"/>
        </div>

        <div>
          <h3>Veja também</h3>
        <span>
        
            <a href="https://www.instagram.com/romerys_studio_tattoo/"><BsInstagram className="iconF" /></a>
            <a href="https://www.facebook.com/Rosemarys-Studio-Tattoo-108893758475843"><BsFacebook className="iconF"/></a>
        </span>        
        </div>
      </div>
    </S.FM>
  );
}

export default FooterMain;
