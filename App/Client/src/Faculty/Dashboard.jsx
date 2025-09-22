import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-950 mb-6">Faculty Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-blue-950 p-6 rounded-xl shadow hover:shadow-lg transition text-white hover:bg-yellow-600 hover:text-black">
          <h2 className="text-lg font-semibold">Total Students</h2>
          <p className="text-3xl font-bold mt-2">120</p>
        </div>
        <div className="bg-blue-950 p-6 rounded-xl shadow hover:shadow-lg transition text-white hover:bg-yellow-600 hover:text-black">
          <h2 className="text-lg font-semibold">Classes Today</h2>
          <p className="text-3xl font-bold mt-2">4</p>
        </div>
        <div className="bg-blue-950 p-6 rounded-xl shadow hover:shadow-lg transition text-white hover:bg-yellow-600 hover:text-black">
          <h2 className="text-lg font-semibold">Assignments Pending</h2>
          <p className="text-3xl font-bold mt-2">15</p>
        </div>
        <div className="bg-blue-950 p-6 rounded-xl shadow hover:shadow-lg transition text-white hover:bg-yellow-600 hover:text-black">
          <h2 className="text-lg font-semibold">Leave Requests</h2>
          <p className="text-3xl font-bold mt-2">3</p>
        </div>
      </div>

      {/* Announcements */}
      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <h2 className="text-xl font-bold text-blue-950 mb-4">Latest Announcements</h2>
        <ul className="space-y-3 text-gray-700">
          <li>📌 Mid-Sem Exam schedule released.</li>
          <li>📌 Faculty meeting on Friday at 2 PM.</li>
          <li>📌 Submit attendance by end of the week.</li>
        </ul>
      </div>

      {/* Quick Links */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold text-blue-950 mb-4">Quick Links</h2>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/timetable"
            className="px-4 py-2 bg-blue-950 text-white rounded-lg hover:bg-yellow-600 hover:text-black transition"
          >
            View Timetable
          </Link>
          <Link
            to="/attendance"
            className="px-4 py-2 bg-blue-950 text-white rounded-lg hover:bg-yellow-600 hover:text-black transition"
          >
            Mark Attendance
          </Link>
          <Link
            to="/assignment"
            className="px-4 py-2 bg-blue-950 text-white rounded-lg hover:bg-yellow-600 hover:text-black transition"
          >
            Manage Assignments
          </Link>
          <Link
            to="/marksupload"
            className="px-4 py-2 bg-blue-950 text-white rounded-lg hover:bg-yellow-600 hover:text-black transition"
          >
            Upload Marks
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
