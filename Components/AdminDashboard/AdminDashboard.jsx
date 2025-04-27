import React, { useState } from 'react';

import logo8 from '../../assets/logo8.png'; // Default logo

const AdminDashboard = ({ addJob }) => {
    // craate a job section details --->

  const [job, setJob] = useState({
    title: '',
    company: '',
    location: '',
    time: '',
    skills: '',
  });

  const [myJobs, setMyJobs] = useState([]); // Store jobs added by admin



  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  // After click post a new job 
  const handleSubmit = (e) => {
    e.preventDefault();
    // create a job and add details into newwJob section -->
    const newJob = {
      id: Date.now(),
      image: logo8,
      ...job,
    };

        // Send to global job board
    addJob(newJob);     
    // Also update local admin list
    setMyJobs([newJob, ...myJobs]); 
    alert('Job Posted Successfully!');
    // Reset total form -->
    setJob({ title: '', company: '', location: '', time: '', skills: '' }); 
  };

  {/*Job Post section below*/}

  
  return (
    
    <div className="p-6 max-w-4xl mx-auto bg-white shadow rounded mt-6">
      <h2 className="text-2xl font-bold mb-4">Post a New Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          className="w-full border px-4 py-2 rounded"
          value={job.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          className="w-full border px-4 py-2 rounded"
          value={job.company}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="w-full border px-4 py-2 rounded"
          value={job.location}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="time"
          placeholder="Time (e.g., 10 Days, Now)"
          className="w-full border px-4 py-2 rounded"
          value={job.time}
          onChange={handleChange}
          required
        />
        <textarea
          name="skills"
          placeholder="Required Skills (comma separated)"
          className="w-full border px-4 py-2 rounded"
          value={job.skills}
          onChange={handleChange}
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded cursor-pointer">
          Post Job
        </button>
      </form>

      {/* My Jobs Section */}
        {/* here job come and job is empty or not check then add job details into joob section*/}
      {myJobs.length > 0 && (
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">My Jobs</h3>
          <div className="grid gap-4">
            {/* to access all my jobs and details then add my admin section*/}
            {myJobs.map((job) => (
              <div key={job.id} className="p-4 border rounded shadow-md bg-gray-50">
                <div className="flex items-center gap-4">
                  <img src={job.image} alt="Company Logo" className="w-12 h-12 rounded-full" />
                  <div>
                    <h4 className="font-bold text-lg">{job.title}</h4>
                    <p className="text-gray-600">{job.company} • {job.location}</p>
                    <p className="text-sm text-gray-500">⏰ {job.time}</p>
                    <p className="text-sm mt-1"><strong>Skills:</strong> {job.skills}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
