// AcademicCalendar.jsx
import React from "react";

const calendarData = [
  {
    month: "July 2025",
    events: [
      { date: "15 July", activity: "Semester Begins (Odd Semester)", notes: "All departments" },
      { date: "20 July", activity: "Last Date for Fee Payment", notes: "Late fine applicable afterwards" },
    ],
  },
  {
    month: "August 2025",
    events: [
      { date: "15 Aug", activity: "Independence Day", notes: "National Holiday" },
      { date: "25 Aug", activity: "Mid-Semester Exam Notification", notes: "Circular will be uploaded" },
    ],
  },
  {
    month: "September 2025",
    events: [
      { date: "01–07 Sep", activity: "Mid-Semester Exams", notes: "Internal evaluation" },
      { date: "10 Sep", activity: "Assignment Submission", notes: "Departmental collection" },
    ],
  },
  {
    month: "October 2025",
    events: [
      { date: "02 Oct", activity: "Gandhi Jayanti", notes: "National Holiday" },
      { date: "25 Oct", activity: "End of Odd Semester Classes", notes: "All subjects completed" },
    ],
  },
  {
    month: "November 2025",
    events: [
      { date: "01–10 Nov", activity: "Final Semester Exams", notes: "University level exam" },
      { date: "15 Nov", activity: "Semester Break Begins", notes: "Winter vacation starts" },
    ],
  },
];

const AcademicCalendar = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-950 mb-10">
        Academic Calendar 2025 – 26
      </h1>

      {calendarData.map((monthData, idx) => (
        <div key={idx} className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b-2 border-yellow-500 pb-2">
            {monthData.month}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse shadow-md rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-950 text-white text-left">
                  <th className="px-4 py-3 w-1/5">Date</th>
                  <th className="px-4 py-3 w-2/5">Event / Activity</th>
                  <th className="px-4 py-3 w-2/5">Notes</th>
                </tr>
              </thead>
              <tbody>
                {monthData.events.map((event, i) => (
                  <tr
                    key={i}
                    className={`${
                      i % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-yellow-50 transition`}
                  >
                    <td className="px-4 py-3 font-medium text-gray-700">
                      {event.date}
                    </td>
                    <td className="px-4 py-3 text-gray-800">{event.activity}</td>
                    <td className="px-4 py-3 text-gray-600">{event.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      {/* Footer note */}
      <div className="mt-12 bg-yellow-100 text-yellow-900 p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold mb-2">Important Notes:</h3>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>All dates are tentative and subject to change by the University.</li>
          <li>Students must check the official notice board & website regularly.</li>
          <li>Exams will follow the MAKAUT University guidelines.</li>
        </ul>
      </div>
    </div>
  );
};

export default AcademicCalendar;
