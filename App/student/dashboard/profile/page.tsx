'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function StudentProfile() {
  const router = useRouter();
  const [student, setStudent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showIDCard, setShowIDCard] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/api/student/me')
      .then((r) => r.json())
      .then((data) => {
        setStudent(data.student);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    localStorage.removeItem('studentName');
    localStorage.removeItem('token');
    router.push('/student/login');
  };

  const handlePrint = () => window.print();

  if (loading) return <div className="flex items-center justify-center min-h-screen text-gray-600">Loading...</div>;

  const dobFormatted = student?.dob ? new Date(student.dob).toLocaleDateString('en-IN') : '—';
  const enrollYear = student?.createdAt ? new Date(student.createdAt).getFullYear() : '—';

  return (
    <div className="max-w-screen-xl mx-auto bg-gray-100 shadow-md rounded-md h-full p-6 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 shadow-lg rounded-2xl p-6 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <Image src="/images/logo.png" alt="College Logo" width={80} height={80} className="rounded-full" />
          <h2 className="text-3xl font-bold text-blue-950">My Profile</h2>
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

      {/* Main Profile Card */}
      <div className="bg-white shadow-lg rounded-2xl p-8">
        {/* Profile Overview */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-10">
          <div className="w-36 h-36 rounded-full bg-blue-950 text-white flex items-center justify-center text-5xl font-bold shadow-md flex-shrink-0">
            {student?.name?.[0]?.toUpperCase() ?? 'S'}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{student?.name ?? '—'}</h3>
            <p className="text-gray-700">{student?.course ?? '—'}</p>
            <p className="text-gray-700"><span className="font-semibold">ID:</span> {student?._id ?? '—'}</p>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-gray-700">
              <p><span className="font-semibold">Email:</span> {student?.email ?? '—'}</p>
              <p><span className="font-semibold">Mobile:</span> {student?.mobile ?? '—'}</p>
              <p><span className="font-semibold">DOB:</span> {dobFormatted}</p>
              <p><span className="font-semibold">Gender:</span> {student?.gender ?? '—'}</p>
              <p><span className="font-semibold">Enrollment Year:</span> {enrollYear}</p>
            </div>
          </div>
        </div>

        {/* Info Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="p-6 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150 rounded-xl shadow-md hover:shadow-lg transition">
            <h4 className="text-lg font-semibold text-blue-950 mb-4">📞 Contact Info</h4>
            <p><span className="font-semibold">Email:</span> {student?.email ?? '—'}</p>
            <p><span className="font-semibold">Phone:</span> {student?.mobile ?? '—'}</p>
            <p><span className="font-semibold">Address:</span> {student?.address ?? '—'}</p>
            <p><span className="font-semibold">District:</span> {student?.district ?? '—'}, {student?.state ?? '—'}</p>
          </div>

          {/* Guardian Info */}
          <div className="p-6 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150 rounded-xl shadow-md hover:shadow-lg transition">
            <h4 className="text-lg font-semibold text-blue-950 mb-4">👨‍👩‍👧 Guardian Info</h4>
            <p><span className="font-semibold">Father&apos;s Name:</span> {student?.fname ?? '—'}</p>
            <p><span className="font-semibold">Mother&apos;s Name:</span> {student?.mname ?? '—'}</p>
          </div>

          {/* Academic Info */}
          <div className="p-6 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150 rounded-xl shadow-md hover:shadow-lg transition">
            <h4 className="text-lg font-semibold text-blue-950 mb-4">🎓 Academic Info</h4>
            <p><span className="font-semibold">Course:</span> {student?.course ?? '—'}</p>
            <p><span className="font-semibold">Enrollment Year:</span> {enrollYear}</p>
            <p><span className="font-semibold">10th School:</span> {student?.SCName ?? '—'} ({student?.yop ?? '—'})</p>
            <p><span className="font-semibold">10th Marks:</span> {student?.marks ?? '—'}%</p>
            <p><span className="font-semibold">12th School:</span> {student?.HSCName ?? '—'} ({student?.HSyop ?? '—'})</p>
            <p><span className="font-semibold">12th Marks:</span> {student?.HSmarks ?? '—'}%</p>
          </div>

          {/* Student ID Card */}
          <div className="p-6 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150 rounded-xl shadow-md hover:shadow-lg transition">
            <h4 className="text-lg font-semibold text-blue-950 mb-4">📄 Student ID Card</h4>
            <button
              onClick={() => setShowIDCard(true)}
              className="block w-full text-center py-2 bg-blue-950 text-white rounded-lg hover:bg-yellow-600 transition"
            >
              Show ID Card
            </button>
          </div>
        </div>
      </div>

      {/* ID Card Modal */}
      {showIDCard && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150 p-6 rounded-xl shadow-lg">
            <div ref={cardRef} className="w-80 bg-white rounded-2xl shadow-xl border border-gray-300 p-5 relative overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <Image src="/images/logo.png" alt="Logo" width={48} height={48} />
                <h2 className="text-lg font-bold text-blue-950 text-center">Vedanta Institute of Technology</h2>
              </div>
              {/* Avatar */}
              <div className="flex justify-center mb-4">
                <div className="w-28 h-28 rounded-full bg-blue-950 text-white flex items-center justify-center text-4xl font-bold border-2 border-blue-900 shadow-md">
                  {student?.name?.[0]?.toUpperCase() ?? 'S'}
                </div>
              </div>
              {/* Info */}
              <div className="text-center space-y-1">
                <h3 className="text-xl font-bold text-blue-950">{student?.name}</h3>
                <p className="text-sm text-gray-700">{student?.course} | {student?.gender}</p>
                <p className="text-sm text-gray-600">ID: {student?._id?.slice(-8)?.toUpperCase()}</p>
                <p className="text-sm text-gray-600">DOB: {dobFormatted}</p>
              </div>
              {/* Footer */}
              <div className="absolute bottom-0 left-0 right-0 bg-blue-950 text-white text-xs text-center py-2 rounded-b-2xl">
                Valid Upto: {Number(enrollYear) + 4}<br />Contact: {student?.mobile}
              </div>
            </div>
            <div className="flex gap-4 mt-6 justify-center">
              <button onClick={handlePrint} className="px-4 py-2 bg-blue-950 text-white rounded-lg hover:bg-blue-800 transition">
                Download
              </button>
              <button onClick={() => setShowIDCard(false)} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
