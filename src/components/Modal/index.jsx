import * as S from "./styled.js";

import Image from "../Image";
import Paragrafo from "../Paragrafo";

function Modal({id, funcionario, src, alt, descricao}) {
    return ( 
        <S.Container>
            <section id={id} className="modalContainer">
                <div className="modal">
                    <div className="fechar">
                        <a href="#" className="closebtn">×</a>
                    </div>
                    <main>
                        <div className="detalhes-modal">
                            <p>Artista</p>
                            <p>{funcionario}</p>
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