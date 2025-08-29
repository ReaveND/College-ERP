import React from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import "../assets/css/admin.css";
import Logo from "../assets/logo.png";

const Admin = () => {

  const location = useLocation();
  const hideHeader = ['/Dashboard', '/Admission', '/Users'].includes(location.pathname);
  const [,setShowDashboard] = useState(false);
  const navigate = useNavigate();
  
useEffect(() => {
  const show = ['/Dashboard', '/Admission', '/Users'].includes(location.pathname);
  setShowDashboard(show);
}, [location.pathname]);


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 p-4 shadow hidden md:block">
        <h3 className="text-2xl font-bold text-center mb-4 py-2 rounded-tl-2xl rounded-br-2xl">
          Admin Panel
        </h3>
        <hr className="mb-4" />
        <nav className="space-y-2 font-sans text-sm font-semibold text-gray-700">
          <NavLink
            to={location.pathname === '/Dashboard' ? '/' : '/Dashboard'}
            onClick={(e) => {
              e.preventDefault(); // prevent default NavLink behavior
              const targetPath = location.pathname === '/Dashboard' ? '/' : '/Dashboard';
              navigate(targetPath);
              setShowDashboard(targetPath === '/Dashboard');
            }}
            className={`block px-5 py-2 rounded transition-colors ${
              location.pathname === '/Dashboard' ? 'bg-blue-950 text-white font-bold' : 'hover:bg-gray-200'
            }`}
          >
            <i className="fas fa-chart-line mr-3"></i>Dashboard
          </NavLink>

          <NavLink
            to={location.pathname === '/Admission' ? '/' : '/Admission'}
            onClick={(e) => {
              e.preventDefault(); // prevent default NavLink behavior
              const targetPath = location.pathname === '/Admission' ? '/' : '/Admission';
              navigate(targetPath);
              setShowDashboard(targetPath === '/Dashboard'); // keep dashboard logic intact
            }}
            className={`block px-5 py-2 rounded transition-colors ${
              location.pathname === '/Admission' ? 'bg-blue-950 text-white font-bold' : 'hover:bg-gray-200'
            }`}
          >
            <i class="fa-solid fa-ticket mr-3"></i>Admission
          </NavLink>

          <NavLink
            to={location.pathname === '/Users' ? '/' : '/Users'}
            onClick={(e) => {
              e.preventDefault(); // prevent default NavLink behavior
              const targetPath = location.pathname === '/Users' ? '/' : '/Users';
              navigate(targetPath);
              setShowDashboard(targetPath === '/Dashboard'); // keep dashboard logic intact
            }}
            className={`block px-5 py-2 rounded transition-colors ${
              location.pathname === '/Users' ? 'bg-blue-950 text-white font-bold' : 'hover:bg-gray-200'
            }`}
          >
            <i class="fa-solid fa-users mr-3"></i>Users
          </NavLink>

          {/* Future links - disabled for now */}
          <span className="block px-5 py-2 rounded text-gray-400 cursor-not-allowed">
            <i className="fa-solid fa-sliders mr-3"></i>Settings
          </span>
          <span className="block px-5 py-2 rounded text-gray-400 cursor-not-allowed">
            <i className="fa-solid fa-file-lines mr-3"></i>Reports
          </span>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-6 lg:px-6 py-4">
        <div className="max-w-screen-xl mx-auto bg-white shadow-md rounded-md p-6 h-full">
          
          {/* Header */}
          {!hideHeader &&(
          <>
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
                <a href="tel:+91-9433558306">Contact Us</a>
              </button>
            </div>
            <div className="max-w-4xl bg-transparent shadow mx-auto p-6 mt-35 flex justify-center sm:flex-row [text-shadow:_1px_1px_2px_gray]">
              <h1 className="text-4xl font-bold leading-snug"><img src="https://readme-typing-svg.herokuapp.com/?font=Jersey+20+Charted&color=F70000&size=50&center=true&vCenter=true&width=500&height=70&duration=4000&lines=Hi+There+!+👋;+I'm+Rupak+Sarkar+!;+Nice+to+Meet+You+(●'◡'●);" width={"600"}/></h1>
            </div>
          </>
          )}
          {/* Nested route content */}
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Admin;
