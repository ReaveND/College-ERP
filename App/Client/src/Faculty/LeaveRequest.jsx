import React, { useState } from "react";
import collegeLogo from "../assets/logo.png";

const LeaveRequest = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [form, setForm] = useState({
    name: "",
    fromDate: "",
    toDate: "",
    reason: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.fromDate || !form.toDate || !form.reason) {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    const newRequest = {
      id: Date.now(),
      ...form,
      status: "Pending",
    };

    setLeaveRequests([...leaveRequests, newRequest]);
    setForm({ name: "", fromDate: "", toDate: "", reason: "" });
  };

  return (
    <div className="max-w-6xl mx-auto bg-gray-100 shadow-md rounded-md min-h-screen p-6">
      {/* Header Card */}
      <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150 w-full p-6 rounded-xl shadow-lg mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={collegeLogo}
            alt="College Logo"
            className="w-20 h-20 rounded-full"
          />
          <h1 className="text-3xl font-bold text-blue-950">
            Leave Request
          </h1>
        </div>
        <div className="flex gap-4">
          <a
            href="/dashboard"
            className="bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Back to Dashboard
          </a>
          <a
            href="/logout"
            className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </a>
        </div>
      </div>

      {/* Leave Request Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl w-full mx-auto">
        {/* Page Header */}
        <h1 className="text-2xl font-bold text-blue-950 mb-6">
          Leave Application
        </h1>

        {/* Leave Request Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 mb-8 bg-gray-50 p-6 rounded-xl"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={form.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="date"
              name="fromDate"
              value={form.fromDate}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="date"
              name="toDate"
              value={form.toDate}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <textarea
            name="reason"
            placeholder="Reason for Leave"
            value={form.reason}
            onChange={handleChange}
            rows="3"
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          ></textarea>

          <button
            type="submit"
            className="px-6 py-2 bg-blue-950 text-white rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            Submit Request
          </button>
        </form>

        {/* Submitted Requests */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          📂 Submitted Requests
        </h2>

        {leaveRequests.length === 0 ? (
          <p className="text-gray-500">No leave requests submitted yet.</p>
        ) : (
          <ul className="space-y-4">
            {leaveRequests.map((req) => (
              <li
                key={req.id}
                className="flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-50 p-4 rounded-lg shadow"
              >
                <div>
                  <p className="font-semibold text-blue-950">{req.name}</p>
                  <p className="text-sm text-gray-600">
                    {req.fromDate} → {req.toDate}
                  </p>
                  <p className="text-sm text-gray-600">Reason: {req.reason}</p>
                </div>
                <span className="mt-2 md:mt-0 px-3 py-1 text-xs font-semibold bg-yellow-200 text-yellow-800 rounded-full">
                  {req.status}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LeaveRequest;
