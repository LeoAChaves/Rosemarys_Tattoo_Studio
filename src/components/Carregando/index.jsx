import * as S from "./styled.js";

function Carregando() {
    return ( 
        <S.Div>
            <div class="wrapper">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="shadow"></div>
                <div class="shadow"></div>
                <div class="shadow"></div>
                <span>Carregando</span>
            </div>
        </S.Div>
    );
}

export default Carregando;