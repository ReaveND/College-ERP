import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo college.jpeg";

const Faculty = () => {
  // Typing Intro
  const TypingIntro = () => {
    const lines = ["Welcome", "to", "Faculty Portal"];
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
      <div className="text-yellow-600 font-mono flex flex-col items-center justify-center space-y-2 text-5xl font-extrabold w-[800px] text-center">
        <span>{displayLines[0]}</span>
        <span>{displayLines[1]}</span>
        <span>{displayLines[2]}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-72 bg-white shadow p-4 hidden md:block">
        <h3 className="text-2xl text-blue-950 font-bold text-center mb-4 py-2 rounded-tl-2xl rounded-br-2xl">
          Faculty Portal
        </h3>
        <hr className="bg-yellow-600 h-0.5 mb-4" />
        <nav className="space-y-2 font-sans text-sm font-semibold text-gray-700">
          <NavLink
            to="/dashboard"
            className="block px-5 py-2 rounded text-gray-600 hover:bg-blue-950 hover:text-white"
          >
            <i className="fa-solid fa-gauge-high mr-3"></i> Dashboard
          </NavLink>
          <NavLink
            to="/profile"
            className="block px-5 py-2 rounded text-gray-600 hover:bg-blue-950 hover:text-white"
          >
            <i className="fa-regular fa-user mr-3"></i> Personal Profile
          </NavLink>
          <NavLink
            to="/timetable"
            className="block px-5 py-2 rounded text-gray-600 hover:bg-blue-950 hover:text-white"
          >
            <i className="fa-regular fa-calendar-days mr-3"></i> Time Table
          </NavLink>
          <NavLink
            to="/attendance"
            className="block px-5 py-2 rounded text-gray-600 hover:bg-blue-950 hover:text-white"
          >
            <i className="fa-solid fa-person-chalkboard mr-3"></i> Attendance
          </NavLink>
          <NavLink
            to="/studymaterial"
            className="block px-5 py-2 rounded text-gray-600 hover:bg-blue-950 hover:text-white"
          >
            <i className="fa-solid fa-upload mr-3"></i> Upload Study Materials
          </NavLink>
          <NavLink
            to="/marksupload"
            className="block px-5 py-2 rounded text-gray-600 hover:bg-blue-950 hover:text-white"
          >
            <i className="fa-solid fa-pen-to-square mr-3"></i> Marks Upload
          </NavLink>
          <NavLink
            to="/assignment"
            className="block px-5 py-2 rounded text-gray-600 hover:bg-blue-950 hover:text-white"
          >
            <i className="fa-solid fa-file-circle-check mr-3"></i> Assignment
          </NavLink>
          <NavLink
            to="/leaverequest"
            className="block px-5 py-2 rounded text-gray-600 hover:bg-blue-950 hover:text-white"
          >
            <i className="fa-solid fa-envelope-open-text mr-3"></i> Leave Request
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-6 py-4">
        <div className="bg-white shadow-md rounded-md p-6 h-full">
          {/* Header */}
          <div className="bg-blue-950 flex flex-col sm:flex-row items-center justify-between px-4 py-4 rounded-md mb-6 gap-4">
            <img
              src={Logo}
              alt="Logo"
              className="w-28 h-28 object-cover rounded-full shadow-md"
            />
            <h2 className="text-3xl text-white font-bold text-center sm:text-left flex-1">
              Vedanta Institute of Technology
            </h2>
            <button className="h-12 px-6 bg-yellow-600 text-white text-lg hover:bg-yellow-500 transition duration-300 rounded-3xl">
              <a href="tel:+91-9064285877">Contact Us</a>
            </button>
          </div>

          {/* Typing Animation */}
          <div className="max-w-4xl mx-auto flex justify-center p-6 border-r-4 border-blue-950 border-b-4 border-blue-950 rounded-2xl">
            <TypingIntro />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Faculty;
