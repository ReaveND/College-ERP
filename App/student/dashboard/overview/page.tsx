'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function StudentDashboardOverview() {
  const router = useRouter();
  const [studentName, setStudentName] = useState('Student');

  useEffect(() => {
    const name = localStorage.getItem('studentName');
    if (name) setStudentName(name);
  }, []);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch {}
    localStorage.removeItem('studentName');
    localStorage.removeItem('token');
    router.push('/student/login');
  };

  return (
    <div className="max-w-screen-xl mx-auto bg-gray-100 shadow-md rounded-md h-full p-6">
      {/* Header Card */}
      <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 w-full p-6 rounded-xl shadow-lg mb-6 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <Image src="/images/logo.png" alt="College Logo" width={80} height={80} className="rounded-full" />
          <div>
            <h1 className="text-3xl font-bold text-blue-950">Student Dashboard</h1>
            <p className="text-gray-600 mt-1">
              Welcome back, <span className="font-semibold text-blue-900">{studentName}</span>
            </p>
          </div>
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
        {[
          { label: 'Total Attendance', value: '85%' },
          { label: 'Classes Attended Today', value: '3' },
          { label: 'Assignments Pending', value: '5' },
          { label: 'Total Classes Missed', value: '15' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-blue-950 p-6 rounded-xl shadow hover:shadow-lg transition text-white hover:bg-yellow-600 hover:text-black"
          >
            <h2 className="text-lg font-semibold">{stat.label}</h2>
            <p className="text-3xl font-bold mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Announcements */}
      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <h2 className="text-xl font-bold text-blue-950 mb-4">Latest Announcements</h2>
        <ul className="space-y-3 text-gray-700">
          <li>📌 Mid-Sem Exam schedule released.</li>
          <li>📌 Study-materials are uploaded by Faculty.</li>
          <li>📌 Submit assignments by end of the week.</li>
        </ul>
      </div>

      {/* Quick Links */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold text-blue-950 mb-4">Quick Links</h2>
        <div className="flex flex-wrap gap-4">
          {[
            { href: '/student/dashboard/study-materials', label: 'View Study Materials' },
            { href: '/student/dashboard/attendance', label: 'Check Attendance' },
            { href: '/student/dashboard/assignments', label: 'Review Assignments' },
            { href: '/student/dashboard/result', label: 'Check Result' },
            { href: '/student/dashboard/exam-form', label: 'Exam Form' },
            { href: '/student/dashboard/admit-card', label: 'Admit Card' },
            { href: '/student/dashboard/library', label: 'Library' },
            { href: '/student/dashboard/fees-clearance', label: 'Fees Clearance' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 bg-blue-950 text-white rounded-lg hover:bg-yellow-600 hover:text-black transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
