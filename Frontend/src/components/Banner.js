
import SearchBar from "./SearchBar";


function Banner(){
    return (
        <div className="flex px-10 pt-16  h-[93vh] justify-around bg-[#efe2f836]">
            <div className="space-y-24 flex flex-col justify-center">
                <div className="space-y-4">
                    <h1 className="text-5xl font-bold">Find A Job That Aligns with Your<br /> Skills and Interests</h1>
                    <div className="text-2xl">Thousands of jobs in all the leading sector are waiting for you.</div>
                </div>
                <SearchBar />
            </div>
            <div className="hidden md:block">
                <img src="/static/images/banner.png"  alt="banner" />
            </div>
        </div>
    )
};

export default Banner;