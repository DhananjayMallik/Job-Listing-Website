import React from 'react'
import simple from '../../assets/simple.png';
import valentine from '../../assets/valentine.png';
import shield from '../../assets/sheild.png'
const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
        <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block'>The value that holds us true and to account</h1>


        <div className='grid gap-[10rem] grid-cols-3 items-center'>
        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] 
            bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={simple} className='w-[70%]'/>  
            </div>
            <span className='font-semibold text-textColor text-[18px]'>
              Simplicity
            </span>
          </div>
          <p className='text-[15px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
          Things beinf more beautiful simple are at the heart of everything we do.  
          </p>
        </div>

        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] 
            bg-[#f7edf5] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={valentine} className='w-[70%]'/>  
            </div>
            <span className='font-semibold text-textColor text-[18px]'>
              Simplicity
            </span>
          </div>
          <p className='text-[15px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
         We believe in making things better for everyone, even if just by a little bit!.
          </p>
        </div>

        <div className='singleGrid rounded-[10px] hover:bg-[#fcfae3] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] 
            bg-[#f3f2ad] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={shield} className='w-[70%]'/>  
            </div>
            <span className='font-semibold text-textColor text-[18px]'>
              Simplicity
            </span>
          </div>
          <p className='text-[15px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
        We work on the basics of creating trust which can be nurtured through authenticity and transparency!.
          </p>
        </div>
        
        </div>
        <div className='card mt-[2rem] flex justify-between bg-[#2a68ff] p-[5rem] rounded-[10px]'> 
        <div>
          <h1 className='text-[#2a68ff] text-[30px] font-bold'>Ready to Switch a carrer</h1>
          <h2 className='text-textColor text-[25px] font-bold'>Let's get Started</h2>
        </div>
        <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px]
        font-semibold text-[#2a68ff] hover:bg-white border-[#2a68ff]'>
            Get Started
          </button>
        </div>
    </div>
  )
}

export default Value
