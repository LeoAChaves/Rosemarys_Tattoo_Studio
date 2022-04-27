import * as S from "./styled.js";

import Header from "../../components/Header";
import Image from "../../components/Image";
import Footer from "../../components/Footer";
import ImagemGaleria from "../../components/ImagemGaleria";

function Portfolio({changeTheme}) {
    const style = {
        height: "70px",
    }
    return (
        <div>
            <Header btnVoltar={{display: "none"}} btnInicial={{display: "none"}} btnPortfolio={{display: "none"}} btnLogin={{display: "none"}} btnSair={{display: "none"}} className={"btn custom-btn styleHeader"} style={style} div={{display:"none"}} home="Home" changeTheme={changeTheme}/>
            <S.Main>
                <ImagemGaleria href="#1" alt="Cachorro fofinho" descricao="aaaaa" src="https://images-ext-2.discordapp.net/external/wrlV2sCdYGTN2lWZVRe1wa3xbYZKVHgx8c5olCSgBfY/%3Fquality%3D90%26strip%3Dinfo%26resize%3D680%2C453/https/super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png?width=678&height=452" />
            </S.Main>
            <Footer />
        </div>
    );
}

export default Portfolio;