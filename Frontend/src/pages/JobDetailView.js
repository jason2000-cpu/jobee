import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineBookmark } from "react-icons/md";
import { HiOutlineShare } from "react-icons/hi";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import parse from 'html-react-parser';
import { BsDot } from "react-icons/bs";
import { allJobs } from "../utils/featuredJobsDetails";
import Card from "../components/UI/Card";
import Footer from "../components/footer";
import { useState } from "react";
import SharePopup from "../components/UI/SharePopup";
import { handleSuccess } from "../components/UI/AlertHandler";
import { useAuth } from "../contexts/Authcontext";


function JobDetailView() {
    const [ isSaved, setIsSaved ] = useState(false);
    const [  isShareOpen, setIsShareOpen ] = useState(false);
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();


    const {jobId } = useParams();
    console.log("URL PARAMETERS:::", jobId );

    const details = allJobs.find(job => job.id == jobId)
    console.log(details)

    const handleSave = () => {
        setIsSaved(!isSaved);
    }
    const handleShare = () => {
        setIsShareOpen(!isShareOpen);
    }

    const handleJobApply = (details) => {
        isAuthenticated ? handleSuccess(`You application for the ${details.role} role has been sent to ${details.hiring_company}`) :
         navigate('/register');
    }

    return (
        <div>
            <NavBar />
            <div className="md:flex flex-row gap-4 my-4">
                <div className="basis-3/4 p-4 space-y-2 md:px-10">
                    <div className="md:flex justify-between">
                        <h1 className="text-3xl font-bold">{details.role}</h1>
                        <div className="my-4 flex justify-between md:mt-0  space-x-4">
                            <button onClick={()=> handleJobApply(details)} className="border rounded-lg bg-[#6300B3] text-white py-1 px-2">APPLY NOW</button>
                            <div className="flex space-x-4">
                                <div onClick={handleSave} className="cursor-pointer flex items-center px-1 border border-[#6300B3] rounded-lg">
                                    { isSaved ? <MdOutlineBookmark size={24} color="#6300B3" /> : <MdOutlineBookmarkBorder size={24} color="#6300B3" />}
                                </div>
                                <div onClick={handleShare} className="cursor-pointer flex items-center px-1 border border-[#6300B3] rounded-lg">
                                    <HiOutlineShare size={24} color="#6300B3" />
                                </div>
                                <SharePopup  isShareOpen={isShareOpen} setIsShareOpen={setIsShareOpen} shareLink={`http://localhost:3000/details/${details.id}`} />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3 ">
                        <img className="w-32" src={details.company_logo_url}  alt={details.hiring_company}/>
                        <div className="space-y-6">
                            <div className="flex space-x-1  items-center">
                                <span>{details.hiring_company}</span> 
                                <BsDot size={24} />
                                <div className="flex space-x-1">
                                    <IoLocationOutline size={24} />
                                    <span>{details.location}</span>
                                </div>
                            </div>
                            <div className="space-x-4">
                                <span className="text-center bg-gray-300 rounded-lg px-2 py-1 ">{details.role_type} </span>
                                <span className="bg-gray-300 rounded-lg px-2 py-1 ">2 - 4 Years</span>
                            </div>
                        </div>
                    </div>
                    <div className="pt-10 prose">
                        <h1 className="text-xl font-bold">Job Description</h1>
                        {parse(details.job_description)}
                    </div>
                </div>
                <div className="basis-1/3 space-y-4 p-4">
                    <h1 className="text-xl font-bold">Similar Jobs</h1>
                    { allJobs.map(detail => <Card details={detail} /> )} 
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default JobDetailView;