import { allJobs } from "../utils/featuredJobsDetails"

function HiringNow() {
    return (
        <div className="my-20">
            <div className="my-6 flex justify-center items-center space-x-1 md:space-x-2">
                <hr className="w-16 md:w-[38rem] h-[2.5px]  bg-[#7C4EE4]"/>
                <div><span className="md:text-xl">Top Companies Hiring Now</span></div>
                <hr className="w-16 md:w-[38rem] h-[2.5px]  bg-[#7C4EE4]"/>
            </div>
            <div className="md:flex  mx-8 mt-10 space-y-10  md:space-x-16">
                {
                    allJobs.map((detail) => (
                        <div>
                            <img className="h-24" src={detail.company_logo_url} alt={detail.hiring_company} />
                        </div>
                    ))
                }
            </div>

            {/* <div className="overflow-hidden w-full px-4 border h-16 flex items-center ">
                <div className="animate-slideRightToLeft flex justify-between w-[calc(100%_+_400px)] border continuous-slide whitespace-nowrap text-xl font-bold">
                    {
                    allJobs.map((details, index) => (
                        <img key={index} className="w-20 h-20" src={details.company_logo_url} alt='company logo' />
                    ))
                    }
                </div>
            </div> */}
        </div>
    )
}

export default HiringNow;