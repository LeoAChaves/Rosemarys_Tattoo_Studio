function Button({className, onClick, nome}){
    return(
        <>
            <button type="submit" className={className} onClick={onClick}>{nome}</button>
        </>
    );
}

export default Button;