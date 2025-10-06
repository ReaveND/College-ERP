import React, { useState, useEffect } from 'react';
import Logo from "../assets/logo.png";
import { FaEdit, FaTrash, FaUserShield } from 'react-icons/fa';
import { getFacultys } from '../Service/api.js';
import dayjs from 'dayjs';


// const statusColors = {
//   Active: 'bg-green-700 text-green-100',
//   Suspended: 'bg-red-700 text-red-100',
//   Inactive: 'bg-gray-700 text-gray-300',
// };

const FacultyTable = () => {
  const [faculty, getFaculty] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 8;

  useEffect(() => {
    getFacultysData();
  }, []);

  const getFacultysData = async () => {
    const res = await getFacultys();
    getFaculty(res.data); 
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = faculty.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(faculty.length / usersPerPage);

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
        <div className="p-6 bg-gray-900 text-gray-100 rounded-2xl shadow-md mx-4">
          <div className="mb-4 flex flex-col gap-4">
              <h2 className="text-3xl font-semibold text-gray-100 text-center">Faculty Data Table</h2>
              <hr className=' w-2/3 mx-auto'></hr>
              <div className="flex justify-end">
                  <div className="relative w-full max-w-xs">
                  <input
                      type="text"
                      placeholder="Search..."
                      className="w-full pl-9 pr-3 py-1.5 bg-gray-800 text-gray-100 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  <i className="fa-solid fa-magnifying-glass fa-beat-fade absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
                  </div>
              </div>
          </div>
          

          <div className="overflow-x-auto scrollbar-hide">
            <table className="min-w-max w-full text-sm text-left ring-1 ring-gray-300 rounded-md">

              <thead className="bg-gray-800 text-gray-300 uppercase">
                <tr>
                  <th className="px-4 py-2">Image</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Mobile Number</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Date of Birth</th>
                  <th className="px-4 py-2">Gender</th>
                  <th className="px-4 py-2">Address</th>
                  <th className="px-4 py-2">Education Qualification</th>
                  <th className="px-4 py-2">Specialization</th>
                  <th className="px-4 py-2">Department</th>
                  <th className="px-4 py-2">Designation</th>
                  <th className="px-4 py-2">Username</th>
                  <th className="px-4 py-2">Password</th>
                  <th className="px-4 py-2">Date of Joining</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>

              <tbody>
                {currentUsers.map((data) => (
                  <tr key={data.id} className="border-b border-gray-700 even:bg-gray-800 hover:bg-gray-700 hover:ring-2 hover:ring-blue-500">
                      <td className="px-4 py-3">
                        {data.image ? (
                        <img
                            src={`http://localhost:8000/Uploads/${data.image}`}
                            alt={data.name}
                            onClick={() => setSelectedImage(data.image)}
                            className="w-10 h-10 rounded-full object-cover border"
                        />
                        ) : (
                        'N/A'
                        )}
                      </td>
                      <td className="px-4 py-3">{data.name}</td>
                      <td className="px-4 py-3">{data.mobile}</td>
                      <td className="px-4 py-3">{data.email}</td>
                      <td className="px-4 py-3">
                          {data.dob ? dayjs(data.dob).format('DD-MMM-YYYY') : ''}
                      </td>
                      <td className="px-4 py-3">{data.gender}</td>
                      <td className="px-4 py-3">{data.address}</td>
                      <td className="px-4 py-3">{data.qualification}</td>
                      <td className="px-4 py-3">{data.specialization}</td>
                      <td className="px-4 py-3">{data.department}</td>
                      <td className="px-4 py-3">{data.designation}</td>
                      <td className="px-4 py-3">{data.username}</td>
                      <td className="px-4 py-3">{data.password}</td>
                      <td className="px-4 py-3">{data.doj}</td>

                      <td className="px-4 py-2 flex gap-2 text-gray-500">
                          <button title="Edit" className="hover:text-blue-600"><FaEdit /></button>
                          <button title="Delete" className="hover:text-red-600"><FaTrash /></button>
                          <button title="Promote" className="hover:text-green-600"><FaUserShield /></button>
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
                className={`px-3 py-1 text-sm rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-500 hover:bg-gray-400'}`}
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

export default FacultyTable;
