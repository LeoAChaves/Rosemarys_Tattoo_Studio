function Label({id, nome}) {
    return ( 
        <label htmlFor={id}>{nome}</label>
    );
}

export default Label;