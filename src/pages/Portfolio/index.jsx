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
                <ImagemGaleria />
            </S.Main>
            <Footer />
        </div>
    );
}

export default Portfolio;