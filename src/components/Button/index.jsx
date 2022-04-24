function Button({className, onClick, nome, style}){
    return(
        <button type="submit" className={className} onClick={onClick} style={style}>{nome}</button>
    );
}

export default Button;