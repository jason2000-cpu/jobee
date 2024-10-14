import { LuAsterisk } from "react-icons/lu";


function CustmInput({handleChange, label, name, placeholder,  type='text', required }) {
    return (
        <div className="flex flex-col space-y-2 ">
            <label className="font-semibold text-xl flex" htmlFor={label}>
                <span>{label}</span>
                {
                    required ? <LuAsterisk size={16} color=" red" /> : null
                }
            </label>
            <input onChange={(e)=>handleChange(e)} className="rounded  w-full border text-xl h-12  px-2 py-1" type={type} placeholder={placeholder} name={name} />
        </div>
    )
}

export default CustmInput;