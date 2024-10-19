import { useNavigate } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { useState } from "react";
import useJobPosts from "../hooks/useJobPosts";


function SearchBar() {
    const navigate = useNavigate();
    const { searchParams, setSearchParams } = useJobPosts();
    const [ formData, setFormData ] = useState({})


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(formData)
        setSearchParams({
            ...searchParams,
            "query": formData.jobTitle,
            "location": formData.location,
        });

        console.log(searchParams);
    }
    return (
        <form onSubmit={handleSubmit} className="border bg-[#efe2f836]  flex items-center justify-between p-2 h-16">
            <div className="md:flex">
                <div className="flex items-center space-x-1">
                    <CiSearch size={24} color="#6300B3" />
                    <input onChange={(e)=>handleChange(e)} className="outline-none text-xl bg-[#efe2f836]" name='jobTitle'  placeholder="Job Title, Keyword.."/>
                </div>
                <div className="hidden md:flex items-center border-l-2 border-[#6300B3] pl-4 space-x-1">
                    <IoLocationOutline size={24} color="#6300B3"/>
                    <input onChange={(e)=>handleChange(e)} className="outline-none text-xl bg-[#efe2f836]" name='location'  placeholder="Location"/>
                </div>
                <div className="hidden md:flex items-center border-l-2 border-[#6300B3] pl-4 space-x-1">
                    <HiOutlineBriefcase size={24} color="#6300B3"/>
                    <input onChange={(e)=>handleChange(e)} className="outline-none text-xl bg-[#efe2f836]" name='yearsOfExperience' placeholder="Years of Experience"/>
                </div>
            </div>
            <button onClick={handleSubmit} type="submit" className="bg-[#6300B3] text-white rounded px-1 py-2 w-36">Find Job</button>
        </form>
    )
};


export default SearchBar;