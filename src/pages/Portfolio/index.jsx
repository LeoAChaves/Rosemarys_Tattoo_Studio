import { useEffect, useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ImagemGaleria from "../../components/ImagemGaleria";
import Label from "../../components/Label";

import * as S from "./styled.js";

import { apiPortifolio } from "../../services/api.js";

function Portfolio({changeTheme}) {
    const style = {
        height: "70px",
    }
    const [portfolio, setPortifolio] = useState([])

    useEffect(() => {
        async function getPortfolios() {
            try {
                const response = await apiPortifolio.get('/portfolio')
                setPortifolio(response.data.portfolios)
            
            } catch (error) {
                console.log(error)
            }
        }
        getPortfolios()
    }, []);
    return (
        <div>
            <Header btnVoltar={{display: "none"}} btnInicial={{display: "none"}} btnPortfolio={{display: "none"}} btnLogin={{display: "none"}} btnSair={{display: "none"}} className={"btn custom-btn styleHeader"} style={style} div={{display:"none"}} home="Home" changeTheme={changeTheme}/>
            <S.Main>
                <div className="blocoUm">
                    <div className="invisivel"></div>
                    <h1>Galeria</h1>
                    <div className="selectProfissional">
                        <Label htmlFor="profissional" nome="Filtrar profissional"></Label>
                        <select className="inputProfissional" name="profissional" id="profissional"> 
                            <option value=""></option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Outros">Outros</option>
                        </select>
                    </div>
                </div>
                <div className="grid">
                    {portfolio.map(portfolio=>{
                    return <ImagemGaleria id={portfolio.ID} href={'#'+portfolio.ID} alt={portfolio.DESCRICAO} descricao={portfolio.DESCRICAO} src={portfolio.FOTO} />
                    })}
                </div>
            </S.Main>
            <Footer />
        </div>
    );
}

export default Portfolio;