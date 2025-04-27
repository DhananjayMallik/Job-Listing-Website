import React, { useState } from 'react';

const ApplicationForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Show message after submit
  };

  return (
    <div>
      {!submitted ? (
        <form className="mt-4 bg-gray-100 p-4 rounded" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-2 p-2 border rounded"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-2 p-2 border rounded"
            required
          />
          <input
            name="linkedin"
            type="url"
            className="w-full mb-2 p-2 border rounded"
            placeholder="LinkedIn Profile (https://linkedin.com/in/yourname)"
            required
          />
          <textarea
            placeholder="Why should we hire you?"
            className="w-full mb-2 p-2 border rounded"
            required
          />
          <label className="block mb-1 font-medium">Upload Resume:</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="w-full mb-4 p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      ) : (
        <p className="mt-4 text-green-600 font-semibold text-center">
          ✅ Application Submitted Successfully!
        </p>
      )}
    </div>
  );
};

export default ApplicationForm;
