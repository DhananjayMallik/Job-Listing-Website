import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";
import { BsHouseDoorFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const Search = ({ onSearch }) => {
  const [searchJob, setSearchJob] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');

  // handle my search Preference -->
  const handleSearch = () => {
    onSearch({ searchJob, company, location });
  };

  const ClearJob = () => {
    setSearchJob('');
    setCompany('');
    setLocation('');
    onSearch({ searchJob: '', company: '', location: '' }); // Reset filter
  };

  return (
    <div className='searchDiv grid gap-10 bg-[#f1f4f8] rounded-[10px] p-[3rem]'>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg'>

          <div className='flex gap-2 items-center'>
            <AiOutlineSearch className='text-[30px] icon' />
            <input
              type='text'
              className='bg-transparent text-blue-500 focus:outline-none w-[100%]'
              placeholder='Search Job Here...'
              value={searchJob}
              onChange={(e) => setSearchJob(e.target.value)}
            />
          </div>

          <div className='flex gap-2 items-center'>
            <BsHouseDoorFill className='text-[30px] icon' />
            <input
              type='text'
              className='bg-transparent text-blue-500 focus:outline-none w-[100%]'
              placeholder='Search by company...'
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <div className='flex gap-2 items-center'>
            <CiLocationOn className='text-[30px] icon' />
            <input
              type='text'
              className='bg-transparent text-blue-500 focus:outline-none w-[100%]'
              placeholder='Search by location...'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <button onClick={handleSearch} className='bg-[#2a68ff] p-5 px-10 rounded-[10px] text-white hover:bg-orange-500 mr-6'>Search</button>
          <span className='text-[#a1a1a1] cursor-pointer ml-8' onClick={ClearJob}>Clear All</span>
        </div>
      </form>
    </div>
  );
};

export default Search;
