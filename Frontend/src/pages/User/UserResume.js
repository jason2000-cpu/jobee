import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import UserIndex from "./UserIndex";
import ProfileForm from '../../components/forms/ProfileForm';
import EducationForm from '../../components/forms/EducationForm.js';
import ExperienceForm from '../../components/forms/ExperienceForm.js';
import CertificationsForm from '../../components/forms/CertificationsForm.js';
import ResumeUploadForm from '../../components/forms/ResumeUploadForm.js';

function UserResume() {
    const [ active, setActive ] = useState(true);

    const navigate = useNavigate();
    const { loc } = useParams();
    // const loc = useLocation()

    console.log("URL PARAMS::::", loc)

    return (
    <UserIndex>
            <div className="mx-10 pt-2">
                <span className="text-2xl font-bold">My Resume</span>
                <div className=" my-4 md:flex justify-center md:space-x-20">
                    <div className={`${loc === 'personal-info' ? 'text-[#6300B3] border-b-2 border-[#6300B3] ': null } cursor-pointer  py-1 px-4`}>
                        <span className="text-xl" onClick={()=> navigate('/my-resume/personal-info')}>Personal Information</span>
                    </div>
                    <div className={`${loc === 'education' ? 'text-[#6300B3] border-b-2 border-[#6300B3] ': null } cursor-pointer py-1 px-4`}>
                        <span className="text-xl" onClick={()=> navigate('/my-resume/education')}>Education</span>
                    </div>
                    <div className={`${loc === 'work' ? 'text-[#6300B3] border-b-2 border-[#6300B3] ': null } cursor-pointer  py-1 px-4`}>
                        <span className="text-xl" onClick={()=> navigate('/my-resume/work')}>Work Experience</span>
                    </div>
                    <div className={`${loc === 'certifications' ? 'text-[#6300B3] border-b-2 border-[#6300B3] ': null } cursor-pointer py-1 px-4`}>
                        <span className="text-xl" onClick={()=> navigate('/my-resume/certifications')}>Licenses & Certifications</span>
                    </div>
                    <div className={`${loc === 'upload-resume' ? 'text-[#6300B3] border-b-2 border-[#6300B3] ': null } cursor-pointer py-1 px-4`}>
                        <span className="text-xl" onClick={()=> navigate('/my-resume/upload-resume')} >Upload Resume</span>
                    </div>
                </div>
                <ProfileForm  hidden={loc !== 'personal-info'}/>
                <EducationForm   hidden={loc !== 'education'}/>
                <ExperienceForm  hidden={loc !== 'work'}/>
                <CertificationsForm  hidden={loc !== 'certifications'}/>
                <ResumeUploadForm  hidden={loc !== 'upload-resume'}/>

            </div>
    </UserIndex>
    )
}

export default UserResume;