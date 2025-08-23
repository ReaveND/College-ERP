import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/admin.css";
import Logo from "../assets/logo.png";

const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 p-4 bg-transparent shadow hidden md:block">
        <h3 className="text-2xl font-bold text-center mb-4 py-2 rounded-tl-2xl rounded-br-2xl">
          Admin Panel
        </h3>
        <hr className="mb-4" />
        <nav className="space-y-2 font-sans text-sm font-semibold text-gray-700">
          <NavLink className="block px-5 py-2 rounded hover:bg-gray-200">
            <i className="fas fa-chart-line text-gray-700 mr-3"></i>Dashboard
          </NavLink>
          <NavLink to="/" className="block px-5 py-2 rounded hover:bg-gray-200">
            <i className="fa-brands fa-screenpal text-gray-700 mr-3"></i>Users
          </NavLink>
          <NavLink to="/" className="block px-5 py-2 rounded hover:bg-gray-200">
            <i className="fa-solid fa-sliders text-gray-700 mr-3"></i>Settings
          </NavLink>
          <NavLink to="/" className="block px-5 py-2 rounded hover:bg-gray-200">
            <i className="fa-solid fa-file-lines text-gray-700 mr-3"></i>Reports
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-6 lg:px-6 py-4">
        <div className="max-w-screen-xl mx-auto bg-white shadow-md rounded-md p-6 h-full">
          {/* Header */}
          <div className="bg-[#e9e9e9] flex flex-col sm:flex-row items-center justify-between px-4 py-4 rounded-md mb-6 gap-4">
            <img
              src={Logo}
              alt="Logo"
              className="w-20 h-20 object-cover rounded-full shadow-md"
            />
            <h2 className="text-xl sm:text-2xl font-bold text-center sm:text-left flex-1">
              Vedanta Institute of Technology
            </h2>
            <button className="h-11 px-6 bg-red-500 text-white text-lg rounded-3xl whitespace-nowrap cursor-pointer">
              Contact Us
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Students */}
            <div className="flex items-center bg-[#e9e9e9] p-4 rounded-md h-auto">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-400 shadow-md">
                <i className="fa-solid fa-user-group text-white"></i>
              </div>
              <div className="ml-4">
                <p className="text-xl font-bold">6,500</p>
                <p className="text-sm text-gray-600">Students</p>
              </div>
            </div>

            {/* Courses */}
            <div className="flex items-center bg-[#e9e9e9] p-4 rounded-md h-auto">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-400 shadow-md">
                <i className="fa-solid fa-book-open text-white"></i>
              </div>
              <div className="ml-4">
                <p className="text-xl font-bold">2,300</p>
                <p className="text-sm text-gray-600">Courses</p>
              </div>
            </div>

            {/* Teachers */}
            <div className="flex items-center bg-[#e9e9e9] p-4 rounded-md h-auto">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-400 shadow-md">
                <i className="fa-solid fa-graduation-cap text-white"></i>
              </div>
              <div className="ml-4">
                <p className="text-xl font-bold">1,200</p>
                <p className="text-sm text-gray-600">Teachers</p>
              </div>
            </div>

            {/* Subjects */}
            <div className="flex items-center bg-[#e9e9e9] p-4 rounded-md h-auto">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-400 shadow-md">
                <i className="fa-solid fa-address-book text-white"></i>
              </div>
              <div className="ml-4">
                <p className="text-xl font-bold">1,200</p>
                <p className="text-sm text-gray-600">Subjects</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
