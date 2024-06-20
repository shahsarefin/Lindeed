import React, { useEffect, useState } from 'react';
import Job from '../Job/Job.jsx';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('/data/jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
            .catch(err => console.error("Failed to fetch jobs:", err));
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Featured Jobs: {jobs.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {jobs.map(job => (
                    <Job key={job.id} job={job} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedJobs;
