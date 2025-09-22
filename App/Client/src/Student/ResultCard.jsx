// File: ResultCard.jsx
import React from "react";
import collegeLogo from "../assets/logo.png"; 

const ResultCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 p-6">
      <div className="bg-white w-full max-w-4xl shadow-2xl border border-gray-300">

        {/* Header Section */}
        <div className="bg-[#0c2c5d] text-white text-center px-6 py-8 relative">
          {/* College Logo */}
          <img
            src={collegeLogo}
            alt="Logo"
            className="absolute top-6 left-6 w-20 h-20 rounded-full border-4 border-white object-cover"
          />

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase">
            Vedanta Institute of Technology
          </h1>
          <p className="text-sm sm:text-base mt-2 tracking-wide">
            Provisional Grade Card
          </p>
        </div>

        {/* Student Info */}
        <div className="grid grid-cols-2 gap-4 px-8 py-6 border-b border-gray-300 text-gray-800 font-semibold">
          <p>Name: <span className="font-normal">Ishika Das</span></p>
          <p>Roll No.: <span className="font-normal">21301021001</span></p>
          <p>Program: <span className="font-normal">BCA</span></p>
          <p>Session: <span className="font-normal">2023-24</span></p>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto px-8 py-6">
          <table className="w-full border border-gray-400 text-sm sm:text-base text-center">
            <thead>
              <tr className="bg-[#0c2c5d] text-white">
                <th className="border border-gray-400 px-4 py-2">Subject Code</th>
                <th className="border border-gray-400 px-4 py-2">Subject</th>
                <th className="border border-gray-400 px-4 py-2">Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100">
                <td className="border border-gray-400 px-4 py-2">BCA-501</td>
                <td className="border border-gray-400 px-4 py-2">Internet Technology</td>
                <td className="border border-gray-400 px-4 py-2">A</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">BCA-502</td>
                <td className="border border-gray-400 px-4 py-2">Computer Networking</td>
                <td className="border border-gray-400 px-4 py-2">A+</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border border-gray-400 px-4 py-2">BCA-503</td>
                <td className="border border-gray-400 px-4 py-2">Cloud Computing</td>
                <td className="border border-gray-400 px-4 py-2">B+</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">BCA-504</td>
                <td className="border border-gray-400 px-4 py-2">Software Engineering</td>
                <td className="border border-gray-400 px-4 py-2">A</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border border-gray-400 px-4 py-2">BCA-505</td>
                <td className="border border-gray-400 px-4 py-2">Database Management System</td>
                <td className="border border-gray-400 px-4 py-2">A</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">BCA-506</td>
                <td className="border border-gray-400 px-4 py-2">Operating Systems</td>
                <td className="border border-gray-400 px-4 py-2">B</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Grading System */}
        <div className="px-8 py-4 text-gray-800">
          <h3 className="font-bold mb-2">Grading System: (Letter grade and numerical equivalent)</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm sm:text-base">
            <p>A+ : 96 - 100</p>
            <p>B : 81 - 85</p>
            <p>D : 71 - 75</p>
            <p>A : 91 - 95</p>
            <p>C : 76 - 80</p>
            <p>E : 70 & below</p>
            <p>B+ : 86 - 90</p>
          </div>
        </div>

        {/* Attendance & SGPA */}
        <div className="px-8 py-6">
          <div className="grid grid-cols-2 gap-4 text-sm sm:text-base font-semibold">
            <p className="bg-[#0c2c5d] text-white px-4 py-2">Total no. of college days:</p>
            <p className="bg-gray-200 px-4 py-2">120</p>

            <p className="bg-[#0c2c5d] text-white px-4 py-2">Days present:</p>
            <p className="bg-gray-200 px-4 py-2">110</p>

            <p className="bg-[#0c2c5d] text-white px-4 py-2">Days absent:</p>
            <p className="bg-gray-200 px-4 py-2">10</p>

            <p className="bg-[#0c2c5d] text-white px-4 py-2">SGPA:</p>
            <p className="bg-gray-200 px-4 py-2">8.7</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResultCard;
