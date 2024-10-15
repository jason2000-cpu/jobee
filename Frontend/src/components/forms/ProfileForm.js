import { useState } from "react";
import CustmInput from "../UI/CustmInput";
import { handleSuccess } from "../UI/AlertHandler";


function ProfileForm({ user, hidden }) {
    const [ formData, setFormData ] = useState({
        ...user
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({...formData, [name]: value});
    }

    const handleSubmit = () => {
        console.log(formData);
        handleSuccess('Profile Info Saved')
    }

    return (
        <div className={`${hidden ? 'hidden' : 'mx-4 my-4'}`}>
            <span className="text-2xl font-bold">Personal Information</span>
            <div className="space-y-4 mt-16">
                <div className="md:grid grid-cols-2 space-y-4 md:space-y-0 md:space-x-12 w-full">
                    <CustmInput handleChange={handleChange} label={'Full Name'} name={'fullname'} placeholder={'eg. John Doe'} />
                    <CustmInput handleChange={handleChange} label={'Username'} name={'username'} placeholder={'username'} />
                </div>
                <div  className="md:grid grid-cols-2 space-y-4 md:space-y-0 md:space-x-12 w-full">
                    <CustmInput handleChange={handleChange} label={'Email'} name={'email'} type={'email'} placeholder={'email'} />
                    <CustmInput handleChange={handleChange} label={'Phone'} name={'phone'} placeholder={'phone'} />
                </div>
                <div  className="md:grid grid-cols-2 space-y-4 md:space-y-0 md:space-x-12 w-full">
                    <CustmInput handleChange={handleChange} label={'Location'} name={'username'} placeholder={'username/email'} />
                    <div className=" md:grid grid-cols-2  space-x-10 ">
                        <CustmInput handleChange={handleChange} label={'Current Salary'} name={'curr_sal'} placeholder={'per month'} />
                        <CustmInput handleChange={handleChange} label={'Expected Salary'} name={'exp_sal'} placeholder={'per month'} />
                    </div>
                </div>
                <div className="flex  justify-end items-end space-x-6 h-28">
                    <button onClick={handleSubmit} className="bg-[#6300B3] w-24 h-8 rounded-lg text-white font-bold text-xl">Save</button>
                    <button className="text-[#6300B3] w-24 h-8 rounded-lg border border-red-600 font-bold text-xl">Cancel</button>
                </div>

            </div>
        </div>
    )
}

export default ProfileForm;