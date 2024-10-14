import { useState } from "react";
import CustmInput from "../UI/CustmInput";

function ContactForm() {
    const [formData, setFormData ] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]:value})
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <form onSubmit={handleSubmit} className="px-4 space-y-8 py-4">
            <div className="md:grid gap-10 grid-cols-2">
                <CustmInput handleChange={handleChange} label={'Full Name'} name={'Fname'} placeholder={'your name...'} />
                <CustmInput handleChange={handleChange} label={'Email'} name={'email'} placeholder={'email'} />
            </div>
            <div>
                <textarea 
                    onChange={handleChange}
                    className="p-2 h-64 border rounded w-full" 
                    placeholder="your message here..."
                    name="message"
                >
                </textarea>
            </div>
            <button type="submit" className="bg-[#6300B3] w-full h-10 rounded-lg text-white font-bold text-xl">Login</button>
        </form>
    )
}

export default ContactForm;