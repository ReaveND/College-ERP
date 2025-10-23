import React from 'react';
import { NavLink } from 'react-router-dom';


const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xl">
      <div className="relative bg-gradient-to-t from-blue-900 to-blue-950 rounded-lg shadow-lg w-full max-w-md p-6">
        {/* Close Button (X) */}
        <button
          className="absolute top-2 right-5 text-white hover:text-gray-400 text-2xl font-bold cursor-pointer"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        {/* Modal Content */}
        <h2 className="text-xl font-semibold mb-4 text-center text-white">Login to Dashboard</h2>
        <p className="mb-6 text-white text-center">Welcome to VIT. Please choose your Login method!</p>

        {/* Action Buttons */}
        <div className="flex justify-between">
          <NavLink to="/StudentLogin">
            <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 hover:scale-105 duration-400 cursor-pointer">
              Student Login
            </button>
          </NavLink>
          <NavLink to="/FacultyLogin">
            <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 hover:scale-105 duration-400 cursor-pointer">
              Faculty Login
            </button>
          </NavLink>
          <NavLink to="/AdminLogin">
            <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 hover:scale-105 duration-400 cursor-pointer">
              Admin Login
            </button>
          </NavLink>
        </div>

      </div>
    </div>
  );
};

export default Modal;