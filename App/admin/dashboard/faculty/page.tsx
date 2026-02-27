'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { getFacultys, deleteFaculty } from '@/lib/adminApi';
import dayjs from 'dayjs';
import { resolveImageUrl } from '@/lib/imageUrl';

interface Faculty {
  _id: string;
  name: string;
  mobile: string;
  email: string;
  dob: string;
  gender: string;
  address: string;
  qualification: string;
  specialization: string;
  department: string;
  designation: string;
  username: string;
  password: string;
  doj: string;
  image: string;
}

export default function FacultyPage() {
  const [faculty, setFaculty] = useState<Faculty[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const usersPerPage = 8;
  const router = useRouter();

  useEffect(() => { fetchData(); }, []);

  const fetchData = async () => {
    try {
      const res = await getFacultys();
      setFaculty(res.data);
    } catch { console.error('Failed to fetch faculty'); }
  };

  const indexOfLast = currentPage * usersPerPage;
  const indexOfFirst = indexOfLast - usersPerPage;
  const current = faculty.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(faculty.length / usersPerPage);

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this faculty member?')) return;
    try {
      await deleteFaculty(id);
      toast.success('Faculty deleted successfully');
      fetchData();
    } catch { toast.error('Failed to delete faculty'); }
  };

  return (
    <>
      {selectedImage && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative">
            <img src={resolveImageUrl(selectedImage)} alt="Enlarged" className="h-80 w-80 object-cover rounded-full shadow-2xl border-4 border-white" />
            <button onClick={() => setSelectedImage(null)} className="absolute top-1 right-2 text-white text-4xl font-bold cursor-pointer">&times;</button>
          </div>
        </div>
      )}
      <div className="max-h-screen bg-gray-100 rounded-2xl overflow-hidden pb-6">
        <header className="bg-blue-950 flex items-center justify-center px-4 py-4 mb-6 gap-4 shadow-md">
          <img src="/images/logo.png" alt="Logo" className="w-24 h-24 object-cover rounded-full border-4 border-white" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center ml-3">Vedanta Institute of Technology</h2>
        </header>

        <div className="p-6 bg-gradient-to-tr from-blue-900 to-blue-950 text-gray-100 rounded-2xl shadow-md mx-4">
          <div className="mb-4 flex flex-col gap-4">
            <h2 className="text-3xl font-semibold text-gray-100 text-center">Faculty Data Table</h2>
            <hr className="w-2/3 mx-auto" />
            <div className="flex justify-between items-center">
              <button
                onClick={() => router.push('/admin/dashboard/faculty/add')}
                className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-500 transition"
              >
                + Add Faculty
              </button>
              <div className="relative w-full max-w-xs">
                <input type="text" placeholder="Search..." className="w-full pl-9 pr-3 py-1.5 bg-blue-950 text-gray-100 placeholder-gray-400 border-2 border-blue-500 rounded-md focus:outline-none text-sm" />
                <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-max w-full text-sm text-left rounded-md">
              <thead className="bg-blue-950 text-white uppercase text-center">
                <tr>
                  {['Image', 'Name', 'Mobile', 'Email', 'DOB', 'Gender', 'Address', 'Qualification', 'Specialization', 'Department', 'Designation', 'Username', 'Password', 'Date of Joining', 'Actions'].map(h => (
                    <th key={h} className="px-4 py-2">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {current.map(data => (
                  <tr key={data._id} className="border-b font-bold text-center border-blue-800 even:bg-gray-300 odd:bg-gray-400 hover:bg-blue-200">
                    <td className="px-4 py-3">
                      {data.image ? (
                        <img src={resolveImageUrl(data.image)} alt={data.name} onClick={() => setSelectedImage(data.image)} className="w-10 h-10 rounded-full object-cover cursor-pointer" />
                      ) : 'N/A'}
                    </td>
                    <td className="px-4 py-3 text-blue-900">{data.name}</td>
                    <td className="px-4 py-3 text-blue-900">{data.mobile}</td>
                    <td className="px-4 py-3 text-blue-900">{data.email}</td>
                    <td className="px-4 py-3 text-blue-900">{data.dob ? dayjs(data.dob).format('DD-MMM-YYYY') : ''}</td>
                    <td className="px-4 py-3 text-blue-900">{data.gender}</td>
                    <td className="px-4 py-3 text-blue-900">{data.address}</td>
                    <td className="px-4 py-3 text-blue-900">{data.qualification}</td>
                    <td className="px-4 py-3 text-blue-900">{data.specialization}</td>
                    <td className="px-4 py-3 text-blue-900">{data.department}</td>
                    <td className="px-4 py-3 text-blue-900">{data.designation}</td>
                    <td className="px-4 py-3 text-blue-900">{data.username}</td>
                    <td className="px-4 py-3 text-blue-900">{data.password}</td>
                    <td className="px-4 py-3 text-blue-900">{data.doj ? dayjs(data.doj).format('DD-MMM-YYYY') : ''}</td>
                    <td className="px-4 py-3 text-blue-900">
                      <div className="flex items-center justify-center gap-3">
                        <button onClick={() => router.push(`/admin/dashboard/faculty/${data._id}/edit`)} className="text-yellow-500 hover:text-yellow-300"><FaEdit size={18} /></button>
                        <button onClick={() => handleDelete(data._id)} className="text-red-500 hover:text-red-300"><FaTrash size={18} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-4 gap-2">
            <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1} className="px-3 py-1 rounded bg-blue-800 text-white disabled:opacity-50">Prev</button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-white text-blue-950 font-bold' : 'bg-blue-800 text-white'}`}>{i + 1}</button>
            ))}
            <button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages} className="px-3 py-1 rounded bg-blue-800 text-white disabled:opacity-50">Next</button>
          </div>
        </div>
      </div>
    </>
  );
}
