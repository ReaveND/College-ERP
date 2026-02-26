'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function FacultyDashboardOverview() {
  const router = useRouter();

  const handleLogout = async () => {
    try { await fetch('/api/auth/logout', { method: 'POST' }); } catch (_) {}
    localStorage.removeItem('facultyName');
    router.push('/faculty/login');
  };

  return (
    <div className="max-w-screen-xl mx-auto bg-gray-100 shadow-md rounded-md p-6 h-full">
      {/* Header Card */}
      <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150 w-full max-w-7xl p-6 rounded-xl shadow-lg mb-6 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <Image src="/images/logo.png" alt="College Logo" width={80} height={80} className="rounded-full" />
          <h1 className="text-3xl font-bold text-blue-950">Faculty Dashboard</h1>
        </div>
        <button
          onClick={handleLogout}
          className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-blue-950 p-6 rounded-xl shadow hover:shadow-lg transition text-white hover:bg-yellow-600 hover:text-black">
          <h2 className="text-lg font-semibold">Total Students</h2>
          <p className="text-3xl font-bold mt-2">120</p>
        </div>
        <div className="bg-blue-950 p-6 rounded-xl shadow hover:shadow-lg transition text-white hover:bg-yellow-600 hover:text-black">
          <h2 className="text-lg font-semibold">Classes Today</h2>
          <p className="text-3xl font-bold mt-2">4</p>
        </div>
        <div className="bg-blue-950 p-6 rounded-xl shadow hover:shadow-lg transition text-white hover:bg-yellow-600 hover:text-black">
          <h2 className="text-lg font-semibold">Assignments Uploaded</h2>
          <p className="text-3xl font-bold mt-2">15</p>
        </div>
        <div className="bg-blue-950 p-6 rounded-xl shadow hover:shadow-lg transition text-white hover:bg-yellow-600 hover:text-black">
          <h2 className="text-lg font-semibold">Leave Requests</h2>
          <p className="text-3xl font-bold mt-2">3</p>
        </div>
      </div>

      {/* Announcements */}
      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <h2 className="text-xl font-bold text-blue-950 mb-4">Latest Announcements</h2>
        <ul className="space-y-3 text-gray-700">
          <li>📌 Mid-Sem Exam schedule released.</li>
          <li>📌 Faculty meeting on Friday at 2 PM.</li>
          <li>📌 Submit attendance by end of the week.</li>
        </ul>
      </div>

      {/* Quick Links */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold text-blue-950 mb-4">Quick Links</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/faculty/dashboard/timetable"
            className="px-4 py-2 bg-blue-950 text-white rounded-lg hover:bg-yellow-600 hover:text-black transition">
            View Timetable
          </Link>
          <Link href="/faculty/dashboard/attendance"
            className="px-4 py-2 bg-blue-950 text-white rounded-lg hover:bg-yellow-600 hover:text-black transition">
            Mark Attendance
          </Link>
          <Link href="/faculty/dashboard/assignment"
            className="px-4 py-2 bg-blue-950 text-white rounded-lg hover:bg-yellow-600 hover:text-black transition">
            Manage Assignments
          </Link>
          <Link href="/faculty/dashboard/marks-upload"
            className="px-4 py-2 bg-blue-950 text-white rounded-lg hover:bg-yellow-600 hover:text-black transition">
            Upload Marks
          </Link>
        </div>
      </div>
    </div>
  );
}
