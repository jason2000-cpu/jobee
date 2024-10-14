import { featuredJobsDetails } from "../utils/featuredJobsDetails";
import Card from "./UI/Card";

function FeaturedJobs() {
    return (
        <div className="mx-4 md:mx-10 space-y-10 my-8">
            <div className="flex justify-center">
                <span className="text-4xl font-bold">Featured Jobs</span>
            </div>
            <div className="space-y-6 md:space-y-0 md:grid grid-cols-4 gap-10">
                {
                    featuredJobsDetails.map((details) => <Card details={details} />)
                }
            </div>
            <div className="flex justify-center">
                <button className="border rounded-lg px-4 py-1 bg-[#6300B3] text-white font-semibold">View All</button>
            </div>
        </div>
    )
}

export default FeaturedJobs;