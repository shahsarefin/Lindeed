import React from 'react';
import { FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';

const Job = ({ job }) => {
    return (
        <div className="card bg-base-100 shadow-xl p-4">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                    <img 
                        src={job.logo} 
                        alt={job.company_name} 
                        className="w-10 h-10 mr-4 object-contain" 
                    />
                    <div>
                        <h3 className="card-title text-lg font-semibold">{job.job_title}</h3>
                        <p className="text-gray-600">{job.company_name}</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="mr-2 text-gray-600" />
                <span>{job.location}</span>
            </div>
            <div className="flex items-center mb-4">
                <FaDollarSign className="mr-2 text-gray-600" />
                <span>{job.salary}</span>
            </div>
            <div className="flex space-x-2 mb-4">
                <button className="bg-gray-200 text-gray-800 px-2 py-1 rounded">{job.job_type}</button>
                <button className="bg-gray-200 text-gray-800 px-2 py-1 rounded">{job.remote_or_onsite}</button>
            </div>
            <div className="flex justify-between">

            <button className="bg-gradient-to-r from-indigo-500 to to-blue-500 text-white px-4 py-2 rounded">
                    Show Details
                </button>

                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded">
                    Apply Now
                </button>
                
            </div>
        </div>
    );
};

export default Job;
