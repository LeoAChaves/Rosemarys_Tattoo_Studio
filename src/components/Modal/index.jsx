import * as S from "./styled.js";

import Image from "../Image";
import Paragrafo from "../Paragrafo";

function Modal({id, src, alt, descricao}) {
    return ( 
        <S.Container>
            <section id={id} className="modalContainer">
                <div className="modal">
                    <div className="fechar">
                        <a href="#" className="closebtn">×</a>
                    </div>
                    <main>
                        <div className="detalhes-modal">
                            <Image className="imgModal" src={src} alt={alt}/>
                            <div className="descricao-modal">
                                <Paragrafo className="paragrafo-modal" texto={descricao}/>
                            </div>
                        </div>
                    </main>
                </div>
            </section>
        </S.Container>
    );
}

export default Modal;