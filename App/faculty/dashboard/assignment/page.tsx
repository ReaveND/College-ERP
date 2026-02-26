'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Assignment {
  id: number;
  title: string;
  dueDate: string;
}

export default function Assignment() {
  const router = useRouter();
  const [assignments, setAssignments] = useState<Assignment[]>([
    { id: 1, title: 'DBMS – Normalization Assignment', dueDate: '2025-09-20' },
    { id: 2, title: 'Operating System – Process Scheduling Case Study', dueDate: '2025-09-25' },
    { id: 3, title: 'Computer Networks – Routing Algorithms Report', dueDate: '2025-09-28' },
  ]);
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleLogout = async () => {
    try { await fetch('/api/auth/logout', { method: 'POST' }); } catch (_) {}
    localStorage.removeItem('facultyName');
    router.push('/faculty/login');
  };

  const handleAdd = () => {
    if (!title || !dueDate) return;
    setAssignments(prev => [...prev, { id: Date.now(), title, dueDate }]);
    setTitle(''); setDueDate('');
  };

  const handleDelete = (id: number) => setAssignments(prev => prev.filter(a => a.id !== id));

  return (
    <div className="max-w-screen-xl mx-auto bg-gray-100 shadow-md rounded-md h-full p-6">
      {/* Header Card */}
      <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150 w-full max-w-6xl p-6 rounded-xl shadow-lg mb-6 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <Image src="/images/logo.png" alt="College Logo" width={80} height={80} className="rounded-full" />
          <h1 className="text-3xl font-bold text-blue-950">Upload Assignments</h1>
        </div>
        <div className="flex gap-4">
          <Link href="/faculty/dashboard/overview" className="bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Back to Dashboard</Link>
          <button onClick={handleLogout} className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">Logout</button>
        </div>
      </div>

      {/* Add Assignment Form */}
      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <h2 className="text-xl font-semibold text-blue-950 mb-4">Add Assignment</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <input type="text" placeholder="e.g. Java – OOP Concepts Project" value={title}
            onChange={e => setTitle(e.target.value)}
            className="border rounded-lg px-3 py-2 flex-1" />
          <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)}
            className="border rounded-lg px-3 py-2" />
          <button onClick={handleAdd}
            className="px-4 py-2 bg-blue-950 text-white rounded-lg hover:bg-yellow-600 hover:text-black transition">
            Add
          </button>
        </div>
      </div>

      {/* Assignment List */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold text-blue-950 mb-4">Assignments</h2>
        {assignments.length === 0 ? (
          <p className="text-gray-500">No assignments available.</p>
        ) : (
          <ul className="space-y-4">
            {assignments.map(a => (
              <li key={a.id} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
                <div>
                  <h3 className="text-lg font-bold text-blue-950">{a.title}</h3>
                  <p className="text-sm text-gray-600">Due: {a.dueDate}</p>
                </div>
                <button onClick={() => handleDelete(a.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-500 transition">
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
