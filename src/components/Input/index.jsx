function Input({className, placeholder, type, name, id, value, disabled, onChange}){
    return(
        <input className={className} placeholder={placeholder} type={type} name={name} id={id} value={value} disabled={disabled} onChange={onChange} />
    );
}

export default Input;