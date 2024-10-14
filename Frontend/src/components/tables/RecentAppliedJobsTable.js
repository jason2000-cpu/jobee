import React, { useState } from 'react';
import { featuredJobsDetails } from '../../utils/featuredJobsDetails';
import { IoLocationOutline } from "react-icons/io5";

function RecentAppliedJobsTable() {
  const [jobs, setJobs] = useState([...featuredJobsDetails]);

  // Example function for handling the action button click
  const handleAction = (jobId) => {
      alert(`Action clicked for job with id: ${jobId}`);
    // Perform any other action as needed
  };

  return (
    <div className="py-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 bg-gray-100">Job</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 bg-gray-100">Date Applied</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 bg-gray-100">Status</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 bg-gray-100">Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id} className="border-b hover:bg-gray-50">
                <td className="w-44 px-6 py-4 text-sm text-gray-800">
                  <div className='flex space-x-4  w-96 items-center'>
                    <img src={job.company_logo_url} className='h-20 w-20' alt={job.hiring_company} />
                    <div className='space-y-2'>
                      <div className='space-x-4'>
                        <span className='text-xl font-semibold'>{job.role}</span>
                        <span className='border rounded-xl px-1 bg-[#6200b338]'>{job.role_type}</span>
                      </div>
                      <div className='flex space-x-2'>
                        <IoLocationOutline size={20} />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">{job.dateApplied}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-2 py-1 rounded-full ${
                    job.status === 'Pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : job.status === 'Interview Scheduled'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {job.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <button
                    onClick={() => handleAction(job.id)}
                    className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentAppliedJobsTable;
