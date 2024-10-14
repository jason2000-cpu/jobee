import ProfileForm from "./forms/ProfileForm";

function UserProfile() {
    return (
        <div className="px-6 py-2 space-y-6">
            <div>
                <span className="font-bold text-3xl">My Profile</span>
            </div>
            <div className="md:flex flex-row  gap-10">
                <div className=" basis-1/3 grid grid-rows-3 gap-10">
                    <div className="flex flex-col items-center basis-1/3 border">
                        <div className="border rounded-full h-24 w-24  overflow-hidden text-center">
                            <img src='/static/images/profile.png' className="h-24 w-32" alt="profile" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-lg">Jackson M</span>
                            <span className="text-sm">Software Engineer/ Developer</span>
                        </div>
                    </div>
                    <div className="px-4 space-y-2 py-4">
                        <span className="font-bold text-lg">Profile Completion</span>
                        <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                            <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: "45%"}}> 45%</div>
                        </div>
                    </div>
                    <div>
                        <div className=''>
                            <span className="text-xl font-bold">Social Links</span>
                            
                        </div>

                    </div>
                    
                </div>
                <div className="basis-3/4 border">
                    <ProfileForm />
                </div>
            </div>
        </div>
    )
}

export default UserProfile;