import { useNavigate } from "react-router-dom";
import { MdOutlineBookmark } from "react-icons/md";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";


function Card({ details }) {
    const navigate = useNavigate();
    
    return (
        <div className="border rounded-lg shadow px-4 py-2 space-y-4">
            <div className="flex justify-between">
                <div className="flex items-center space-x-4">
                    <img className="w-28 h-24" src={details.company_logo_url} alt={details.hiring_company} />
                    <div className="flex flex-col space-y-2">
                        <span className="text-2xl font-bold">{details.hiring_company}</span>
                        <span className="text-[20px]">{details.role_type}</span>
                    </div>
                </div>
                <MdOutlineBookmarkBorder size={24} className="cursor-pointer" />
            </div>
            <div className="flex flex-col">
                <span className="text-xl font-bold">{details.role}</span>
                <div className="flex space-x-2 py-2 items-center">
                    <IoLocationOutline size={20} />
                    <span>{details.location}</span>
                </div>
            </div>
            <div className="flex justify-between mx-3">
                <button onClick={() => navigate(`/details/${details.id}`)} className="border rounded-lg px-4 py-1 border-[#6300B3] text-[#6300B3] font-semibold">View Details</button>
                <button className="border rounded-lg px-4 py-1 bg-[#6300B3] text-white font-semibold">Apply</button>
            </div>
        </div>
    )
}

export default Card;