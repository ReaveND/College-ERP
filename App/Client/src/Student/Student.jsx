import React from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import "../assets/css/std.css";
import Logo from "../assets/logo.png";

// TypingIntro Component
const TypingIntro = () => {
  const lines = ["Welcome", "to", "Student Portal"];
  const typingSpeed = 80;
  const pauseAfterLine = 1000;
  const pauseAfterSet = 2000;

  const [displayLines, setDisplayLines] = useState(["", "", ""]);

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let buffer = ["", "", ""];

    const typeNextChar = () => {
      if (lineIndex >= lines.length) {
        setTimeout(() => {
          buffer = ["", "", ""];
          setDisplayLines(["", "", ""]);
          lineIndex = 0;
          charIndex = 0;
          typeNextChar();
        }, pauseAfterSet);
        return;
      }

      const currentLine = lines[lineIndex];
      if (charIndex < currentLine.length) {
        buffer[lineIndex] += currentLine.charAt(charIndex);
        setDisplayLines([...buffer]);
        charIndex++;
        setTimeout(typeNextChar, typingSpeed);
      } else {
        lineIndex++;
        charIndex = 0;
        setTimeout(typeNextChar, pauseAfterLine);
      }
    };

    typeNextChar();
  }, []);

  return (
    <div className="text-yellow-600 [text-shadow:_0px_0px_6px_#e0b159] font-mono flex flex-col items-center justify-center space-y-2 text-3xl sm:text-4xl md:text-5xl font-extrabold w-full max-w-[90vw] sm:max-w-xl text-center">
      <span>{displayLines[0]}</span>
      <span>{displayLines[1]}</span>
      <span>{displayLines[2]}</span>
    </div>
  );
};

const Student = () => {
    const location = useLocation();
    const hideHeader = ['/Dashboard', '/StudentProfile', '/ExamForm', '/ResultCard', '/AssignmentPage', '/SemExamFeesClearance', '/AdmitCard', '/StudyMaterials', '/Library', '/AttendancePage'].includes(location.pathname);
    const [,setShowProfile] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
    const show = ['/Dashboard', '/StudentProfile', '/ExamForm', '/ResultCard', '/AssignmentPage', '/SemExamFeesClearance', '/AdmitCard', '/StudyMaterials', '/Library', '/AttendancePage'].includes(location.pathname);
    setShowProfile(show);
    }, [location.pathname]);

    return(
        <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
            {/* Sidebar */}
            <aside className="fixed top-0 left-0 h-screen w-68 shadow-lg z-20 p-4 pt-1 hidden md:block">
                <div className="flex justify-center items-center">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-16 h-16 object-cover rounded-full mx-auto"
                    />
                    <h3 className="text-2xl text-blue-950 font-bold text-center mb-1 py-2 rounded-tl-2xl rounded-br-2xl mr-2">
                        Student Panel
                    </h3>
                </div>
                <hr className="bg-yellow-600 h-0.5 mb-4" />
                <nav className="space-y-2 font-sans text-sm font-semibold text-gray-700">

                <NavLink
                to="/Dashboard"
                onClick={(e) => {
                    e.preventDefault(); // prevent default NavLink behavior
                    navigate('/Dashboard');
                    setShowProfile(true);
                }}
                className={`block px-5 py-2 rounded transition-colors ${
                    location.pathname === '/Dashboard'
                    ? 'bg-blue-950 text-white font-bold'
                    : 'hover:bg-gray-200'
                }`}
                >
                    <i className="fa-solid fa-gauge-high mr-3"></i>Dashboard
                </NavLink>

                <NavLink
                to="/StudentProfile"
                onClick={(e) => {
                    e.preventDefault();
                    navigate('/StudentProfile');
                    setShowProfile(true);
                }}
                className={`block px-5 py-2 rounded transition-colors ${
                    location.pathname === '/StudentProfile'
                    ? 'bg-blue-950 text-white font-bold'
                    : 'hover:bg-gray-200'
                }`}
                >
                    <i className="fa-regular fa-user mr-3"></i>My Profile
                </NavLink>

                <NavLink 
                to="/StudyMaterials"
                onClick={(e) => {
                    e.preventDefault();
                    navigate('/StudyMaterials');
                    setShowProfile(true);
                }}
                className={`block px-5 py-2 rounded transition-colors ${
                    location.pathname === '/StudyMaterials'
                    ? 'bg-blue-950 text-white font-bold'
                    : 'hover:bg-gray-200'
                }`}
                >
                    <i className="fa-regular fa-note-sticky mr-3"></i>Study Materials
                </NavLink>

                <NavLink
                to="/Library"
                onClick={(e) => {
                    e.preventDefault(); 
                    navigate('/Library');
                    setShowProfile(true);
                }}
                className={`block px-5 py-2 rounded transition-colors ${
                    location.pathname === '/Library'
                    ? 'bg-blue-950 text-white font-bold'
                    : 'hover:bg-gray-200'
                }`}
                >
                    <i className="fa-solid fa-book mr-3"></i>Library
                </NavLink>

                <NavLink 
                to="/AttendancePage"
                onClick={(e) => {
                    e.preventDefault(); 
                    navigate('/AttendancePage');
                    setShowProfile(true);
                }}
                className={`block px-5 py-2 rounded transition-colors ${
                    location.pathname === '/AttendancePage'
                    ? 'bg-blue-950 text-white font-bold'
                    : 'hover:bg-gray-200'
                }`}                >
                    <i className="fa-solid fa-person-chalkboard mr-3"></i>Attendance
                </NavLink>

                <NavLink
                to="/AssignmentPage"
                onClick={(e) => {
                    e.preventDefault(); // prevent default NavLink behavior
                    navigate('/AssignmentPage');
                    setShowProfile(true);
                }}
                className={`block px-5 py-2 rounded transition-colors ${
                    location.pathname === '/AssignmentPage'
                    ? 'bg-blue-950 text-white font-bold'
                    : 'hover:bg-gray-200'
                }`}
                >
                <i className="fa-solid fa-pen-ruler mr-3"></i>Assignment
                </NavLink>

                <NavLink
                to="/ExamForm"
                onClick={(e) => {
                    e.preventDefault(); // prevent default NavLink behavior
                    navigate('/ExamForm');
                    setShowProfile(true);
                }}
                className={`block px-5 py-2 rounded transition-colors ${
                    location.pathname === '/ExamForm'
                    ? 'bg-blue-950 text-white font-bold'
                    : 'hover:bg-gray-200'
                }`}
                >
                <i className="fab fa-wpforms mr-3"></i>Exam Form
                </NavLink>

                <NavLink
                to="/AdmitCard"
                onClick={(e) => {
                    e.preventDefault(); // prevent default NavLink behavior
                    navigate('/AdmitCard');
                    setShowProfile(true);
                }}
                className={`block px-5 py-2 rounded transition-colors ${
                    location.pathname === '/AdmitCard'
                    ? 'bg-blue-950 text-white font-bold'
                    : 'hover:bg-gray-200'
                }`}
                >
                    <i className="fa-solid fa-id-card mr-3"></i>Admit Card
                </NavLink>

                {/* <NavLink className="block px-5 py-2 rounded text-gray-400 cursor-not-allowed">
                    <i className="fa-solid fa-desktop mr-3"></i>Online Exam
                </NavLink> future scope */} 

                <NavLink
                to="/ResultCard"
                onClick={(e) => {
                    e.preventDefault(); // prevent default NavLink behavior
                    navigate('/ResultCard');
                    setShowProfile(true);
                }}
                className={`block px-5 py-2 rounded transition-colors ${
                    location.pathname === '/ResultCard'
                    ? 'bg-blue-950 text-white font-bold'
                    : 'hover:bg-gray-200'
                }`}
                >
                    <i className="fa-solid fa-square-poll-horizontal mr-3"></i>Result
                </NavLink>

                <NavLink
                to="/SemExamFeesClearance"
                onClick={(e) => {
                    e.preventDefault(); // prevent default NavLink behavior
                    navigate('/SemExamFeesClearance');
                    setShowProfile(true);
                }}
                className={`block px-5 py-2 rounded transition-colors ${
                    location.pathname === '/SemExamFeesClearance'
                    ? 'bg-blue-950 text-white font-bold'
                    : 'hover:bg-gray-200'
                }`}
                >
                    <i className="fa-solid fa-money-check-dollar mr-3"></i>Sem/Exam Fees Clearance
                </NavLink>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 md:ml-68 px-4 sm:px-6 lg:px-6 py-4">
                <div className="max-w-screen-xl mx-auto bg-white shadow-md rounded-md p-6 h-full">
                
                {/* Header */}
                {!hideHeader &&(
                    <>
                        <div className="bg-blue-950 flex flex-col sm:flex-row items-center justify-between px-4 py-4 rounded-md mb-6 gap-4">
                        <img
                            src={Logo}
                            alt="Logo"
                            className="w-24 h-24 object-cover rounded-full border-4 border-[#e9e9e9]"
                        />
                        <h2 className="lg:text-4xl text-white sm:text-2xl font-bold text-center sm:text-left flex-1 sm:ml-0 lg:ml-5">
                            Vedanta Institute of Technology
                        </h2>
                        <button className="h-11 px-6 bg-yellow-600 text-white text-lg rounded-md duration-700 hover:rounded-3xl whitespace-nowrap cursor-pointer transition-all hover:scale-105">
                            <a href="tel:+91-9064285877">Contact Us</a>
                        </button>
                        <button className="h-11 px-6 bg-yellow-600 text-white text-lg rounded-md duration-700 hover:rounded-3xl whitespace-nowrap cursor-pointer transition-all hover:scale-105">
                            <a href="/">Logout</a>
                        </button>
                        </div>
                        <div className="w-full max-w-[90vw] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl bg-gray-200 shadow mx-auto px-4 sm:px-6 py-6 mt-10 sm:mt-20 flex flex-col sm:flex-row justify-center items-center [text-shadow:_1px_1px_2px_gray] border-r-0 sm:border-r-4 border-r-blue-950 border-b-4 border-b-blue-950 rounded-2xl">
                            <TypingIntro />
                        </div>
                    </>
                )}
                <Outlet />
                </div>
            </main>
        </div>
    );
};
export default Student;