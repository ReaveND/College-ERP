import React, { useState, useEffect } from 'react';
import Logo from "../assets/logo.png";
import { FaEdit, FaTrash, FaUserShield } from 'react-icons/fa';
import { getAdmins } from '../Service/api.js'; 
import dayjs from 'dayjs';

const AdminTable = () => {
  const [admins, setAdmins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 8;

  useEffect(() => {
    fetchAdminsData();
  }, []);

  const fetchAdminsData = async () => {
    try {
      const res = await getAdmins();
      setAdmins(res.data);
    } catch (error) {
      console.error("Error fetching admin data:", error);
    }
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = admins.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(admins.length / usersPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
        {selectedImage && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="relative">
                <img
                src={`http://localhost:8000/Uploads/${selectedImage}`}
                alt="Enlarged"
                className="h-100 w-100 object-cover rounded-full shadow-2xl border-4 border-white"
                />
                <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-1 right-2 text-white text-4xl font-bold cursor-pointer"
                >
                &times;
                </button>
            </div>
            </div>
        )}
        <div className="max-h-screen bg-gray-100 rounded-2xl overflow-hidden pb-6">
        {/* Header */}
        <header className="bg-blue-950 flex flex-col sm:flex-row items-center justify-center px-4 py-4 mb-6 gap-4 shadow-md">
            <div className="flex items-center gap-4">
            <img
                src={Logo}
                alt="Logo"
                className="w-24 h-24 object-cover rounded-full border-4 border-white"
            />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center ml-3">
                Vedanta Institute of Technology
            </h2>
            </div>
        </header>

        {/* Table Section */}
        <div className="p-6 bg-gradient-to-tr from-blue-900 to-blue-950 text-gray-100 rounded-2xl shadow-md mx-4">
            <div className="mb-4 flex flex-col gap-4">
            <h2 className="text-3xl font-semibold text-gray-100 text-center">
                Admin Data Table
            </h2>
            <hr className="w-2/3 mx-auto" />
            <div className="flex justify-end">
                <div className="relative w-full max-w-xs">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-9 pr-3 py-1.5 bg-blue-950 text-gray-100 placeholder-gray-400 border-2 border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <i className="fa-solid fa-magnifying-glass fa-beat-fade absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
                </div>
            </div>
            </div>

            <div className="overflow-x-auto scrollbar-hide">
            <table className="min-w-max w-full text-sm text-left ring-1 ring-gray-300 rounded-md">
                <thead className="bg-blue-950 text-white uppercase text-center">
                <tr>
                    <th className="px-4 py-2">Image</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Mobile Number</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Date of Birth</th>
                    <th className="px-4 py-2">Address</th>
                    <th className="px-4 py-2">District</th>
                    <th className="px-4 py-2">State</th>
                    <th className="px-4 py-2">Username</th>
                    <th className="px-4 py-2">Password</th>
                    <th className="px-4 py-2">Actions</th>
                </tr>
                </thead>

                <tbody>
                {currentUsers.map((data) => (
                    <tr
                    key={data._id}
                    className="border-b font-bold text-center border-blue-800 even:bg-gray-300 odd:bg-gray-400 hover:bg-blue-200"
                    >
                    <td className="px-4 py-3">
                        {data.image ? (
                        <img
                            src={`http://localhost:8000/Uploads/${data.image}`}
                            alt={data.name}
                            onClick={() => setSelectedImage(data.image)}
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        ) : (
                        'N/A'
                        )}
                    </td>
                    <td className="px-4 py-3 text-blue-900">{data.name}</td>
                    <td className="px-4 py-3 text-blue-900">{data.mobile}</td>
                    <td className="px-4 py-3 text-blue-900">{data.email}</td>
                    <td className="px-4 py-3 text-blue-900">
                        {data.dob ? dayjs(data.dob).format('DD-MMM-YYYY') : ''}
                    </td>
                    <td className="px-4 py-3 text-blue-900">{data.address}</td>
                    <td className="px-4 py-3 text-blue-900">{data.district}</td>
                    <td className="px-4 py-3 text-blue-900">{data.state}</td>
                    <td className="px-4 py-3 text-blue-900">{data.username}</td>
                    <td className="px-4 py-3 text-blue-900">{data.password}</td>
                    <td className="px-4 py-2 flex gap-2 text-gray-500">
                        <button title="Edit" className="hover:text-blue-600">
                        <FaEdit />
                        </button>
                        <button title="Delete" className="hover:text-red-600">
                        <FaTrash />
                        </button>
                        <button title="Promote" className="hover:text-green-600">
                        <FaUserShield />
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-4 gap-2">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                className="px-3 py-1 text-sm bg-gray-600 rounded hover:bg-gray-500 disabled:opacity-50"
                disabled={currentPage === 1}
            >
                Prev
            </button>
            {[...Array(totalPages)].map((_, i) => (
                <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-3 py-1 text-sm rounded ${
                    currentPage === i + 1
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-500 hover:bg-gray-400'
                }`}
                >
                {i + 1}
                </button>
            ))}
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="px-3 py-1 text-sm bg-gray-600 rounded hover:bg-gray-500 disabled:opacity-50"
                disabled={currentPage === totalPages}
            >
                Next
            </button>
            </div>
        </div>
        </div>
    </>
  );
};

export default AdminTable;
