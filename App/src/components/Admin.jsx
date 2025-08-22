import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/admin.css";

const Admin = () => {
    return(
        <>
            
            <div className="min-h-screen bg-gray-100 flex">
                {/* Sidebar - hidden on small screens */}
                <aside className="w-64 p-4 hidden md:block">
                    <h3 className="text-2xl font-bold text-center mb-4">Admin Panel</h3>
                    <hr className="mb-4" />
                    <nav className="space-y-1 font-sans text-sm font-semibold text-gray-700">
                    <NavLink to="/dashboard" className="block px-5 py-2 rounded hover:bg-gray-200"><i className="fas fa-chart-line text-gray-700 mx-3"></i>Dashboard</NavLink>
                    <NavLink to="/users" className="block px-5 py-2 rounded hover:bg-gray-200"><i class="fa-brands fa-screenpal text-gray mx-3"></i>Users</NavLink>
                    <NavLink to="/settings" className="block px-5 py-2 rounded hover:bg-gray-200"><i class="fa-solid fa-sliders text-gray mx-3"></i>Settings</NavLink>
                    <NavLink to="/reports" className="block px-5 py-2 rounded hover:bg-gray-200"><i class="fa-solid fa-file-lines text-gray mx-3"></i>Reports</NavLink>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 overflow-auto px-4 sm:px-6 lg:px-3 py-3">
                    <div className="max-w-screen-xl mx-auto min-h-full bg-white shadow-md rounded-md p-6">
                    <h1 className="text-2xl font-bold mb-4">User Management</h1>
                    <p className="text-gray-600 mb-6">Manage your team members and their permissions.</p>
                    {/* Add your table or content here */}
                    </div>
                </main>
            </div>
        </>
    )
}

export default Admin;