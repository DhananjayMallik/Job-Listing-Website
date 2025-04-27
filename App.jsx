import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Search from './Components/SearchDiv/Search';
import Value from './Components/ValueDiv/Value';
import Job from './Components/JobDiv/Job';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import Company from './Components/Company/Company';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import Application from './Components/Application/Application';
// Job data moved to App.jsx
import logo1 from './assets/logo1.png';
import logo2 from './assets/logo2.png';
import logo3 from './assets/logo3.png';
import logo4 from './assets/logo4.png';
import logo5 from './assets/logo5.png';
import logo6 from './assets/logo6.png';
import logo7 from './assets/logo7.png';
import logo8 from './assets/logo8.png';

// Job Data
const jobData = [
  { id: 1, image: logo1, title: 'Web Developer', time: 'Now', location: 'Canada', company: 'Novac Linus Co.', skills: 'HTML , TailwindCSS , Javascript , React-js' },
  { id: 2, image: logo2, title: 'Frontend Developer', time: '20Days', location: 'Bangalore', company: 'Cisco Pvt Ltd', skills: 'Javascript , React-js , Redux' },
  { id: 3, image: logo3, title: 'UI Designer', time: '7Days', location: 'Manchester', company: 'Liquid Accesments Pvt Ltd', skills: 'Figma , TailwindCSS , Sketch, Adobe XD' },
  { id: 4, image: logo4, title: 'Product Designer', time: '15Days', location: 'Norway', company: 'Nome And Sons', skills: 'UI/UX, prototyping, wireframing' },
  { id: 5, image: logo5, title: 'Software Engineer', time: '15Days', location: 'Singapore', company: 'Amazon Pvt Co.', skills: 'C/C++/Java, OS, System Design' },
  { id: 6, image: logo6, title: 'Backend Developer', time: '15Days', location: 'Mumbai', company: 'Salesforce Pvt Co.', skills: 'Javascript, Node.js, MongoDB, Express.js' },
  { id: 7, image: logo7, title: 'Data Scientist', time: '5days', location: 'Germany', company: 'Cloud Captain Co.in', skills: 'Math, Statistics, Python, SQL' },
  { id: 8, image: logo8, title: 'Test Developer', time: '30days', location: 'Bangkok', company: 'Apmoysis Co.in', skills: 'Python, Java, JavaScript, Appium' },
  {id:9 , image:logo8 , title:'Data Analyst' , time:'14Hrs', location :'Chennai' , company : 'Flipkart.com' , skills : 'Statistical Analysis  SQL, Python,'},
  {id:10 , image:logo8 , title:'Researcher' , time:'14Hrs', location :'Coimbature' , company : 'Legacy Research Solutions ' , skills : 'Analytical Skills , Data Collection,Critical Thinking'},
  {id:11 , image:logo8 , title:'Content Writer' , time:'14Hrs', location :'Kolkata' , company : 'EY LTD' , skills : 'Strong In English Communication'},
  {id:12 , image:logo8 , title:'Data Mining' , time:'14Hrs', location :'Hydrabad' , company : 'Alteryx Pvt Co' , skills : 'AI , ML , DataBase Understanding'},


];
localStorage.setItem('JobData' , JSON.stringify(jobData));
// const data = JSON.parse(localStorage.getItem('JobData'));
// console.log(data);

const App = () => {
  const [filteredJobs, setFilteredJobs] = useState(jobData); // store job data and pass Job Data through props --->
  const [isLoggedIn , setIsLoggedIn] = useState(false); 
  const handleLogin = () =>setIsLoggedIn(true);

  
  // Function to filter jobs based on search criteria
  const handleSearch = (filters) => {
    const { searchJob, company, location } = filters;

    const filtered = jobData.filter((job) => {
      return (
        (searchJob === '' || job.title.toLowerCase().includes(searchJob.toLowerCase())) &&
        (company === '' || job.company.toLowerCase().includes(company.toLowerCase())) &&
        (location === '' || job.location.toLowerCase().includes(location.toLowerCase()))
      );
    });

    setFilteredJobs(filtered);
  };


  
  return (
    
      <div className='w-[85%] m-auto bg-white'>
        <Navbar isLoggedIn={isLoggedIn}/>

        <Routes>
          <Route path="/" element={
            <>
              <Search onSearch={handleSearch} />
              <Job data={filteredJobs} />
              <Value />
            </>
          } />
        
          <Route path='/Companies' element={<Company/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login  onLogin = {handleLogin}/>} />
          {/* add new job on existing job or after filterjob we can add newJob */}
          <Route
        path="/admin"
        element={
        <AdminDashboard
      addJob={(newJob) => setFilteredJobs((prevJobs) => [newJob, ...prevJobs])}
    />
  }
/>
<Route path="/apply" element={<Application />} />   
        </Routes>

        <Footer />
      </div>
    
  );
};

export default App;
