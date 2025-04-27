import React from 'react'
import Company1 from '../../assets/company1.png';
import Company2 from '../../assets/company2.jpg';
import Company3 from '../../assets/company3.png';
import Company4 from '../../assets/company4.jpg';
import Company5 from '../../assets/company5.png';
import Company6 from '../../assets/company6.jpg';
import Company7 from '../../assets/company7.png';
import Company8 from '../../assets/company8.png';
import Company9 from '../../assets/company9.jpg';
import Company10 from '../../assets/company10.png';
import Company11 from '../../assets/company11.png';
import Company12 from '../../assets/company12.png';





const Company = () => {
  const companies = [
    Company1, Company2, Company3, Company4, Company5, Company6,
    Company7, Company8, Company9, Company10, Company11, Company12
  ];
  return (
    <div className="pt-24 px-4 py-10 mb-12 max-w-[1200px] mx-auto">
      <h2 className="text-3xl font-bold text-center text-[#2a68ff] mb-12">Our Hiring Partners</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {companies.map((logo, index) => (
          <div
            key={index}
            className="border-2 border-gray-300 bg-white rounded-xl shadow-xl p-3 flex items-center justify-center hover:bg-amber-100 grayscale hover:grayscale-0 transition-all duration-300 hover:-translate-y-1"
          >
            <img
              src={logo}
              alt={`Company ${index + 1}`}
              className="w-full h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Company
