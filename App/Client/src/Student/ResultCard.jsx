import React from "react";
import collegeLogo from "../assets/logo.png";

const ResultCard = () => {

  const handleDownload = () => window.print();

  return (
    <div className="max-w-screen-xl mx-auto bg-gray-100 shadow-md rounded-md h-full p-6 space-y-6 flex flex-col items-center">

      {/* Header Card */}
      <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150 w-full max-w-6xl p-6 rounded-xl shadow-lg mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={collegeLogo} alt="College Logo" className="w-20 h-20 rounded-full" />
          <h1 className="text-3xl font-bold text-blue-950">Grade Card</h1>
        </div>
        <div className="flex gap-4">
          <a
            href="/Dashboard"
            className="bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Back to Dashboard
          </a>
          <a
            href="/logout"
            className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </a>
        </div>
      </div>

      {/* Result Card */}
      <div
        id="result-card"
        className="bg-white w-full max-w-4xl shadow-2xl border border-gray-300 p-6"
      >
        {/* Header Section */}
        <div className="bg-[#0c2c5d] text-white text-center px-6 py-8 flex items-center gap-4">
          {/* College Logo */}
            <img
              src={collegeLogo}
              alt="Logo"
              className="w-20 h-20 rounded-full border-4 border-white object-cover flex-shrink-0"
            />

            {/* College Name & Grade Card */}
            <div className="text-center flex-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase">
                Vedanta Institute of Technology
              </h1>
              <p className="text-sm sm:text-base mt-2 tracking-wide">
                Provisional Grade Card
              </p>
            </div>
        </div>

        {/* Student Info */}
        <div className="grid grid-cols-2 gap-4 px-8 py-6 border-b border-gray-300 text-gray-800 font-semibold">
          <p>Name: <span className="font-normal">Srabani Kar</span></p>
          <p>Roll No.: <span className="font-normal">MCA2025-017</span></p>
          <p>Program: <span className="font-normal">MCA</span></p>
          <p>Session: <span className="font-normal">2024-25</span></p>
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
        <div className="px-8 py-6 grid grid-cols-2 gap-4 text-sm sm:text-base font-semibold">
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

      {/* Download Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleDownload}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Download Grade Card
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
