import React from 'react';

const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type } = job;

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure>
                <img src={logo} alt={company_name} className="w-20 h-20 object-contain" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p className="text-lg">{company_name}</p>
                <p>{remote_or_onsite} - {location}</p>
                <p>Type: {job_type}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default Job;
