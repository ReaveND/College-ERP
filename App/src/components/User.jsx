import React, { useState } from 'react';
import { FaEdit, FaTrash, FaUserShield } from 'react-icons/fa';

const users = [
  // Add more users here to test pagination
  { id: 'u001', name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active', createdAt: '2025-08-01', lastLogin: '2025-08-23' },
  { id: 'u002', name: 'Bob Singh', email: 'bob@example.com', role: 'Editor', status: 'Suspended', createdAt: '2025-07-15', lastLogin: '2025-08-20' },
  { id: 'u003', name: 'Clara Mendes', email: 'clara@example.com', role: 'Viewer', status: 'Inactive', createdAt: '2025-06-10', lastLogin: '2025-07-30' },
{ id: 'u004', name: 'David Kim', email: 'david@example.com', role: 'Editor', status: 'Active', createdAt: '2025-08-05', lastLogin: '2025-08-24' },
{ id: 'u005', name: 'Ella Zhang', email: 'ella@example.com', role: 'Admin', status: 'Suspended', createdAt: '2025-05-22', lastLogin: '2025-08-10' },
{ id: 'u006', name: 'Farhan Ali', email: 'farhan@example.com', role: 'Viewer', status: 'Active', createdAt: '2025-07-01', lastLogin: '2025-08-21' },
{ id: 'u007', name: 'Grace Lee', email: 'grace@example.com', role: 'Editor', status: 'Active', createdAt: '2025-06-18', lastLogin: '2025-08-22' },
{ id: 'u008', name: 'Hiro Tanaka', email: 'hiro@example.com', role: 'Admin', status: 'Inactive', createdAt: '2025-04-30', lastLogin: '2025-07-15' },
{ id: 'u009', name: 'Isla Patel', email: 'isla@example.com', role: 'Viewer', status: 'Active', createdAt: '2025-08-10', lastLogin: '2025-08-24' },
{ id: 'u010', name: 'Jack Thompson', email: 'jack@example.com', role: 'Editor', status: 'Suspended', createdAt: '2025-07-25', lastLogin: '2025-08-19' },
{ id: 'u011', name: 'Kavita Rao', email: 'kavita@example.com', role: 'Admin', status: 'Active', createdAt: '2025-06-05', lastLogin: '2025-08-23' },
{ id: 'u012', name: 'Leo Martins', email: 'leo@example.com', role: 'Viewer', status: 'Inactive', createdAt: '2025-05-12', lastLogin: '2025-07-28' },
{ id: 'u013', name: 'Maya Chen', email: 'maya@example.com', role: 'Editor', status: 'Active', createdAt: '2025-08-15', lastLogin: '2025-08-24' },
{ id: 'u014', name: 'Nikhil Das', email: 'nikhil@example.com', role: 'Admin', status: 'Suspended', createdAt: '2025-07-03', lastLogin: '2025-08-18' },
{ id: 'u015', name: 'Olivia Brooks', email: 'olivia@example.com', role: 'Viewer', status: 'Active', createdAt: '2025-06-28', lastLogin: '2025-08-22' },
{ id: 'u016', name: 'Pedro Alvarez', email: 'pedro@example.com', role: 'Editor', status: 'Inactive', createdAt: '2025-05-19', lastLogin: '2025-07-20' },
{ id: 'u017', name: 'Qi Wei', email: 'qi@example.com', role: 'Admin', status: 'Active', createdAt: '2025-08-12', lastLogin: '2025-08-24' },
{ id: 'u018', name: 'Riya Kapoor', email: 'riya@example.com', role: 'Viewer', status: 'Suspended', createdAt: '2025-07-08', lastLogin: '2025-08-17' },
{ id: 'u019', name: 'Samir Mehta', email: 'samir@example.com', role: 'Editor', status: 'Active', createdAt: '2025-06-15', lastLogin: '2025-08-23' },
{ id: 'u020', name: 'Tara Singh', email: 'tara@example.com', role: 'Admin', status: 'Inactive', createdAt: '2025-05-01', lastLogin: '2025-07-10' }

  // ...add 20+ users for realistic pagination
];

const statusColors = {
  Active: 'bg-green-700 text-green-100',
  Suspended: 'bg-red-700 text-red-100',
  Inactive: 'bg-gray-700 text-gray-300',
};

const User = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 8;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / usersPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <>
        
        <div className="p-6 bg-gray-900 text-gray-100 rounded-2xl shadow-md">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold ml-18 text-gray-100">User Management</h2>
                <div className="relative w-68 mr-8">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-9 pr-3 py-1.5 bg-gray-800 text-gray-100 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                    <i className="fa-solid fa-magnifying-glass fa-beat-fade absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
                </div>
            </div>
        <div className="overflow-x-auto">
        
            <table className="min-w-full text-sm text-left ring-1 ring-gray-300 rounded-md">
                <thead className="bg-gray-800 text-gray-300 uppercase">
                    <tr>
                    <th className="px-4 py-2">User ID</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Role</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Created</th>
                    <th className="px-4 py-2">Last Login</th>
                    <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                {currentUsers.map(user => (
                    <tr key={user.id} className="border-b border-gray-700 even:bg-gray-800 hover:bg-gray-700 hover:ring-2 hover:ring-blue-500">
                    <td className="px-4 py-3">{user.id}</td>
                    <td className="px-4 py-3">{user.name}</td>
                    <td className="px-4 py-3">{user.email}</td>
                    <td className="px-4 py-3">{user.role}</td>
                    <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[user.status]}`}>
                        {user.status}
                    </span>
                    </td>
                    <td className="px-4 py-2">{user.createdAt}</td>
                    <td className="px-4 py-2">{user.lastLogin}</td>
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

        {/* Pagination Controls */}
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
    </>
  );
};

export default User;
