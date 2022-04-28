import * as S from "./styled.js";
import { GiDaggerRose } from "react-icons/gi";

function Carregando() {
    return ( 
        <S.Div>
            <GiDaggerRose classNameName="icon"/>
            <div className="wrapper">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <span>Carregando</span>
            </div>
        </S.Div>
    );
}

export default Carregando;