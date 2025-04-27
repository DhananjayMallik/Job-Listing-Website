import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='footer p-[3rem] md:p-[5rem] mb-4 bg-[#2a68ff] rounded-[10px] grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 m-auto'>
      
      {/* Logo Section */}
      <div>
        <div className='logoDiv'>
          <h1 className='logo text-[25px] text-white pb-[1.5rem]'><strong>Job</strong>Search</h1>
        </div>
        <p className='text-white pb-[13px] opacity-70 leading-7'>
          We always help seekers and companies find the best jobs and candidates.
        </p>
      </div>

      {/* Company */}
      <div className='grid gap-3'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>Company</span>
        <div className='grid gap-3'>
          <li className='text-white opacity-[.7] hover:opacity-100'>About us</li>
          <li className='text-white opacity-[.7] hover:opacity-100'>Features</li>
          <li className='text-white opacity-[.7] hover:opacity-100'>News</li>
          <li className='text-white opacity-[.7] hover:opacity-100'>FAQ</li>
        </div>
      </div>

      {/* Resources */}
      <div className='grid gap-3'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>Resources</span>
        <div className='grid gap-3'>
          <li className='text-white opacity-[.7] hover:opacity-100'>Account</li>
          <li className='text-white opacity-[.7] hover:opacity-100'>Support Center</li>
          <li className='text-white opacity-[.7] hover:opacity-100'>Feedback</li>
          <li className='text-white opacity-[.7] hover:opacity-100'>Contact</li>
        </div>
      </div>

      {/* Support */}
      <div className='grid gap-3'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>Support</span>
        <div className='grid gap-3'>
          <li className='text-white opacity-[.7] hover:opacity-100'>Events</li>
          <li className='text-white opacity-[.7] hover:opacity-100'>Promo</li>
          <li className='text-white opacity-[.7] hover:opacity-100'>Request Demo</li>
          <li className='text-white opacity-[.7] hover:opacity-100'>Careers</li>
        </div>
      </div>

      {/* Contact Info */}
      <div className='grid gap-3'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>Contact Info</span>
        <div className='text-[14px] text-white'>
          <small>dhananjayMallik@career.com</small>
        </div>
        <div className='flex gap-4 mt-2 text-white text-xl'>
       

<a href="https://www.facebook.com/dhananjay.mallik.7509" target="_blank" rel="noopener noreferrer">
  <AiFillFacebook className="text-2xl cursor-pointer hover:text-blue-600" />
</a>

<a href="https://www.instagram.com/mallikdhananjay884?igsh=dWN6OG1ueHRiZjFu" target="_blank" rel="noopener noreferrer">
  <AiFillInstagram className="text-2xl cursor-pointer hover:text-pink-500" />
</a>

        </div>
      </div>
    </div>
  )
}

export default Footer;
