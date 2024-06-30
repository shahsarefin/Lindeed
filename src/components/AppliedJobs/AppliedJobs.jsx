import React, { useEffect, useState } from 'react';
import { getAppliedJobs } from '../../utility/localstorage';
import { Link } from 'react-router-dom';

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        const jobs = getAppliedJobs();
        setAppliedJobs(jobs);
    }, []);

    if (appliedJobs.length === 0) {
        return <div>No applied jobs found.</div>;
    }

    return (
        <div className="container mx-auto p-4" style={{ marginLeft: '10%', marginRight: '10%' }}>
            <h1 className="text-4xl font-bold mb-8">Applied Jobs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {appliedJobs.map(job => (
                    <div key={job.id} className="bg-white shadow-xl p-8 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4">{job.job_title}</h2>
                        <p className="text-gray-600">{job.company_name}</p>
                        <Link to={`/job/${job.id}`} className="text-blue-500 hover:underline">View Job Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AppliedJobs;
