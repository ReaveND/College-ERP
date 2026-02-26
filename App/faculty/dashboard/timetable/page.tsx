'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const timetable = [
  { day: 'Monday',    slots: ['Mathematics', 'Physics', 'CSE Lab', 'Break', 'Engineering Mechanics'] },
  { day: 'Tuesday',   slots: ['Chemistry', 'Mathematics', 'Physics Lab', 'Break', 'C Programming'] },
  { day: 'Wednesday', slots: ['CSE', 'Mathematics', 'English', 'Break', 'CSE Lab'] },
  { day: 'Thursday',  slots: ['Physics', 'Chemistry Lab', 'Engineering Mechanics', 'Break', 'CSE'] },
  { day: 'Friday',    slots: ['C Programming', 'Mathematics', 'Physics', 'Break', 'English'] },
];
const slotTimes = ['9:00-10:00', '10:00-11:00', '11:00-12:00', '12:00-12:30', '12:30-1:30'];

export default function FacultyTimeTable() {
  const router = useRouter();

  const handleLogout = async () => {
    try { await fetch('/api/auth/logout', { method: 'POST' }); } catch (_) {}
    localStorage.removeItem('facultyName');
    router.push('/faculty/login');
  };

  return (
    <div className="max-w-screen-xl mx-auto bg-gray-100 shadow-md rounded-md h-full flex flex-col items-center p-6">
      {/* Header Card */}
      <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150 w-full max-w-6xl p-6 rounded-xl shadow-lg mb-6 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <Image src="/images/logo.png" alt="College Logo" width={80} height={80} className="rounded-full" />
          <h1 className="text-3xl font-bold text-blue-950">Faculty Time Table</h1>
        </div>
        <div className="flex gap-4">
          <Link href="/faculty/dashboard/overview" className="bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Back to Dashboard</Link>
          <button onClick={handleLogout} className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">Logout</button>
        </div>
      </div>

      <div className="overflow-x-auto w-full max-w-6xl">
        <table className="min-w-full bg-white shadow-md rounded-lg border border-gray-300">
          <thead className="bg-blue-950 text-white">
            <tr>
              <th className="px-4 py-2 text-left border border-gray-300">Day / Time</th>
              {slotTimes.map((time, idx) => (
                <th key={idx} className="px-4 py-2 text-left border border-gray-300">{time}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timetable.map((row, idx) => (
              <tr key={idx} className="hover:bg-blue-100">
                <td className="px-4 py-2 font-semibold border border-gray-300">{row.day}</td>
                {row.slots.map((subject, i) => (
                  <td key={i} className="px-4 py-2 border border-gray-300">{subject}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 text-gray-600 text-sm italic">
        📌 *Note: Labs are scheduled in the respective computer/physics/chemistry labs.*
      </div>
    </div>
  );
}
