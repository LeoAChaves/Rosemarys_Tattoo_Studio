function Input({nomeInput, placeholder, type, name, id, value, onChange}){
    return(
        <div>
            <label htmlFor={id}>{nomeInput}</label>
            <input placeholder={placeholder} type={type} name={name} id={id} value={value} onChange={onChange} />
        </div>
    );
}

export default Input;