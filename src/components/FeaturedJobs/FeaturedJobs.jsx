import React, { useEffect, useState } from 'react';
import Job from '../Job/Job.jsx';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        fetch('/data/jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
            .catch(err => console.error("Failed to fetch jobs:", err));
    }, []);

    const visibleJobs = showMore ? jobs : jobs.slice(0, 4);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Featured Jobs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {visibleJobs.map((job, index) => (
                    <React.Fragment key={job.id}>
                        <Job job={job} />
                        {index === 3 && !showMore && jobs.length > 4 && (
                            <div className="flex justify-center items-center w-full col-span-2">
                                <button
                                    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded"
                                    onClick={() => setShowMore(true)}
                                >
                                    See All Jobs
                                </button>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default FeaturedJobs;
