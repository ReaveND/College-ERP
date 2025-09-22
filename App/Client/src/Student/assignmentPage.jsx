// File: AssignmentPage.jsx
import React, { useState } from "react";

const AssignmentPage = () => {
  const allAssignments = [
    {
      id: 1,
      subject: "Data Structures",
      title: "Implement Stack using Array",
      dueDate: "2025-09-25",
      status: "Pending",
    },
    {
      id: 2,
      subject: "Operating System",
      title: "CPU Scheduling Algorithms Report",
      dueDate: "2025-09-28",
      status: "Submitted",
    },
    {
      id: 3,
      subject: "Computer Networks",
      title: "Case Study on TCP/IP",
      dueDate: "2025-10-02",
      status: "Pending",
    },
    {
      id: 4,
      subject: "Java OOP",
      title: "Polymorphism Assignment",
      dueDate: "2025-10-05",
      status: "Submitted",
    },
  ];

  const [filter, setFilter] = useState("All");
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  // Filtered assignments
  const assignments =
    filter === "All"
      ? allAssignments
      : allAssignments.filter((a) => a.status === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-blue-950 mb-8 text-center drop-shadow-sm">
          🎓 Student Assignments
        </h1>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          {["All", "Pending", "Submitted"].map((btn) => (
            <button
              key={btn}
              onClick={() => setFilter(btn)}
              className={`px-5 py-2 rounded-lg font-medium shadow-md transition ${
                filter === btn
                  ? "bg-blue-950 text-white scale-105"
                  : "bg-yellow-600 text-white hover:bg-yellow-500"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>

        {/* Assignment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assignments.map((assignment) => (
            <div
              key={assignment.id}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1 transition transform"
            >
              <h2 className="text-xl font-bold text-blue-950">
                {assignment.subject}
              </h2>
              <p className="text-gray-700 mt-2">{assignment.title}</p>
              <p className="text-sm text-gray-500 mt-2">
                Due: {assignment.dueDate}
              </p>
              <span
                className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-medium ${
                  assignment.status === "Submitted"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {assignment.status}
              </span>
              <button
                onClick={() => setSelectedAssignment(assignment)}
                className="w-full mt-4 py-2 bg-blue-950 text-white rounded-lg hover:bg-yellow-600 transition"
              >
                View / Submit
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedAssignment && (
          <div className="fixed inset-0 bg-gradient-to-br from-blue-200/60 via-yellow-100/70 to-blue-300/60 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white w-96 p-6 rounded-2xl shadow-xl relative animate-fadeIn">
              <h2 className="text-xl font-bold text-blue-950">
                {selectedAssignment.subject}
              </h2>
              <p className="text-gray-700 mt-2">{selectedAssignment.title}</p>
              <p className="text-sm text-gray-500 mt-2">
                Due: {selectedAssignment.dueDate}
              </p>

              {/* If Pending → Show File Upload, else Show Submitted Msg */}
              {selectedAssignment.status === "Pending" ? (
                <div className="mt-4">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Upload File
                  </label>
                  <input
                    type="file"
                    onChange={(e) => setSelectedFile(e.target.files[0])}
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  {selectedFile && (
                    <p className="mt-2 text-sm text-green-600">
                      Selected: {selectedFile.name}
                    </p>
                  )}
                </div>
              ) : (
                <p className="mt-6 text-green-700 font-medium">
                  ✅ This assignment has already been submitted.
                </p>
              )}

              {/* Buttons */}
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => {
                    setSelectedAssignment(null);
                    setSelectedFile(null);
                  }}
                  className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
                >
                  Close
                </button>

                {selectedAssignment.status === "Pending" && (
                  <button
                    onClick={() => {
                      alert(
                        `Submitted: ${
                          selectedFile ? selectedFile.name : "No file"
                        }`
                      );
                      setSelectedAssignment(null);
                      setSelectedFile(null);
                    }}
                    className="px-4 py-2 rounded-lg bg-yellow-600 text-white hover:bg-yellow-500"
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-600">
          Vedanta Institute of Technology <br />
          Anandapur Rd, Uchhepota, Kolkata, West Bengal 700150
        </div>
      </div>
    </div>
  );
};

export default AssignmentPage;
