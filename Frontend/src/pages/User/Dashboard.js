import { useNavigate } from "react-router-dom";
import SideNav from "../../components/SideNav";
import { LuMoon } from "react-icons/lu";
import { FaBell } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { TiArrowRight } from "react-icons/ti";

import UserProfile from "../../components/UserProfile";
import UserIndex from "./UserIndex";
import ProfileForm from "../../components/forms/ProfileForm";
import RecentAppliedJobsTable from "../../components/tables/RecentAppliedJobsTable";


function Dashboard() {
    return (
        <UserIndex>
            <div className="mx-6">
                <div className="mt-4 flex justify-center  ">
                    <div className="flex justify-between w-[60vw] items-center border rounded px-4 h-16 bg-[#6200b360]">
                            <div className="flex items-center space-x-4">
                                <div className="border rounded-full h-14 w-14 overflow-hidden   text-center">
                                    <img src='/static/images/profile.png' className="-mt-3 h-20 " alt="profile" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xl">Your Profile Is Not Complete</span>
                                    <span className="text-sm">Complete Your Profile and Build a custom Resume</span>
                                </div>
                            </div>
                            <div className="flex bg-[#6300B3] text-white items-center rounded px-2">
                                <span className="text-white">Edit Profile</span>
                                <TiArrowRight size={28} />
                            </div>
                    </div>
                </div>
                <div className="mt-4">
                    <span className="text-xl font-semibold">Recently Applied</span>
                    <RecentAppliedJobsTable />
                </div>
            </div>
        </UserIndex>
    )
}


export default Dashboard;