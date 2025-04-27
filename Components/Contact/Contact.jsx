import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className="border-2 mb-12 w-[90%] md:w-[600px] mx-auto rounded-3xl p-6 shadow-xl">
      <div className="text-center text-2xl pt-4 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>
      
      <div className="my-10 flex flex-col md:flex-row gap-10 text-sm">
        <div className="flex flex-col justify-center items-start gap-6 w-full">
          <p className="font-semibold text-lg text-gray-600">Our Office</p>
          <p className="text-gray-500">
            721507 Jhargram <br />
            Hospital More, Jhargram
          </p>
          <p className="text-gray-500">
            Tel: 03221 255 145 <br />
            super[dot]jhargramsdh[at]gmail[dot]com
          </p>
          <p className="font-semibold text-lg text-gray-600">Careers at JobSeeker</p>
          <p className="text-gray-500">
            Learn more about our teams and job openings
          </p>
          <Link to="/">
            <button className="border rounded-full cursor-pointer border-black px-8 py-3 text-sm hover:bg-black hover:text-white transition-all duration-500">
              Explore Jobs
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact
