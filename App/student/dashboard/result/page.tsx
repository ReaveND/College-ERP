'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const grades = [
  { code: 'BCA-501', subject: 'Internet Technology', grade: 'A' },
  { code: 'BCA-502', subject: 'Computer Networking', grade: 'A+' },
  { code: 'BCA-503', subject: 'Cloud Computing', grade: 'B+' },
  { code: 'BCA-504', subject: 'Software Engineering', grade: 'A' },
  { code: 'BCA-505', subject: 'Database Management System', grade: 'A' },
  { code: 'BCA-506', subject: 'Operating Systems', grade: 'B' },
];

export default function ResultPage() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    localStorage.removeItem('studentName');
    localStorage.removeItem('token');
    router.push('/student/login');
  };

  const handleDownload = () => window.print();

  return (
    <div className="max-w-screen-xl mx-auto bg-gray-100 shadow-md rounded-md h-full p-6 space-y-6 flex flex-col items-center">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 w-full max-w-6xl p-6 rounded-xl shadow-lg mb-6 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <Image src="/images/logo.png" alt="Logo" width={80} height={80} className="rounded-full" />
          <h1 className="text-3xl font-bold text-blue-950">Grade Card</h1>
        </div>
        <div className="flex gap-4">
          <Link href="/student/dashboard" className="bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Back to Dashboard
          </Link>
          <button onClick={handleLogout} className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
            Logout
          </button>
        </div>
      </div>

      {/* Result Card */}
      <div id="result-card" className="bg-white w-full max-w-4xl shadow-2xl border border-gray-300 p-6">
        {/* Header Section */}
        <div className="bg-[#0c2c5d] text-white text-center px-6 py-8 flex items-center gap-4">
          <Image src="/images/logo.png" alt="Logo" width={80} height={80} className="rounded-full border-4 border-white object-cover flex-shrink-0" />
          <div className="text-center flex-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase">Vedanta Institute of Technology</h1>
            <p className="text-sm sm:text-base mt-2 tracking-wide">Provisional Grade Card</p>
          </div>
        </div>

        {/* Student Info */}
        <div className="grid grid-cols-2 gap-4 px-8 py-6 border-b border-gray-300 text-gray-800 font-semibold">
          <p>Name: <span className="font-normal">Srabani Kar</span></p>
          <p>Roll No.: <span className="font-normal">MCA2025-017</span></p>
          <p>Program: <span className="font-normal">MCA</span></p>
          <p>Session: <span className="font-normal">2024-25</span></p>
        </div>

        {/* Grades Table */}
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
              {grades.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-100' : ''}>
                  <td className="border border-gray-400 px-4 py-2">{row.code}</td>
                  <td className="border border-gray-400 px-4 py-2">{row.subject}</td>
                  <td className="border border-gray-400 px-4 py-2">{row.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Grading System */}
        <div className="px-8 py-4 text-gray-800">
          <h3 className="font-bold mb-2">Grading System: (Letter grade and numerical equivalent)</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
            <p>A+ : 96 - 100</p><p>B : 81 - 85</p><p>D : 71 - 75</p>
            <p>A : 91 - 95</p><p>C : 76 - 80</p><p>E : 70 &amp; below</p>
            <p>B+ : 86 - 90</p>
          </div>
        </div>

        {/* Attendance & SGPA */}
        <div className="px-8 py-6 grid grid-cols-2 gap-4 text-sm font-semibold">
          {[
            { label: 'Total no. of college days:', value: '120' },
            { label: 'Days present:', value: '110' },
            { label: 'Days absent:', value: '10' },
            { label: 'SGPA:', value: '8.7' },
          ].map((row) => (
            <React.Fragment key={row.label}>
              <p className="bg-[#0c2c5d] text-white px-4 py-2">{row.label}</p>
              <p className="bg-gray-200 px-4 py-2">{row.value}</p>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Download Button */}
      <div className="flex justify-center mt-6">
        <button onClick={handleDownload} className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
          Download Grade Card
        </button>
      </div>
    </div>
  );
}
