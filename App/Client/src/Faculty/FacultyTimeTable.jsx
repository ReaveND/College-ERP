import React from "react";

const FacultyTimeTable = () => {
  // Engineering College Timetable Example
  const timetable = [
    { day: "Monday", slots: ["Mathematics", "Physics", "CSE Lab", "Break", "Engineering Mechanics"] },
    { day: "Tuesday", slots: ["Chemistry", "Mathematics", "Physics Lab", "Break", "C Programming"] },
    { day: "Wednesday", slots: ["CSE", "Mathematics", "English", "Break", "CSE Lab"] },
    { day: "Thursday", slots: ["Physics", "Chemistry Lab", "Engineering Mechanics", "Break", "CSE"] },
    { day: "Friday", slots: ["C Programming", "Mathematics", "Physics", "Break", "English"] },
  ];

  const slotTimes = ["9:00-10:00", "10:00-11:00", "11:00-12:00", "12:00-12:30", "12:30-1:30"];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-blue-950 mb-6">Faculty Time Table</h1>

      <div className="overflow-x-auto w-full max-w-6xl">
        <table className="min-w-full bg-white shadow-md rounded-lg border border-gray-300">
          <thead className="bg-blue-950 text-white">
            <tr>
              <th className="px-4 py-2 text-left border border-gray-300">Day / Time</th>
              {slotTimes.map((time, index) => (
                <th key={index} className="px-4 py-2 text-left border border-gray-300">{time}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timetable.map((row, index) => (
              <tr key={index} className="hover:bg-blue-100">
                <td className="px-4 py-2 font-semibold border border-gray-300">{row.day}</td>
                {row.slots.map((subject, idx) => (
                  <td key={idx} className="px-4 py-2 border border-gray-300">{subject}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer / Note Section */}
      <div className="mt-6 text-gray-600 text-sm italic">
        📌 *Note: Labs are scheduled in the respective computer/physics/chemistry labs.*
      </div>
    </div>
  );
};

export default FacultyTimeTable;
