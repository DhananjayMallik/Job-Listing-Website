
import { BiTimeFive } from 'react-icons/bi';

import { useNavigate } from 'react-router-dom';
const Job = ({ data }) => {
  // handle form showing 
 const navigate = useNavigate();
 const handleApply = () =>{
  navigate('/apply');
 }
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {data.length > 0 ? (
          data.map(({ id, image, title, time, location, company, desc, skills }) => (
            <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-[#2a68ff] shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
              <span className='flex justify-between items-center gap-4'>
                <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
                <span className='flex items-center text-[#ccc] gap-1'>
                  <BiTimeFive /> {time}
                </span>
              </span>
              <h6 className='text-[#ccc]'>{location}</h6>
              <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                {desc}
              </p>
              <div className='company flex items-center gap-2'>
                <img src={image} alt='company Logo' className='w-[10%]' />
                <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
              </div>
              <p className='text-sm mb-4'>Skills: {skills}</p>

              <button 
              className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-[#252b36] hover:bg-white group-hover/item:text-[#252b36] group-hover:text-white cursor-pointer'
              onClick={handleApply}
              >Apply Now
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No jobs found.</p>
        )}
      </div>
    </div>
    
  );
};

export default Job;
