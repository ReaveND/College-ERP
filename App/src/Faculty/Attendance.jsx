import React, { useState } from "react";

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
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-950 mb-6">Mark Student Attendance</h1>

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
