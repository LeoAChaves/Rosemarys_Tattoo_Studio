import * as S from "./styled.js";

import Header from "../../components/Header";
import Image from "../../components/Image";
import Error from "../../assets/404error.svg";
import Footer from "../../components/Footer";

function Erro({changeTheme}) {
    const style = {
        height: "70px",
    }

    return (
        <>
            <Header btnVoltar={{display: "none"}} btnInicial={{display: "none"}} btnPortfolio={{display: "none"}} btnLogin={{display: "none"}} btnSair={{display: "none"}} className={"btn custom-btn styleHeader"} style={style} home="Home" changeTheme={changeTheme}/>
            <S.Container>
                <div className="imgError">
                    <Image src={Error} alt="Imagem de erro"/>
                </div>
            </S.Container>
            <Footer />
        </>
    );
}

export default Erro;