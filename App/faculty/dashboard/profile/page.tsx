'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const faculty = {
  name: 'Bidusha Halder',
  email: 'bidusha.halder@vedantainstitute.edu',
  department: 'Computer Science',
  phone: '+91-9064285877',
  office: 'Room 210, Block A',
  bio: 'Passionate faculty with expertise in Software Engineering and Cyber Security. Loves teaching and mentoring students.',
  experience: '8 years of teaching and research experience in Computer Science.',
  subjects: ['Software Engineering', 'Cyber Security', 'Data Structures', 'Operating Systems'],
  researchAreas: ['Cyber Security', 'Machine Learning', 'Cloud Computing'],
  achievements: [
    'Best Faculty Award 2023',
    'Published 10 research papers in international journals',
    'Organized 5 national-level workshops',
  ],
  hobbies: ['Reading', 'Traveling', 'Photography'],
};

export default function FacultyProfile() {
  const router = useRouter();

  const handleLogout = async () => {
    try { await fetch('/api/auth/logout', { method: 'POST' }); } catch (_) {}
    localStorage.removeItem('facultyName');
    router.push('/faculty/login');
  };

  return (
    <div className="max-w-screen-xl mx-auto bg-gray-100 shadow-md rounded-md h-full p-6">
      {/* Header Card */}
      <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150 w-full max-w-6xl p-6 rounded-xl shadow-lg mb-6 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <Image src="/images/logo.png" alt="College Logo" width={80} height={80} className="rounded-full" />
          <h1 className="text-3xl font-bold text-blue-950">Faculty Profile</h1>
        </div>
        <div className="flex gap-4">
          <Link href="/faculty/dashboard/overview"
            className="bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Back to Dashboard
          </Link>
          <button onClick={handleLogout}
            className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
            Logout
          </button>
        </div>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-5xl w-full mx-auto grid md:grid-cols-3 gap-8">
        {/* Left column */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/images/campusfaculty.jpg"
            alt="Faculty"
            width={160}
            height={160}
            className="w-40 h-40 rounded-full shadow-xl mb-4 border-4 border-blue-950 object-cover"
          />
          <h1 className="text-2xl font-bold text-blue-950">{faculty.name}</h1>
          <p className="text-gray-600 mt-1">{faculty.department}</p>
          <p className="text-gray-500 mt-1">{faculty.email}</p>
          <div className="mt-4 space-y-2 text-gray-700">
            <p><span className="font-semibold">📞 Phone:</span> {faculty.phone}</p>
            <p><span className="font-semibold">🏢 Office:</span> {faculty.office}</p>
            <p><span className="font-semibold">🎓 Experience:</span> {faculty.experience}</p>
            <p><span className="font-semibold">🌟 Hobbies:</span> {faculty.hobbies.join(', ')}</p>
          </div>
        </div>

        {/* Right column */}
        <div className="md:col-span-2 flex flex-col justify-between">
          <div className="mb-6 p-4 bg-gray-50 rounded-xl shadow-inner">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">About Me</h2>
            <p className="text-gray-600">{faculty.bio}</p>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Subjects Taught</h2>
              <div className="flex flex-wrap gap-2">
                {faculty.subjects.map((subj, idx) => (
                  <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm font-medium">{subj}</span>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Research Areas</h2>
              <div className="flex flex-wrap gap-2">
                {faculty.researchAreas.map((area, idx) => (
                  <span key={idx} className="px-3 py-1 bg-green-100 text-green-900 rounded-full text-sm font-medium">{area}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Achievements</h2>
            <ul className="list-disc list-inside text-gray-600">
              {faculty.achievements.map((ach, idx) => <li key={idx}>{ach}</li>)}
            </ul>
          </div>

          <div className="mt-4">
            <a href={`tel:${faculty.phone}`}
              className="px-6 py-2 bg-blue-950 text-white rounded-full hover:bg-yellow-600 transition duration-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
