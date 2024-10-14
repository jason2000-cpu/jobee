import { FaRegUser } from "react-icons/fa6";
import { BsFillBookmarkDashFill } from "react-icons/bs";
import { HiBriefcase } from "react-icons/hi2";
import { PiReadCvLogoFill } from "react-icons/pi";
import { PiGearFill } from "react-icons/pi";
import { Link } from "react-router-dom";


const navLinks = [
    {
        id: 1,
        name: 'My Profile',
        path: '/dashboard',
        icon: <FaRegUser size={24}/>
    },
    {
        id: 2,
        name: 'Saved Jobs',
        path: '/saved-jobs',
        icon: <BsFillBookmarkDashFill size={24}/>
    },
    {
        id: 3,
        name: 'Applied Jobs',
        path: '/applied-jobs',
        icon: <HiBriefcase size={24}/>
    },
    {
        id: 4,
        name: 'My Resume',
        path: '/my-resume/personal-info',
        icon: <PiReadCvLogoFill size={24}/>
    },

    {
        id: 5,
        name: 'Settings',
        path: '/settings',
        icon: <PiGearFill size={24}/>
    },

]

function SideNav() {
    return (
        <div className="hidden md:flex flex-col px-4 space-y-20  border h-[100vh] pt-6 ">
            <div className="text-center">
                <span className="font-bold text-xl italic text-[#6300B3]">JOBEE</span>
            </div>
            <div className="space-y-8">
                {
                    navLinks.map(link => (
                        <Link to={link.path} className="flex space-x-2 w-32">
                            <span>{link.icon}</span>
                            <span>{link.name}</span>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}


export default SideNav;