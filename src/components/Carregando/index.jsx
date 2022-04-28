import * as S from "./styled.js";
import { GiSacrificialDagger } from "react-icons/gi";

function Carregando() {
    return ( 
        <S.Div>
            <div>
                <GiSacrificialDagger className="icon"/>
            </div>
            <div class="wrapper">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="shadow"></div>
                <div class="shadow"></div>
                <div class="shadow"></div>
                <div class="shadow"></div>
                <span>Carregando</span>
            </div>
        </S.Div>
    );
}

export default Carregando;