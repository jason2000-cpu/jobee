import { useState } from "react";
import CustmInput from "../UI/CustmInput";
import { Link } from "react-router-dom";
import SocialLogins from '../UI/SocialLogins'

function RegisterForm() {
    const [ formData, setFormData ] = useState({})

    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData({...formData, [name]:value})
    }

    const handleSubmit = () => {
        console.log(formData);
    }

    return (
        <div className="md:mx-24 border shadow-lg rounded-lg px-4 py-6 space-y-6">
            <div className="md:grid grid-cols-2 gap-10 space-y-4 md:space-y-0">
                    <CustmInput handleChange={handleChange} required={true} name={'Fname'} label={'Full Name'} placeholder={'firstname..'} />
                <div>
                    <div>
                        <CustmInput handleChange={handleChange} required={true} name={'email'} label={'email'} type="email" placeholder={'secondname..'} />
                        
                    </div>
                    <span className="text-sm">Job notifications will be sent to this email id</span>
                </div>
            </div>
            <div className="md:grid grid-cols-2 gap-10 space-y-4 md:space-y-0">
                <div>
                    <CustmInput handleChange={handleChange} required={true} name={'phone'} label={'Phone'} placeholder={'phone..'} />
                    <span className="text-sm">Recruiters will contact you on this number</span>
                </div>
                <div>
                    <CustmInput handleChange={handleChange} required={true} name={'password'} label={'Password'} type={'password'} placeholder={'password..'} />
                    <span className="text-sm">Remember your password</span>
                </div>
            </div>
            <div className="space-y-4">
                <button onClick={handleSubmit} className="bg-[#6300B3] w-full h-10 rounded-lg text-white font-bold text-xl">Register</button>
                <div>Already Have an Account? <Link className="text-[#6300B3]" to='/login'>Login</Link></div>
            </div>
            <div>
                <div className="my-6 flex justify-center items-center space-x-1 md:space-x-2">
                    <hr className="w-16 md:w-[12rem] h-[2.5px]  bg-[#7C4EE4]"/>
                    <div><span>Or Register With</span></div>
                    <hr className="w-16 md:w-[12rem] h-[2.5px]  bg-[#7C4EE4]"/>
                </div>
                <SocialLogins />
            </div>
        </div>
    )
}

export default RegisterForm;