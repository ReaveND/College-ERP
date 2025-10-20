import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoImg from "../assets/HomeIMG/logo.jpeg";
import CampImg from '../assets/HomeIMG/campusview.jpg';
import eventimg from '../assets/HomeIMG/event.jpg';


import AutoSlider from "./photosilde.jsx";
import CourseCard from "./coursecard.jsx"
import Header from './Header.jsx';
import Login from '../Admin/login.jsx';


const Web = () => {
    return(
        <>
          <div className="bg-gray-100 shadow-md p-4">
  {/* Grayish container for header */}
  <div className="bg-gray-200 px-10 py-5 rounded-lg flex items-center">
  <div className="flex items-center space-x-4">
  {/* College Logo */}
  <img
    src={LogoImg}
    alt="College Logo"
    className="h-20 w-20 md:h-24 md:w-24 ml-2 object-cover rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
  />

  {/* College Name + Featured Statement */}
  <div className="flex flex-col justify-center">
    {/* College Name with underline */}
    <span className="text-2xl md:text-3xl  font-extrabold text-blue-950 border-b-2 border-blue-950 pb-1">
      Vedanta Institute of Technology
    </span>

    {/* Featured statement below the name */}
    <span className="text-sm md:text-base mt-1 text-gray-700">
      <Header/>
    </span>
  </div>
</div>


  {/* Right: Dashboard button */}
  <NavLink
    to="/Login"
    className="ml-auto mr-4 bg-blue-950 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
  >
    Dashboard
  </NavLink>
</div>


  {/* Navigation links */}
  <ul className="flex flex-wrap justify-center mt-3 space-x-6 text-gray-800 font-medium">
    <li>
      <NavLink
        to="/"
        className="rounded hover:bg-yellow-600 px-4 py-2 transition"
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/AcademicPage"
        className="rounded hover:bg-yellow-600 px-4 py-2 transition"
      >
        Academics
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/FacultyPage"
        className="rounded hover:bg-yellow-600 px-4 py-2 transition"
      >
        Faculty
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/PlacementPage"
        className="rounded hover:bg-yellow-600 px-4 py-2 transition"
      >
        Placement
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/Admission"
        className="rounded hover:bg-yellow-600 px-4 py-2 transition"
      >
        Admission
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/ContactUs"
        className="rounded hover:bg-yellow-600 px-4 py-2 transition"
      >
        Contact
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/AboutUs"
        className="rounded hover:bg-yellow-600 px-4 py-2 transition"
      >
        About
      </NavLink>
    </li>
  </ul>
</div>


            <div className="w-full bg-blue-950 overflow-hidden py-2">
                <div
                  style={{
                    display: 'inline-block',
                    whiteSpace: 'nowrap',
                    animation: 'marquee 20s linear infinite',
                  }}
                >
                  <span className="mx-8 text-white">🎓 Admissions Open 2025!</span>
                  <span className="mx-8 text-white">📢 Annual Tech Fest Coming Soon!</span>
                  <span className="mx-8 text-white">💡 Scholarship Applications Accepted!</span>
                </div>

                <style>
                  {`
                    @keyframes marquee {
                      0% { transform: translateX(100%); }
                      100% { transform: translateX(-100%); }
                    }
                  `}
                </style>
              </div>


            
            <div className='relative w-full'> 
            <AutoSlider />
                <div className="absolute inset-0 flex flex-col justify-center items-start ml-[10%] py-[20%]">
  {/* Text box */}
  <div className="bg-black/45 p-10 rounded-xl max-w-[85%] absolute bottom-30 left-1">
    <h1 className="text-white text-[35px] font-extrabold drop-shadow-lg leading-tight mb-4">
      Simplifying Education with Technology.
    </h1>
    <p className="text-gray-200 text-lg font-medium leading-relaxed">
      Unlock your potential with <span className="text-white font-semibold">world-class education</span>, innovative research, and a vibrant community.
      At Uneza University, we inspire leaders, foster innovation, and prepare you for success in a rapidly evolving world.
      Join us and shape your future today!
    </p>
  </div>
</div>

            </div>
            
            {/* Campus View */}
<div className="campus max-w-7xl mx-auto px-6 py-12 border-b-2 border-gray-300">
  <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-8 text-center md:text-left">
    Campus View
  </h1>

  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
    {/* Image */}
    <img
      src={CampImg}
      alt="Campus"
      className="h-[60vh] w-full md:w-[45vw] rounded-xl shadow-lg border-4 border-gray-200 object-cover hover:scale-105 transition-transform duration-500"
    />

    {/* Text Content */}
    <div className="flex flex-col space-y-4 md:mx-6">
      <h2 className="text-3xl md:text-4xl font-semibold text-blue-900">
        Outlook about Vedanta
      </h2>
      <p className="text-gray-700 text-justify text-base md:text-lg leading-relaxed">
        Vedanta Institute of Technology is a leading institution committed to excellence in 
        engineering and technology education. The college offers modern classrooms, well-equipped 
        laboratories, and a rich library to support both learning and research. Experienced faculty 
        guide students through theoretical and practical knowledge, fostering strong technical skills. 
        The institute emphasizes innovation, skill development, and holistic growth, encouraging 
        participation in workshops, seminars, and extracurricular activities. With a dynamic and 
        supportive environment, Vedanta Institute of Technology prepares students to excel academically, 
        professionally, and personally.
      </p>
      <NavLink
        to="/campusView"
  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-lg shadow-md w-max transition-all duration-300"
      >
        Know More
      </NavLink>

    </div>
  </div>
</div>

{/* Event Life Section */}
<div className="event-life max-w-7xl mx-auto px-6 py-12 border-b-2 border-gray-300">
  <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-8 text-center md:text-left">
    Event Life
  </h1>

  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
    {/* Event Text */}
    <div className="flex flex-col space-y-4 md:mx-6 order-1 md:order-1">
      <h2 className="text-3xl md:text-4xl font-semibold text-blue-900">
        Life at Vedanta Institute
      </h2>
      <p className="text-gray-700 text-justify text-base md:text-lg leading-relaxed">
        At Vedanta Institute of Technology, student life is vibrant and full of opportunities. 
        Our campus hosts a wide range of events including cultural fests, tech workshops, 
        seminars, sports competitions, and community service activities. Students are encouraged 
        to participate, collaborate, and develop leadership skills in a lively and supportive environment. 
        Experience a campus culture where learning, creativity, and fun come together to shape well-rounded individuals.
      </p>
      <NavLink
        to="/EventLife"
  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-lg shadow-md w-max transition-all duration-300"
      >
        Explore
      </NavLink>
    </div>

    {/* Event Image */}
    <img
      src={eventimg}
      alt="Event Life"
      className="h-[60vh] w-full md:w-[45vw] rounded-xl shadow-lg border-4 border-gray-200 object-cover hover:scale-105 transition-transform duration-500 order-2 md:order-2"
    />
  </div>
</div>

{/* Academic Programs */}
<div className="academics max-w-7xl mx-auto px-6 py-12 border-b-2 border-gray-300">
  <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-10 text-center md:text-left">
    Academics & Programs
  </h1>
  <CourseCard/>
  <NavLink
        to="/AcademicPage"
  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5  rounded-lg shadow-md w-max transition-all duration-300"
      >
        Know More
      </NavLink>
  
</div>

  

    <footer className="bg-blue-950 text-gray-300 mt-16">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        
        {/* College Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">Your College Name</h2>
          <p className="text-gray-400">
            Excellence in Education, Innovation, and Research.  
            Empowering students with knowledge, skills, and values to lead in a dynamic world.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-300 transition">Home</a></li>
            <li><a href="/AboutUs" className="hover:text-blue-300 transition">About Us</a></li>
            <li><a href="/Admission" className="hover:text-blue-300 transition">Admissions</a></li>
            <li><a href="/ContactUs" className="hover:text-blue-300 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">Contact Us</h2>
          <p>📍 123 College Road, City, State, India</p>
          <p>📧 info@yourcollege.edu</p>
          <p>📞 +91 98765 43210</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-950 py-4 text-center text-gray-400 text-sm border-t border-blue-800">
        &copy; {new Date().getFullYear()} Your College Name. All Rights Reserved.
      </div>
    </footer>
        </>
    )

}
export default Web;

