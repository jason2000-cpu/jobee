import { useState } from "react";
import CustmInput from "../UI/CustmInput";
import { Link } from "react-router-dom";
import SocialLogins from "../UI/SocialLogins";
import useUserHook from "../../hooks/useUserHook";

function LoginForm() {
    const [formData, setFormData] = useState({});
    const { login }  = useUserHook();
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]:value});

    }

    const handleSubmit = () => {
        console.log(formData);
        login(formData);
    }
    return (
        <div className="w-full md:basis-1/2 flex flex-col justify-between pb-2">
            <div className="px-2 py-4 md:py-0 md:px-8 w-full space-y-6  md:basis-1/2 md:mt-16">
                <CustmInput handleChange={handleChange} label={'Email'} name={'email'} placeholder={'username/email'} />
                <CustmInput handleChange={handleChange} label={'Password'} name={'password'} placeholder={'password'} />
                <div className="flex justify-between">
                    <div className="flex items-center space-x-4">
                        <input type="checkbox" className="w-5 h-5" />
                        <p>Remember me</p>
                    </div>
                    <p>Forgot Password?</p>
                </div>

                <button onClick={handleSubmit} className="bg-[#6300B3] w-full h-10 rounded-lg text-white font-bold text-xl">Login</button>
            </div>
            <div className="ml-10">
                <span>Don't Have an Account <Link className="text-[#6300B3]" to='/register'>Register</Link></span>
            </div>
            <div>
                <div className="my-6 flex justify-center items-center space-x-1 md:space-x-2">
                    <hr className="w-16 md:w-[12rem] h-[2.5px]  bg-[#7C4EE4]"/>
                    <div><span>Or Login With</span></div>
                    <hr className="w-16 md:w-[12rem] h-[2.5px]  bg-[#7C4EE4]"/>
                </div>
                <SocialLogins />
            </div>
        </div>
    )
}

export default LoginForm;