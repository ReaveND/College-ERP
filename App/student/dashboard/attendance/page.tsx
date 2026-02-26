'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const subjects = [
  { name: 'Data Structures', teacher: 'Prof. A. Roy' },
  { name: 'Operating System', teacher: 'Dr. S. Mukherjee' },
  { name: 'Java OOP', teacher: 'Ms. R. Sen' },
];

const attendanceData = [
  { date: '2025-09-25', subject: 'Data Structures', status: 'Present' },
  { date: '2025-09-24', subject: 'Operating System', status: 'Absent' },
  { date: '2025-09-23', subject: 'Java OOP', status: 'Present' },
  { date: '2025-09-22', subject: 'Data Structures', status: 'Present' },
  { date: '2025-09-21', subject: 'Operating System', status: 'Present' },
  { date: '2025-09-20', subject: 'Java OOP', status: 'Absent' },
  { date: '2025-09-19', subject: 'Data Structures', status: 'Present' },
  { date: '2025-09-18', subject: 'Operating System', status: 'Present' },
  { date: '2025-09-17', subject: 'Java OOP', status: 'Present' },
  { date: '2025-09-16', subject: 'Data Structures', status: 'Absent' },
  { date: '2025-09-15', subject: 'Operating System', status: 'Present' },
  { date: '2025-09-14', subject: 'Java OOP', status: 'Present' },
  { date: '2025-08-30', subject: 'Data Structures', status: 'Present' },
  { date: '2025-08-29', subject: 'Operating System', status: 'Absent' },
  { date: '2025-08-28', subject: 'Java OOP', status: 'Present' },
  { date: '2025-08-27', subject: 'Data Structures', status: 'Present' },
  { date: '2025-08-26', subject: 'Operating System', status: 'Present' },
  { date: '2025-08-25', subject: 'Java OOP', status: 'Absent' },
  { date: '2025-08-24', subject: 'Data Structures', status: 'Present' },
  { date: '2025-08-23', subject: 'Operating System', status: 'Present' },
  { date: '2025-08-22', subject: 'Java OOP', status: 'Present' },
];

const student = { name: 'Srabani Kar', id: 'ST123456', course: 'MCA 3rd Semester' };

export default function AttendancePage() {
  const router = useRouter();
  const [monthFilter, setMonthFilter] = useState('');
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    localStorage.removeItem('studentName');
    localStorage.removeItem('token');
    router.push('/student/login');
  };

  const subjectSummary: Record<string, { total: number; attended: number; teacher: string }> = {};
  subjects.forEach((subj) => {
    const records = attendanceData.filter((a) => a.subject === subj.name);
    subjectSummary[subj.name] = {
      total: records.length,
      attended: records.filter((r) => r.status === 'Present').length,
      teacher: subj.teacher,
    };
  });

  const exportCSV = () => {
    const headers = ['Date', 'Subject', 'Status'];
    const rows = attendanceData.map((row) => [row.date, row.subject, row.status]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const link = document.createElement('a');
    link.setAttribute('href', encodeURI(csvContent));
    link.setAttribute('download', `attendance_${student.id}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredSubjects = subjects.filter(
    (subj) =>
      subj.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      attendanceData.some(
        (record) =>
          record.subject === subj.name && record.status.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="max-w-screen-xl mx-auto bg-gray-100 shadow-md rounded-md h-full p-6 space-y-6 relative">
      <style>{`
        @keyframes marquee { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }
        .animate-marquee { display: inline-block; animation: marquee 25s linear infinite; }
      `}</style>

      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 shadow-lg rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center space-x-4">
          <Image src="/images/logo.png" alt="Logo" width={80} height={80} className="object-contain" />
          <h2 className="text-2xl font-bold text-blue-950">Vedanta Institute of Technology</h2>
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

      {/* Student info */}
      <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 shadow-lg rounded-2xl p-6 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="w-20 h-20 rounded-full bg-blue-950 text-white flex items-center justify-center text-2xl font-bold">
            {student.name[0]}
          </div>
          <div>
            <h2 className="text-2xl font-bold">{student.name}</h2>
            <p className="text-gray-600">Student ID: {student.id}</p>
            <p className="text-gray-600">{student.course}</p>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden bg-yellow-200 text-black rounded-lg py-3">
        <div className="animate-marquee whitespace-nowrap">
          🔔 Reminder: Attend classes regularly! 75% attendance is required to appear in examinations!
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-between items-center gap-4">
        <input
          type="month"
          value={monthFilter}
          onChange={(e) => setMonthFilter(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-950"
        />
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search subject or status..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-950"
          />
          <button onClick={exportCSV} className="bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
            Export CSV
          </button>
        </div>
      </div>

      {/* Subject Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {filteredSubjects.map((subj, idx) => {
          const info = subjectSummary[subj.name];
          const percent = info.total ? Math.round((info.attended / info.total) * 100) : 0;
          const isExpanded = expandedSubject === subj.name;
          const subjectRecords = attendanceData.filter(
            (item) =>
              item.subject === subj.name &&
              (!monthFilter || item.date.startsWith(monthFilter)) &&
              (searchTerm === '' ||
                subj.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.status.toLowerCase().includes(searchTerm.toLowerCase()))
          );

          return (
            <div key={idx} className="bg-blue-950 text-white rounded-2xl shadow-lg relative">
              <div className="p-6 cursor-pointer hover:opacity-90" onClick={() => setExpandedSubject(isExpanded ? null : subj.name)}>
                <h2 className="text-lg font-semibold">{subj.name}</h2>
                <p>Teacher: {info.teacher}</p>
                <p>Total Classes: {info.total}</p>
                <p>Attended: {info.attended}</p>
                <p>Attendance: {percent}%</p>
              </div>
              {isExpanded && (
                <div className="absolute top-full left-0 mt-2 w-full z-10 bg-white text-black rounded-2xl shadow-lg p-4 max-h-80 overflow-y-auto">
                  <h3 className="font-semibold mb-2">{subj.name} Attendance Records</h3>
                  <table className="w-full border border-gray-300 rounded-lg">
                    <thead>
                      <tr className="bg-gray-200 text-left">
                        <th className="p-2 border">Date</th>
                        <th className="p-2 border">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subjectRecords.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                          <td className="p-2 border">{item.date}</td>
                          <td className={`p-2 border font-semibold ${item.status === 'Present' ? 'text-green-600' : 'text-red-600'}`}>
                            {item.status}
                          </td>
                        </tr>
                      ))}
                      {subjectRecords.length === 0 && (
                        <tr>
                          <td colSpan={2} className="text-center p-2 text-gray-500">No records found</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
