'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, FormEvent } from 'react';

interface Record {
  id: number;
  studentId: string;
  studentName: string;
  stream: string;
  subject: string;
  marks: string;
}

const streams = ['CSE', 'IT', 'ECE', 'BCA', 'ME', 'CE', 'MCA', 'BBA', 'MTech', 'MBA'];

export default function MarksUpload() {
  const router = useRouter();
  const [studentId, setStudentId] = useState('');
  const [studentName, setStudentName] = useState('');
  const [stream, setStream] = useState('');
  const [subject, setSubject] = useState('');
  const [marks, setMarks] = useState('');
  const [records, setRecords] = useState<Record[]>([]);

  const handleLogout = async () => {
    try { await fetch('/api/auth/logout', { method: 'POST' }); } catch (_) {}
    localStorage.removeItem('facultyName');
    router.push('/faculty/login');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!studentId || !studentName || !stream || !subject || !marks) { alert('⚠️ Please fill all fields!'); return; }
    setRecords(prev => [...prev, { id: Date.now(), studentId, studentName, stream, subject, marks }]);
    setStudentId(''); setStudentName(''); setStream(''); setSubject(''); setMarks('');
  };

  return (
    <div className="max-w-6xl mx-auto bg-gray-100 shadow-md rounded-md min-h-screen p-6">
      {/* Header Card */}
      <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150 w-full p-6 rounded-xl shadow-lg mb-6 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <Image src="/images/logo.png" alt="College Logo" width={80} height={80} className="rounded-full" />
          <h1 className="text-3xl font-bold text-blue-950">Upload Marks</h1>
        </div>
        <div className="flex gap-4">
          <Link href="/faculty/dashboard/overview" className="bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Back to Dashboard</Link>
          <button onClick={handleLogout} className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">Logout</button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-blue-950 mb-6">Marks Upload</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 bg-gray-50 p-6 rounded-xl">
          <input type="text" placeholder="Enter Student ID" value={studentId} onChange={e => setStudentId(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none" />
          <input type="text" placeholder="Enter Student Name" value={studentName} onChange={e => setStudentName(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none" />
          <select value={stream} onChange={e => setStream(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none">
            <option value="">-- Select Stream --</option>
            {streams.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <input type="text" placeholder="Enter Subject" value={subject} onChange={e => setSubject(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none" />
          <input type="number" placeholder="Enter Marks" value={marks} onChange={e => setMarks(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none" />
          <button type="submit"
            className="md:col-span-2 px-6 py-2 bg-blue-950 text-white rounded-lg hover:bg-yellow-600 transition duration-300">
            Upload
          </button>
        </form>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">Uploaded Marks</h2>
        {records.length === 0 ? (
          <p className="text-gray-500">No marks uploaded yet.</p>
        ) : (
          <table className="w-full border border-gray-300 rounded-lg shadow text-sm md:text-base">
            <thead>
              <tr className="bg-blue-950 text-white">
                <th className="p-2 text-left">Student ID</th>
                <th className="p-2 text-left">Student Name</th>
                <th className="p-2 text-left">Stream</th>
                <th className="p-2 text-left">Subject</th>
                <th className="p-2 text-left">Marks</th>
              </tr>
            </thead>
            <tbody>
              {records.map(rec => (
                <tr key={rec.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-2">{rec.studentId}</td>
                  <td className="p-2">{rec.studentName}</td>
                  <td className="p-2">{rec.stream}</td>
                  <td className="p-2">{rec.subject}</td>
                  <td className="p-2">{rec.marks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
