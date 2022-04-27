import * as S from "./styled.js";

import Image from "../Image";
import Modal from "../Modal";

import {HiOutlineArrowsExpand} from "react-icons/hi";

function ImagemGaleria({src, alt, href, descricao}) {
    return (
        <S.Div>
            <div>
                <h1>Galeria</h1>
            </div>
            <div className="grid">
                <div className="container">
                    <div className="bordaAnimada"></div>
                    <div className="corner">
                        <S.Article>
                            <div className="editHover">
                                <Image className="imgGaleria" src={src} alt={alt}/>
                                <a className="iconHover" href={href}><HiOutlineArrowsExpand/></a>
                            </div>
                        </S.Article>
                    </div>
                </div>
            </div>
            <Modal /*>id={href}*/ id="1" src={src} alt={alt} descricao={descricao} />
        </S.Div>
    );
}

export default ImagemGaleria;