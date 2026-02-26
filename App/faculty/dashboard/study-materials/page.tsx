'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, FormEvent } from 'react';

interface Material {
  id: number;
  title: string;
  stream: string;
  fileName: string;
  fileURL: string;
}

const streams = ['CSE', 'IT', 'ECE', 'BCA', 'ME', 'CE', 'MCA', 'BBA', 'MTech', 'MBA'];

export default function StudyMaterials() {
  const router = useRouter();
  const [materials, setMaterials] = useState<Material[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [stream, setStream] = useState('');
  const [searchStream, setSearchStream] = useState('');

  const handleLogout = async () => {
    try { await fetch('/api/auth/logout', { method: 'POST' }); } catch (_) {}
    localStorage.removeItem('facultyName');
    router.push('/faculty/login');
  };

  const handleUpload = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !file || !stream) { alert('Please provide title, stream and choose a file.'); return; }
    setMaterials(prev => [...prev, { id: Date.now(), title, stream, fileName: file.name, fileURL: URL.createObjectURL(file) }]);
    setTitle(''); setStream(''); setFile(null);
    (e.target as HTMLFormElement).reset();
  };

  const filtered = searchStream
    ? materials.filter(m => m.stream.toLowerCase().includes(searchStream.toLowerCase()))
    : materials;

  return (
    <div className="max-w-screen-xl mx-auto bg-gray-100 shadow-md rounded-md h-full p-6">
      {/* Header Card */}
      <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150 w-full max-w-6xl p-6 rounded-xl shadow-lg mb-6 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <Image src="/images/logo.png" alt="College Logo" width={80} height={80} className="rounded-full" />
          <h1 className="text-3xl font-bold text-blue-950">Upload Study Material</h1>
        </div>
        <div className="flex gap-4">
          <Link href="/faculty/dashboard/overview" className="bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Back to Dashboard</Link>
          <button onClick={handleLogout} className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">Logout</button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl w-full mx-auto">
        <h1 className="text-2xl font-bold text-blue-950 mb-6">Upload Materials</h1>

        <form onSubmit={handleUpload} className="flex flex-col gap-4 mb-8 bg-gray-50 p-6 rounded-xl">
          <input
            type="text" placeholder="Enter Material Title" value={title}
            onChange={e => setTitle(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <select value={stream} onChange={e => setStream(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none">
            <option value="">Select Stream</option>
            {streams.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <label className="block">
            <span className="text-gray-700 font-medium">Choose File</span>
            <input type="file" accept=".pdf,.doc,.docx,.ppt,.pptx"
              onChange={e => setFile(e.target.files?.[0] ?? null)}
              className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-950 file:text-white hover:file:bg-yellow-600 cursor-pointer"
            />
          </label>
          <button type="submit" className="px-6 py-2 bg-blue-950 text-white rounded-lg hover:bg-yellow-600 transition duration-300">Upload</button>
        </form>

        <div className="mb-6">
          <input type="text" placeholder="🔍 Search by Stream (e.g., CSE)" value={searchStream}
            onChange={e => setSearchStream(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">📂 Uploaded Materials</h2>
        {filtered.length === 0 ? (
          <p className="text-gray-500">No materials found.</p>
        ) : (
          <ul className="space-y-4">
            {filtered.map(material => (
              <li key={material.id} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow">
                <div>
                  <p className="font-semibold text-blue-950">{material.title}</p>
                  <p className="text-sm text-gray-600">{material.fileName} ({material.stream})</p>
                </div>
                <a href={material.fileURL} download={material.fileName}
                  className="px-4 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300">
                  Download
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
