'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const students = [
  { id: 1, name: 'Srirupa Hati',      roll: 'CSE101' },
  { id: 2, name: 'Piu Roy',           roll: 'CSE102' },
  { id: 3, name: 'Ipsita Pal',        roll: 'CSE103' },
  { id: 4, name: 'Sunny Ghosh',       roll: 'CSE104' },
  { id: 5, name: 'Priyanka Sharma',   roll: 'CSE105' },
  { id: 6, name: 'Priya Das',         roll: 'CSE106' },
  { id: 7, name: 'Joy Sen',           roll: 'CSE107' },
  { id: 8, name: 'Pritam Sharma',     roll: 'CSE108' },
  { id: 9, name: 'Tania Singha',      roll: 'CSE109' },
];

export default function Attendance() {
  const router = useRouter();
  const [attendance, setAttendance] = useState<Record<number, boolean>>(
    students.reduce((acc, s) => ({ ...acc, [s.id]: false }), {})
  );

  const handleLogout = async () => {
    try { await fetch('/api/auth/logout', { method: 'POST' }); } catch (_) {}
    localStorage.removeItem('facultyName');
    router.push('/faculty/login');
  };

  const handleSubmit = () => {
    const present = students.filter(s => attendance[s.id]).map(s => s.name).join(', ');
    alert(`Present Students:\n${present || 'None'}`);
  };

  return (
    <div className="max-w-screen-xl mx-auto bg-gray-100 shadow-md rounded-md h-full p-6 flex flex-col items-center">
      {/* Header Card */}
      <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150 w-full max-w-6xl p-6 rounded-xl shadow-lg mb-6 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <Image src="/images/logo.png" alt="College Logo" width={80} height={80} className="rounded-full" />
          <h1 className="text-3xl font-bold text-blue-950">Attendance Sheet</h1>
        </div>
        <div className="flex gap-4">
          <Link href="/faculty/dashboard/overview" className="bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Back to Dashboard</Link>
          <button onClick={handleLogout} className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">Logout</button>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg w-full max-w-3xl p-6">
        <table className="min-w-full border">
          <thead className="bg-blue-950 text-white">
            <tr>
              <th className="px-4 py-2 border">Roll No</th>
              <th className="px-4 py-2 border">Student Name</th>
              <th className="px-4 py-2 border">Present</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id} className="text-center hover:bg-blue-100">
                <td className="px-4 py-2 border">{student.roll}</td>
                <td className="px-4 py-2 border">{student.name}</td>
                <td className="px-4 py-2 border">
                  <input
                    type="checkbox"
                    checked={attendance[student.id]}
                    onChange={() => setAttendance(prev => ({ ...prev, [student.id]: !prev[student.id] }))}
                    className="w-5 h-5"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={handleSubmit}
          className="mt-6 bg-blue-950 text-white px-6 py-2 rounded hover:bg-yellow-500 transition"
        >
          Submit Attendance
        </button>
      </div>
    </div>
  );
}
