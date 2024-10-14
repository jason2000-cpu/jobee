import { useState } from "react";
import CustmInput from "../UI/CustmInput";

import { FcGraduationCap } from "react-icons/fc";
import { FaSchool } from "react-icons/fa";


let educationList = [
    {
        id: 1,
        'institution': 'Jaramogi Oginga Odinga University of Science and Technology',
        'level': 'Bachelor\'s Degree',
        'grade': '2nd Class Honors',
        'course': 'Information and Communication Technology',
        'startYear': '19th SEP 2019',
        'endYear': '22nd March 2024'
    },
    {
        id: 2,
        'institution': 'Jaramogi Oginga Odinga University of Science and Technology',
        'level': 'Bachelor\'s Degree',
        'grade': '2nd Class Honors',
        'course': 'Information and Communication Technology',
        'startYear': '19th SEP 2019',
        'endYear': '22nd March 2024'
    }
]

const AddPopup = ({ togglePopup, callBack }) => {
    const [ formData, setFormData ] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({...formData, [name]: value })
    }
    const handlSubmit = () => {
        console.log(formData)
        callBack(formData)
        togglePopup();
    }
    return (
        <div className="h-full w-full flex justify-center z-40">
            <div className="absolute w-[50vw]  border shadow-lg px-4 py-2 space-y-3 bg-white">
                    <div className="md:grid grid-cols-2 gap-6  ">
                        <CustmInput label={'Institution Name'} name={'institution'} handleChange={handleChange} />
                        <CustmInput label={'Course'} name={'course'} handleChange={handleChange} />
                        <CustmInput label={'Level'} name={'level'} handleChange={handleChange} />
                        <CustmInput label={'Grade'} name={'grade'} handleChange={handleChange} />
                        <CustmInput label={'Start Year'} name={'startYear'} type={'Date'} handleChange={handleChange} />
                        <CustmInput label={'End Year'} name={'endYear'} type={'Date'}  handleChange={handleChange}/>
                    </div>
                    <div className="flex justify-end">
                        <button onClick={handlSubmit} className="border text-xl px-2 font-semibold rounded bg-[#6300B3] text-white">Done</button>
                    </div>
            </div>
        </div>
    )
}

function EducationForm ({ hidden }) {
    const [popupIsOpen, setPopupIsOpen ] = useState(false);
    const [ userEducation, setUserEducation ] = useState([...educationList,]);

    const togglePopup = () => {
        setPopupIsOpen(!popupIsOpen);
    }
    const callBack = (formData) => {
        setUserEducation((prev) => [
            ...prev,
            formData
          ]);
        console.log(formData)
    }

    return (
        <div className={`${hidden ? 'hidden' : 'mx-4 my-4'}`}>
            <button onClick={togglePopup} className="border rounded fonr-semibold text-white p-2 bg-[#6300B3]">Add Education</button>
            { popupIsOpen ? <AddPopup togglePopup={togglePopup} callBack={callBack}/> : null }
            <div className="md:grid grid-cols-3 gap-10 mt-10">
                {userEducation.map((item) => (
                    <div className="border rounded space-y-4 p-2">
                       <div className="flex space-x-2">
                            <div>
                                <FaSchool size={28} color="gray"/>
                            </div>
                            <div>
                                <span className="text-xl font-bold">{item.institution}</span>
                            </div>
                       </div>
                       <div className="flex space-x-2">
                            <div>
                                <FcGraduationCap size={28} color="gray" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-semibold">{item.level}</span>
                                <span className="text-xl">{item.course}</span>
                            </div>
                       </div>
                       <div className="space-x-2 text-gray-500 ml-10">
                            <span>{item.startYear}</span>
                            <span>-</span>
                            <span>{item.endYear}</span>
                       </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EducationForm;