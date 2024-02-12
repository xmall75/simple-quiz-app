const InputForm = ({type, placeholder, name}) => {
    return (
        <div className="flex flex-col gap-2 w-4/5 md:w-2/5 mb-3">
            <label htmlFor={name}>
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </label>
            <input
            className="rounded-sm px-2 pb-2 pt-1 text-black text-sm"
            type={type} 
            placeholder={placeholder} 
            name={name} />
        </div>
    )
}

export default InputForm