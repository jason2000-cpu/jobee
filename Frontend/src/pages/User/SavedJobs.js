import { featuredJobsDetails } from "../../utils/featuredJobsDetails";
import Card from '../../components/UI/Card'
import UserIndex from "./UserIndex";
 
function SavedJobs() {
    return (
        <UserIndex>
            <div className="md:grid grid-cols-4 gap-10 m-10">
                { featuredJobsDetails.map(job => <Card details={job} /> )}
            </div>
        </UserIndex>
    )
}

export default SavedJobs;