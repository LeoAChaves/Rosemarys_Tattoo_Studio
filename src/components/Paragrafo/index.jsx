function Paragrafo({texto, atributo, className}){
    return(
        <p className={className}>{texto} {atributo}</p>
    );
}

export default Paragrafo;