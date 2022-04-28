import { useEffect, useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ImagemGaleria from "../../components/ImagemGaleria";
import Carregando from "../../components/Carregando";

import { BsFillArrowUpCircleFill } from "react-icons/bs";

import * as S from "./styled.js";

import { apiPortfolio } from "../../services/api.js";

function Portfolio({changeTheme}) {
    const style = {
        height: "70px",
    }
    const [portfolio, setPortifolio] = useState([])
    const [load, setLoad] = useState(true)

    useEffect(() => {
        async function getPortfolios() {
            try {
                const response = await apiPortfolio.get('/portfolio')
                setPortifolio(response.data.portfolios)
                setLoad(false)
            } catch (error) {
                console.log(error)
            }
        }
        getPortfolios()
    }, []);

  
    return (
        <>
            {load ? <Carregando />
            :
                <div>
                    <Header btnHome={{display: "none"}} btnInicial={{display: "none"}} btnPortfolio={{display: "none"}} btnLogin={{display: "none"}} btnSair={{display: "none"}} className={"btn custom-btn styleHeader"} style={style} div={{display:"none"}} voltar="Voltar" changeTheme={changeTheme}/>
                    <S.Main id="inicio">
                        <h1>Galeria</h1>
                        <div className="grid">
                            {portfolio.map(portfolio=>{
                            return <ImagemGaleria funcionario={portfolio.FUNCIONARIOID} key={portfolio.ID} id={portfolio.ID} href={'#'+portfolio.ID} alt={portfolio.DESCRICAO} descricao={portfolio.DESCRICAO} src={portfolio.FOTO} />
                            })}
                        </div>
                    </S.Main>
                    <Footer />
                    <a href="#inicio" className="linkTopo">
                        <BsFillArrowUpCircleFill className="iconLinkTopo"/>
                    </a>
                </div>
            }
        </>
    );
}

export default Portfolio;