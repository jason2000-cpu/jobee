import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RiMenu5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useUser } from "../App";
import { FaUserCircle } from "react-icons/fa";


const navlinks = [
    {
        id: 1,
        name: 'Home',
        path: '/'
    },
    {
        id: 2,
        name: 'Find Jobs',
        path: '/job-search'
    },
    {
        id: 3,
        name: 'Employers',
        path: '/employers'
    },
    {
        id: 4,
        name: 'blogs',
        path: '/blogs'
    }
]

function NavBar() {
    const [ isOpen, setIsopen ] = useState(false);
    const navigate = useNavigate();

    const { isLoggedIn } = useUser();
    console.log(isLoggedIn)
    
    const handleOpen = () => {
        setIsopen(!isOpen);
    }

    return (
        <>
            <div className="hidden md:flex justify-between px-4 border items-center h-14">
                <span className="text-2xl font-bold">JOBEE</span>
                <div className="flex space-x-8">
                    <div className="flex space-x-16 items-center">
                        { 
                            navlinks.map((link) => (
                                <Link to={link.path} className="text-xl">{link.name}</Link>
                            ))
                        }
                    </div>
                    <Link to={'/contacts'}  className="border rounded px-2 py-1 border-[#6300B3] text-[#6300B3] font-semibold">Contact Us</Link>
                    {
                        isLoggedIn ? 
                            <div onClick={()=> navigate('/dashboard')} className="cursor-pointer">
                                <FaUserCircle size={34} />

                            </div>
                            :
                            <Link to={'/register'} className="border rounded px-2 py-1 bg-[#6300B3] text-white font-semibold">Register</Link>
                    }
                </div>
            </div>
            <div>
                <div className="flex md:hidden justify-end pt-4 pr-4">
                    <RiMenu5Line onClick={handleOpen}  size={24} className="cursor-pointer" />
                </div>
                { 
                    isOpen ? (
                        <div className="flex flex-col absolute  bg-gray-400 space-y-2  w-full">
                        {
                                navlinks.map((item) => (
                                    <Link to={item.path} className="px-2 py-1">{item.name}</Link>
                                ))
                        } 
                        </div>
                    ) : null
                }
            </div>
        </>
    );
}

export default NavBar;