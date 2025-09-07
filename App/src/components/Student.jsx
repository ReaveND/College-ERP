import React from "react";
import { NavLink} from "react-router-dom";
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
    <div className="text-yellow-600 [text-shadow:_0px_0px_6px_#e0b159] font-mono flex flex-col items-center justify-center space-y-2 text-5xl font-extrabold w-[800px] text-center">
      <span>{displayLines[0]}</span>
      <span>{displayLines[1]}</span>
      <span>{displayLines[2]}</span>
    </div>
  );
};

const Student = () => {
    return(
        <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
            {/* Sidebar */}
            <aside className="w-full md:w-70 p-4 shadow hidden md:block">
                <h3 className="text-2xl text-blue-950 font-bold text-center mb-4 py-2 rounded-tl-2xl rounded-br-2xl">
                Student Portal
                </h3>
                <hr className="bg-yellow-600 h-0.5 mb-4" />
                <nav className="space-y-2 font-sans text-sm font-semibold text-gray-700">
                <NavLink className="block px-5 py-2 rounded text-gray-400">
                    <i className="fa-regular fa-user mr-3"></i>My Profile
                </NavLink>

                <NavLink className="block px-5 py-2 rounded text-gray-400">
                    <i className="fa-regular fa-clipboard mr-3"></i>Notice Board
                </NavLink>

                <NavLink className="block px-5 py-2 rounded text-gray-400">
                    <i className="fa-regular fa-note-sticky mr-3"></i>Study Materials
                </NavLink>

                <NavLink className="block px-5 py-2 rounded text-gray-400">
                    <i className="fa-solid fa-book mr-3"></i>Library
                </NavLink>

                <NavLink className="block px-5 py-2 rounded text-gray-400">
                    <i className="fa-solid fa-person-chalkboard mr-3"></i>Attendance
                </NavLink>

                <NavLink className="block px-5 py-2 rounded text-gray-400">
                    <i className="fab fa-wpforms mr-3"></i>Exam Form
                </NavLink>

                <NavLink className="block px-5 py-2 rounded text-gray-400">
                    <i className="fa-solid fa-id-card mr-3"></i>Admit Card
                </NavLink>

                <NavLink className="block px-5 py-2 rounded text-gray-400">
                    <i className="fa-solid fa-desktop mr-3"></i>Online Exam
                </NavLink>

                <NavLink className="block px-5 py-2 rounded text-gray-400">
                    <i className="fa-solid fa-square-poll-horizontal mr-3"></i>Result
                </NavLink>

                <NavLink className="block px-5 py-2 rounded text-gray-400">
                    <i className="fa-solid fa-money-check-dollar mr-3"></i>Sem/Exam Fees Clearance
                </NavLink>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 px-4 sm:px-6 lg:px-6 py-4">
                <div className="max-w-screen-xl mx-auto bg-white shadow-md rounded-md p-6 h-full">
                
                {/* Header */}
                    <div className="bg-[#e9e9e9] flex flex-col sm:flex-row items-center justify-between px-4 py-4 rounded-md mb-6 gap-4">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-28 h-28 object-cover rounded-full shadow-md"
                    />
                    <h2 className="lg:text-3xl text-blue-950 sm:text-2xl font-bold text-center sm:text-left flex-1">
                        Vedanta Institute of Technology
                    </h2>
                    <button className="h-12 px-6 bg-blue-950 text-white text-lg hover:text-white hover:bg-yellow-600 transition-all duration-700 ease-in-out hover:scale-105s rounded-3xl whitespace-nowrap cursor-pointer">
                        <a href="tel:+91-9064285877">Contact Us</a>
                    </button>
                    </div>
                    <div className="max-w-4xl bg-transparent shadow mx-auto p-6 mt-35 flex justify-center sm:flex-row [text-shadow:_1px_1px_2px_gray] border-r-4 border-r-blue-950 border-b-4 border-b-blue-950 rounded-2xl">
                        <TypingIntro />
                    </div>
                </div>
            </main>
        </div>
    );
};
export default Student;