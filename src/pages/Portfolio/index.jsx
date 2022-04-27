import { useEffect, useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ImagemGaleria from "../../components/ImagemGaleria";
import Carregando from "../../components/Carregando";

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
                    <Header btnVoltar={{display: "none"}} btnInicial={{display: "none"}} btnPortfolio={{display: "none"}} btnLogin={{display: "none"}} btnSair={{display: "none"}} className={"btn custom-btn styleHeader"} style={style} div={{display:"none"}} home="Home" changeTheme={changeTheme}/>
                    <S.Main>
                        <h1>Galeria</h1>
                        <div className="grid">
                            {portfolio.map(portfolio=>{
                            return <ImagemGaleria key={portfolio.ID} id={portfolio.ID} href={'#'+portfolio.ID} alt={portfolio.DESCRICAO} descricao={portfolio.DESCRICAO} src={portfolio.FOTO} />
                            })}
                        </div>
                    </S.Main>
                    <Footer />
                </div>
            }
        </>
    );
}

export default Portfolio;