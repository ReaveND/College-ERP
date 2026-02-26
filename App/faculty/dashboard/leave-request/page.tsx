'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, FormEvent } from 'react';

interface LeaveRequest {
  id: number;
  name: string;
  fromDate: string;
  toDate: string;
  reason: string;
  status: string;
}

export default function LeaveRequest() {
  const router = useRouter();
  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([]);
  const [form, setForm] = useState({ name: '', fromDate: '', toDate: '', reason: '' });

  const handleLogout = async () => {
    try { await fetch('/api/auth/logout', { method: 'POST' }); } catch (_) {}
    localStorage.removeItem('facultyName');
    router.push('/faculty/login');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.fromDate || !form.toDate || !form.reason) { alert('⚠️ Please fill in all fields.'); return; }
    setLeaveRequests(prev => [...prev, { id: Date.now(), ...form, status: 'Pending' }]);
    setForm({ name: '', fromDate: '', toDate: '', reason: '' });
  };

  return (
    <div className="max-w-6xl mx-auto bg-gray-100 shadow-md rounded-md min-h-screen p-6">
      {/* Header Card */}
      <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150 w-full p-6 rounded-xl shadow-lg mb-6 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <Image src="/images/logo.png" alt="College Logo" width={80} height={80} className="rounded-full" />
          <h1 className="text-3xl font-bold text-blue-950">Leave Request</h1>
        </div>
        <div className="flex gap-4">
          <Link href="/faculty/dashboard/overview" className="bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Back to Dashboard</Link>
          <button onClick={handleLogout} className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">Logout</button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl w-full mx-auto">
        <h1 className="text-2xl font-bold text-blue-950 mb-6">Leave Application</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-8 bg-gray-50 p-6 rounded-xl">
          <input type="text" name="name" placeholder="Enter Your Name" value={form.name} onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="date" name="fromDate" value={form.fromDate} onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none" />
            <input type="date" name="toDate" value={form.toDate} onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
          <textarea name="reason" placeholder="Reason for Leave" value={form.reason} onChange={handleChange}
            rows={3} className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none" />
          <button type="submit"
            className="px-6 py-2 bg-blue-950 text-white rounded-lg hover:bg-yellow-600 transition duration-300">
            Submit Request
          </button>
        </form>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">📂 Submitted Requests</h2>
        {leaveRequests.length === 0 ? (
          <p className="text-gray-500">No leave requests submitted yet.</p>
        ) : (
          <ul className="space-y-4">
            {leaveRequests.map(req => (
              <li key={req.id} className="flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-50 p-4 rounded-lg shadow">
                <div>
                  <p className="font-semibold text-blue-950">{req.name}</p>
                  <p className="text-sm text-gray-600">{req.fromDate} → {req.toDate}</p>
                  <p className="text-sm text-gray-600">Reason: {req.reason}</p>
                </div>
                <span className="mt-2 md:mt-0 px-3 py-1 text-xs font-semibold bg-yellow-200 text-yellow-800 rounded-full">
                  {req.status}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
