import React from "react";
import { Link } from "react-router-dom";
import collegeLogo from "../assets/logo.png";


const Dashboard = () => {
  return (
    <div className="max-w-screen-xl mx-auto bg-gray-100 shadow-md rounded-md h-full p-6">
    {/* Header Card */}
      <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150 w-full max-w-6xl p-6 rounded-xl shadow-lg mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={collegeLogo} alt="College Logo" className="w-20 h-20 rounded-full" />
          <h1 className="text-3xl font-bold text-blue-950">Student Dashboard</h1>
        </div>
        <div className="flex gap-4">
          <a
            href="/logout"
            className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </a>
        </div>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-blue-950 p-6 rounded-xl shadow hover:shadow-lg transition text-white hover:bg-yellow-600 hover:text-black">
          <h2 className="text-lg font-semibold">Total Attendance</h2>
          <p className="text-3xl font-bold mt-2">85%</p>
        </div>
        <div className="bg-blue-950 p-6 rounded-xl shadow hover:shadow-lg transition text-white hover:bg-yellow-600 hover:text-black">
          <h2 className="text-lg font-semibold">Classes Attended Today</h2>
          <p className="text-3xl font-bold mt-2">3</p>
        </div>
        <div className="bg-blue-950 p-6 rounded-xl shadow hover:shadow-lg transition text-white hover:bg-yellow-600 hover:text-black">
          <h2 className="text-lg font-semibold">Assignments Pending</h2>
          <p className="text-3xl font-bold mt-2">5</p>
        </div>
        <div className="bg-blue-950 p-6 rounded-xl shadow hover:shadow-lg transition text-white hover:bg-yellow-600 hover:text-black">
          <h2 className="text-lg font-semibold">Total Classes Missed</h2>
          <p className="text-3xl font-bold mt-2">15</p>
        </div>
      </div>

      {/* Announcements */}
      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <h2 className="text-xl font-bold text-blue-950 mb-4">Latest Announcements</h2>
        <ul className="space-y-3 text-gray-700">
          <li>📌 Mid-Sem Exam schedule released.</li>
          <li>📌 Study-materials are uploaded by Faculty.</li>
          <li>📌 Submit assignments by end of the week  .</li>
        </ul>
      </div>

      {/* Quick Links */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold text-blue-950 mb-4">Quick Links</h2>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/StudyMaterials"
            className="px-4 py-2 bg-blue-950 text-white rounded-lg hover:bg-yellow-600 hover:text-black transition"
          >
            View Study Materials
          </Link>
          <Link
            to="/AttendancePage"
            className="px-4 py-2 bg-blue-950 text-white rounded-lg hover:bg-yellow-600 hover:text-black transition"
          >
            Check Attendance
          </Link>
          <Link
            to="/AssignmentPage"
            className="px-4 py-2 bg-blue-950 text-white rounded-lg hover:bg-yellow-600 hover:text-black transition"
          >
            Review Assignments
          </Link>
          <Link
            to="/ResultCard"
            className="px-4 py-2 bg-blue-950 text-white rounded-lg hover:bg-yellow-600 hover:text-black transition"
          >
            Check Result
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
