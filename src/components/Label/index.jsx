function Label({className, id, nome}) {
    return ( 
        <label className={className} htmlFor={id}>{nome}</label>
    );
}

export default Label;