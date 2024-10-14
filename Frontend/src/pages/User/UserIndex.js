import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import SideNav from "../../components/SideNav";
import { LuMoon } from "react-icons/lu";
import { FaBell } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { RiMenu5Line } from "react-icons/ri";
import UserProfile from "../../components/UserProfile";



function UserIndex({ children }) {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    const navigate = useNavigate();

    const handleMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className="flex">
            <SideNav />
            <div className="w-full">
                <div className="grid grid-cols-2 border w-full  px-4 py-1">
                    <div className="flex flex-col">
                        <span className="font-bold">Welcome Back!</span>
                        <span className="text-sm">Jackson</span>
                    </div>
                    <div className="hidden md:flex justify-end space-x-4">
                        <LuMoon size={28} />
                        <FaBell size={28}/>
                        <div onClick={()=> navigate('/dashboard')} className="cursor-pointer">
                                <FaUserCircle size={28} />
                        </div>
                    </div>
                <div>
                <div className="flex md:hidden justify-end pt-4 pr-4">
                    <RiMenu5Line onClick={handleMenuOpen}  size={24} className="border cursor-pointer" />
                </div>
                { 
                    isMenuOpen ? (
                        <div className="flex flex-col absolute right-10  bg-gray-400 space-y-2 w-1/2">
                            <span className="px-2 py-1">Profile</span>
                            <span className="px-2 py-1">Notifications</span>
                            <span className="px-2 py-1">Theme</span>
                        </div>
                    ) : null
                }
            </div>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default UserIndex;