import React, { useState } from "react";
import collegeLogo from "../assets/logo.png";


const Attendance = () => {
  
  const students = [
    { id: 1, name: "Srirupa Hati", roll: "CSE101" },
    { id: 2, name: "Piu Roy", roll: "CSE102" },
    { id: 3, name: "Ipsita Pal", roll: "CSE103" },
    { id: 4, name: "Sunny ghosh", roll: "CSE104" },
    { id: 5, name: "Priyanka Sharma", roll: "CSE105" },
    { id: 6, name: "Priya Das", roll: "CSE106" },
    { id: 7, name: "Joy Sen", roll: "CSE107" },
    { id: 8, name: "Pritam Sharma", roll: "CSE108" },
    { id: 9, name: "Tania Singha", roll: "CSE109" },
  ];

  
  const [attendance, setAttendance] = useState(
    students.reduce((acc, student) => {
      acc[student.id] = false; 
      return acc;
    }, {})
  );

  const handleCheckboxChange = (id) => {
    setAttendance({ ...attendance, [id]: !attendance[id] });
  };

  const handleSubmit = () => {
    const presentStudents = students.filter(student => attendance[student.id]);
    alert(`Present Students:\n${presentStudents.map(s => s.name).join(", ")}`);
    // Here you can send the data to backend
  };

  return (
    <div className="max-w-screen-xl mx-auto bg-gray-100 shadow-md rounded-md h-full p-6 flex flex-col items-center">
    {/* Header Card */}
      <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150 w-full max-w-6xl p-6 rounded-xl shadow-lg mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={collegeLogo} alt="College Logo" className="w-20 h-20 rounded-full" />
          <h1 className="text-3xl font-bold text-blue-950">Attendance Sheet</h1>
        </div>
        <div className="flex gap-4">
          <a
            href="/Dashboard"
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

      <div className="bg-white shadow-md rounded-lg w-full max-w-3xl p-6">
        <table className="min-w-full border">
          <thead className="bg-blue-950 text-white">
            <tr>
              <th className="px-4 py-2 border">Roll No</th>
              <th className="px-4 py-2 border">Student Name</th>
              <th className="px-4 py-2 border">Present</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id} className="text-center hover:bg-blue-100">
                <td className="px-4 py-2 border">{student.roll}</td>
                <td className="px-4 py-2 border">{student.name}</td>
                <td className="px-4 py-2 border">
                  <input
                    type="checkbox"
                    checked={attendance[student.id]}
                    onChange={() => handleCheckboxChange(student.id)}
                    className="w-5 h-5"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          onClick={handleSubmit}
          className="mt-6 bg-blue-950 text-white px-6 py-2 rounded hover:bg-yellow-500 transition"
        >
          Submit Attendance
        </button>
      </div>
    </div>
  );
};

export default Attendance;
