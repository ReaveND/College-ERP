import React, { useState } from "react";
import collegeLogo from "../assets/logo.png";

const MarksUpload = () => {
  const [studentId, setStudentId] = useState("");
  const [studentName, setStudentName] = useState("");
  const [stream, setStream] = useState("");
  const [subject, setSubject] = useState("");
  const [marks, setMarks] = useState("");
  const [records, setRecords] = useState([]);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!studentId || !studentName || !stream || !subject || !marks) {
      alert("⚠️ Please fill all fields!");
      return;
    }

    const newRecord = {
      id: Date.now(),
      studentId,
      studentName,
      stream,
      subject,
      marks,
    };

    setRecords([...records, newRecord]);

    // Clear form
    setStudentId("");
    setStudentName("");
    setStream("");
    setSubject("");
    setMarks("");
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
            Upload Marks
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

      {/* Marks Upload Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        {/* Page Title */}
        <h1 className="text-2xl font-bold text-blue-950 mb-6">
          Marks Upload
        </h1>

        {/* Upload Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 bg-gray-50 p-6 rounded-xl"
        >
          <input
            type="text"
            placeholder="Enter Student ID"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="text"
            placeholder="Enter Student Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <select
            value={stream}
            onChange={(e) => setStream(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">-- Select Stream --</option>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="ECE">ECE</option>
            <option value="BCA">BCA</option>
            <option value="ME">ME</option>
            <option value="CE">CE</option>
            <option value="MCA">MCA</option>
            <option value="BBA">BBA</option>
            <option value="MTech">MTech</option>
            <option value="MBA">MBA</option>
          </select>

          <input
            type="text"
            placeholder="Enter Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="number"
            placeholder="Enter Marks"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <button
            type="submit"
            className="md:col-span-2 px-6 py-2 bg-blue-950 text-white rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            Upload
          </button>
        </form>

        {/* Uploaded Records */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Uploaded Marks
        </h2>

        {records.length === 0 ? (
          <p className="text-gray-500">No marks uploaded yet.</p>
        ) : (
          <table className="w-full border border-gray-300 rounded-lg shadow text-sm md:text-base">
            <thead>
              <tr className="bg-blue-950 text-white">
                <th className="p-2 text-left">Student ID</th>
                <th className="p-2 text-left">Student Name</th>
                <th className="p-2 text-left">Stream</th>
                <th className="p-2 text-left">Subject</th>
                <th className="p-2 text-left">Marks</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr
                  key={record.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="p-2">{record.studentId}</td>
                  <td className="p-2">{record.studentName}</td>
                  <td className="p-2">{record.stream}</td>
                  <td className="p-2">{record.subject}</td>
                  <td className="p-2">{record.marks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default MarksUpload;
