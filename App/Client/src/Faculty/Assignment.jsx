import React, { useState } from "react";

const Assignment = () => {
  const [assignments, setAssignments] = useState([
    { id: 1, title: "DBMS – Normalization Assignment", dueDate: "2025-09-20" },
    { id: 2, title: "Operating System – Process Scheduling Case Study", dueDate: "2025-09-25" },
    { id: 3, title: "Computer Networks – Routing Algorithms Report", dueDate: "2025-09-28" },
  ]);
  const [title, setTitle] = useState("");
    const [dueDate, setDueDate] = useState("");

  // Add new assignment
  const handleAdd = () => {
    if (!title || !dueDate) return;
    const newAssignment = {
      id: assignments.length + 1,
      title,
      dueDate,
    };
    setAssignments([...assignments, newAssignment]);
    setTitle("");
    setDueDate("");
  };

  // Delete assignment
  const handleDelete = (id) => {
    setAssignments(assignments.filter((a) => a.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-950 mb-6">Manage Assignments</h1>

      {/* Add Assignment Form */}
      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <h2 className="text-xl font-semibold text-blue-950 mb-4">Add Assignment</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="e.g. Java – OOP Concepts Project"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded-lg px-3 py-2 flex-1"
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="border rounded-lg px-3 py-2"
          />
          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-blue-950 text-white rounded-lg hover:bg-yellow-600 hover:text-black transition"
          >
            Add
          </button>
        </div>
      </div>

      {/* Assignment List */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold text-blue-950 mb-4">Assignments</h2>
        {assignments.length === 0 ? (
          <p className="text-gray-500">No assignments available.</p>
        ) : (
          <ul className="space-y-4">
            {assignments.map((assignment) => (
              <li
                key={assignment.id}
                className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm"
              >
                <div>
                  <h3 className="text-lg font-bold text-blue-950">{assignment.title}</h3>
                  <p className="text-sm text-gray-600">Due: {assignment.dueDate}</p>
                </div>
                <button
                  onClick={() => handleDelete(assignment.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-500 transition"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Assignment;
