import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);

    useEffect(() => {
        fetch('/data/jobs.json')
            .then(res => res.json())
            .then(data => {
                const jobData = data.find(job => job.id === parseInt(id));
                setJob(jobData);
            })
            .catch(err => console.error("Failed to fetch job details:", err));
    }, [id]);

    if (!job) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4" style={{ marginLeft: '10%', marginRight: '10%' }}>
            <div className="bg-white shadow-xl p-8 rounded-lg flex flex-wrap">
                <div className="w-full md:w-7/12 pr-8">
                    <div className="flex items-center mb-4">
                        <img 
                            src={job.logo} 
                            alt={job.company_name} 
                            className="w-20 h-20 mr-4 object-contain" 
                        />
                        <div>
                            <h1 className="text-4xl font-bold mb-2">{job.job_title}</h1>
                            <p className="text-gray-600 text-xl">{job.company_name}</p>
                        </div>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-2xl font-semibold mb-2">Job Description</h2>
                        <p className="text-gray-700">{job.job_description}</p>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-2xl font-semibold mb-2">Job Responsibilities</h2>
                        <p className="text-gray-700">{job.job_responsibility}</p>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-2xl font-semibold mb-2">Educational Requirements</h2>
                        <p className="text-gray-700">{job.educational_requirements}</p>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-2xl font-semibold mb-2">Experience</h2>
                        <p className="text-gray-700">{job.experiences}</p>
                    </div>
                </div>
                <div className="w-full md:w-5/12 pl-8">
                    <div className="mb-4">
                        <h2 className="text-2xl font-semibold mb-2">Location</h2>
                        <p className="text-gray-700">{job.location}</p>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-2xl font-semibold mb-2">Salary</h2>
                        <p className="text-gray-700">{job.salary}</p>
                    </div>
                    <div className="mb-4">
                        <button className="bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2">{job.job_type}</button>
                        <button className="bg-gray-200 text-gray-800 px-2 py-1 rounded">{job.remote_or_onsite}</button>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
                        <p className="text-gray-700"><strong>Phone:</strong> {job.contact_information.phone}</p>
                        <p className="text-gray-700"><strong>Email:</strong> {job.contact_information.email}</p>
                        <p className="text-gray-700"><strong>Address:</strong> {job.contact_information.address}</p>
                    </div>
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded mt-4">
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
