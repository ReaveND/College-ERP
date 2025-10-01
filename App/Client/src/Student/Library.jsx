import React from "react";
import collegeLogo from "../assets/logo.png";
import ProfilePic from "../assets/pfp.jpg";

const issuedBooks = [
  {
    bookName: "Introduction to Algorithms",
    authorName: "Cormen",
    issueDate: "2025-09-01",
    dueDate: "2025-09-30",
    status: "Issued",
  },
  {
    bookName: "Clean Code",
    authorName: "Robert C. Martin",
    issueDate: "2025-09-05",
    dueDate: "2025-10-05",
    status: "Returned",
  },
  {
    bookName: "Artificial Intelligence",
    authorName: "Stuart Russell",
    issueDate: "2025-09-10",
    dueDate: "2025-10-10",
    status: "Issued",
  },
];

const Library = () => {
  const student = {
    name: "Srabani Kar",
    id: "ST123456",
    category: "Master of Computer Application",
    dept: "Computer Application",
    profilePic: ProfilePic,
    college: {
      name: "Vedanta Institute of Technology",
      logo: collegeLogo,
    },
  };

  return (
    <div className="max-w-screen-xl mx-auto bg-gray-100 shadow-md rounded-md h-full p-6 space-y-6">
      {/* Card 1 - College Info + Buttons */}
      <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150 shadow-lg rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between">
        {/* College Logo & Name */}
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <img
            src={student.college.logo}
            alt="College Logo"
            className="w-20 h-20 object-contain"
          />
          <h2 className="text-2xl font-bold text-blue-950">
            {student.college.name}
          </h2>
        </div>
        {/* Buttons */}
        <div className="flex space-x-4">
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

      {/* Card 2 - Library Card + Student Info */}
      <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150 w-[50%] px-12 py-4 shadow-lg rounded-xl flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Student Details */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Library Card
          </h3>
          <p>
            <span className="font-semibold">Student Name:</span>{" "}
            {student.name}
          </p>
          <p>
            <span className="font-semibold">ID:</span> {student.id}
          </p>
          <p>
            <span className="font-semibold">Category:</span>{" "}
            {student.category}
          </p>
          <p>
            <span className="font-semibold">Department:</span>{" "}
            {student.dept}
          </p>
        </div>

        {/* Profile Pic */}
        <div className="flex flex-col items-center mt-6 md:mt-0">
          <img
            src={student.profilePic}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-2 border-gray-300"
          />
        </div>
      </div>

      {/* Issued Books Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-blue-950 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Book Name</th>
              <th className="py-3 px-6 text-left">Author Name</th>
              <th className="py-3 px-6 text-left">Issue Date</th>
              <th className="py-3 px-6 text-left">Due Date</th>
              <th className="py-3 px-6 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {issuedBooks.map((book, index) => (
              <tr
                key={index}
                className={`border-b ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="py-3 px-6">{book.bookName}</td>
                <td className="py-3 px-6">{book.authorName}</td>
                <td className="py-3 px-6">{book.issueDate}</td>
                <td className="py-3 px-6">{book.dueDate}</td>
                <td
                  className={`py-3 px-6 font-semibold ${
                    book.status === "Issued"
                      ? "text-yellow-600"
                      : "text-green-600"
                  }`}
                >
                  {book.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Library;
