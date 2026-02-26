'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function AdmitCardPage() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    localStorage.removeItem('studentName');
    localStorage.removeItem('token');
    router.push('/student/login');
  };

  const handleDownload = () => window.print();

  return (
    <div className="max-w-screen-xl mx-auto bg-gray-100 shadow-md rounded-md h-full p-6 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 shadow-2xl rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          <Image src="/images/logo.png" alt="Logo" width={80} height={80} className="mr-4" />
          <h1 className="text-3xl font-extrabold text-blue-950">Admit Card</h1>
        </div>
        <div className="flex space-x-4">
          <Link href="/student/dashboard" className="bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Back to Dashboard
          </Link>
          <button onClick={handleLogout} className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
            Logout
          </button>
        </div>
      </div>

      {/* Main Admit Card */}
      <div className="flex justify-center items-center p-4">
        <div className="bg-white w-full max-w-5xl p-6 sm:p-10 shadow-2xl rounded-xl">
          {/* Single Border */}
          <div className="border-4 border-blue-950 p-4 sm:p-8 relative bg-white">
            {/* Watermark */}
            <div className="absolute inset-0 flex flex-wrap justify-center items-center opacity-10 select-none pointer-events-none">
              {Array.from({ length: 25 }).map((_, i) => (
                <p key={i} className={`text-xs sm:text-sm font-bold text-gray-400 m-2 ${i % 2 === 0 ? 'rotate-12' : '-rotate-12'}`}>
                  Vedanta Institute of Technology
                </p>
              ))}
            </div>

            {/* College Header */}
            <div className="flex flex-col sm:flex-row items-center justify-between border-b-2 border-black pb-4 gap-4">
              <Image src="/images/logo.png" alt="Logo" width={80} height={80} className="rounded-full border border-gray-400 object-cover" />
              <div className="flex-1 text-center font-bold">
                <h1 className="text-lg sm:text-2xl md:text-3xl uppercase tracking-wide">Vedanta Institute of Technology</h1>
                <p className="text-xs sm:text-sm mt-1">Anandapur Rd, Uchhepota, Kolkata, West Bengal 700150</p>
                <p className="text-base sm:text-lg mt-2 underline">Admit Card</p>
              </div>
            </div>

            {/* Student Details */}
            <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center font-semibold gap-6">
              <div className="text-sm sm:text-base leading-7 flex-1">
                <p><span className="font-bold">Name of Student:</span> Srabani Kar</p>
                <p><span className="font-bold">Roll No:</span> MCA2025-017</p>
                <p><span className="font-bold">Course &amp; Semester:</span> MCA, 3rd Semester</p>
                <p><span className="font-bold">Exam Type:</span> Odd Semester Examination (2024-25)</p>
              </div>
              <div className="flex justify-center">
                <div className="w-24 h-28 sm:w-28 sm:h-32 bg-blue-950 text-white flex items-center justify-center text-4xl font-bold border-2 border-black">
                  S
                </div>
              </div>
            </div>

            {/* Subject Table */}
            <div className="mt-6 font-semibold overflow-x-auto">
              <table className="w-full border-2 border-black text-xs sm:text-sm text-center">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border-2 border-black p-2 sm:p-3">Subject Code</th>
                    <th className="border-2 border-black p-2 sm:p-3">Subject Name</th>
                    <th className="border-2 border-black p-2 sm:p-3">Date</th>
                    <th className="border-2 border-black p-2 sm:p-3">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { code: 'BCA-501', name: 'Internet Technology', date: '25-Nov-2023', time: '10:00 AM - 1:00 PM' },
                    { code: 'BCA-502', name: 'Computer Networking', date: '27-Nov-2023', time: '10:00 AM - 1:00 PM' },
                    { code: 'BCA-503', name: 'Cloud Computing', date: '29-Nov-2023', time: '10:00 AM - 1:00 PM' },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="border-2 border-black p-2 sm:p-3">{row.code}</td>
                      <td className="border-2 border-black p-2 sm:p-3">{row.name}</td>
                      <td className="border-2 border-black p-2 sm:p-3">{row.date}</td>
                      <td className="border-2 border-black p-2 sm:p-3">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Instructions */}
            <div className="mt-4 text-xs sm:text-sm italic font-semibold">
              <p>* This Admit Card must be carried to the Examination Hall. Keep it safe and bring it on every exam day.</p>
            </div>

            {/* Signatures */}
            <div className="flex flex-col sm:flex-row justify-between mt-10 text-center text-xs sm:text-sm font-semibold gap-6 sm:gap-0">
              {['Principal', 'College Seal', 'Exam Controller'].map((label) => (
                <div key={label} className="flex-1">
                  <div className="h-10 sm:h-12 border-b-2 border-black"></div>
                  <p className="mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <div className="flex justify-center mt-6">
        <button onClick={handleDownload} className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
          Download Admit Card
        </button>
      </div>
    </div>
  );
}
