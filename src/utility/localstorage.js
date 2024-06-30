// utility/localstorage.js
const saveAppliedJobs = (job) => {
    const appliedJobs = getAppliedJobs();
    const exists = appliedJobs.find(appliedJob => appliedJob.id === job.id);
    // if job exists then do nothing else add it
    if (!exists) {
        appliedJobs.push({ id: job.id, job_title: job.job_title, company_name: job.company_name });
        localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));
    }
};

const getAppliedJobs = () => {
    const appliedJobs = localStorage.getItem('appliedJobs');
    if (appliedJobs) {
        return JSON.parse(appliedJobs);
    } else {
        return [];
    }
};

export { saveAppliedJobs, getAppliedJobs };
