// File: StudentProfile.jsx
import React, { useState, useRef } from "react";
import collegeLogo from "../assets/logo.png";

const StudentProfile = ({ StudentData }) => {
  const [showIDCard, setShowIDCard] = useState(false);
  const cardRef = useRef();

  // Function to print ID Card
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-screen-xl mx-auto bg-gray-100 shadow-md rounded-md h-full p-6 space-y-6">
      {/* Header Card */}
      <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150 shadow-lg rounded-2xl p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={collegeLogo}
            alt="College Logo"
            className="w-20 h-20 rounded-full"
          />
          <h2 className="text-3xl font-bold text-blue-950">My Profile</h2>
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
            href="/Login"
            className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </a>
        </div>
      </div>

      {/* Main Profile Card */}
      <div className="bg-white shadow-lg rounded-2xl p-8">
        {/* Profile Overview */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-10">
          <img
            src={StudentData.profilePicture}
            alt="Profile"
            className="w-36 h-36 rounded-full object-cover border-2 border-b-slate-400 shadow-md"
          />
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              {StudentData.fullName}
            </h3>
            <p className="text-gray-700"> {StudentData.department}</p>
            <p className="text-gray-700">
              <span className="font-semibold">ID:</span> {StudentData.ID}
            </p>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-gray-700">
              <p>
                <span className="font-semibold">Roll No:</span>{" "}
                {StudentData.rollNumber}
              </p>
              <p>
                <span className="font-semibold">Reg No:</span>{" "}
                {StudentData.regNumber}
              </p>
              <p>
                <span className="font-semibold">Semester:</span>{" "}
                {StudentData.semester}
              </p>
              <p>
                <span className="font-semibold">Enrollment Year:</span>{" "}
                {StudentData.enrollmentYear}
              </p>
              <p>
                <span className="font-semibold">DOB:</span> {StudentData.dob}
              </p>
            </div>
          </div>
        </div>

        {/* Info Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="p-6 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150 rounded-xl shadow-md hover:shadow-lg transition">
            <h4 className="text-lg font-semibold text-blue-950 mb-4">
              📞 Contact Info
            </h4>
            <p>
              <span className="font-semibold">Email:</span> {StudentData.email}
            </p>
            <p>
              <span className="font-semibold">Phone:</span> {StudentData.phone}
            </p>
          </div>

          {/* Guardian Info */}
          <div className="p-6 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150 rounded-xl shadow-md hover:shadow-lg transition">
            <h4 className="text-lg font-semibold text-blue-950 mb-4">
              👨‍👩‍👧 Guardian Info
            </h4>
            <p>
              <span className="font-semibold">Name:</span>{" "}
              {StudentData.guardianName}
            </p>
            <p>
              <span className="font-semibold">Phone:</span>{" "}
              {StudentData.guardianPhone}
            </p>
          </div>

          {/* Academic Info */}
          <div className="p-6 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150 rounded-xl shadow-md hover:shadow-lg transition">
            <h4 className="text-lg font-semibold text-blue-950 mb-4">
              🎓 Academic Info
            </h4>
            <p>
              <span className="font-semibold">Department:</span>{" "}
              {StudentData.department}
            </p>
            <p>
              <span className="font-semibold">Semester:</span>{" "}
              {StudentData.semester}
            </p>
            <p>
              <span className="font-semibold">Enrollment Year:</span>{" "}
              {StudentData.enrollmentYear}
            </p>
          </div>

          {/* Student ID Card Section */}
          <div className="p-6 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150 rounded-xl shadow-md hover:shadow-lg transition">
            <h4 className="text-lg font-semibold text-blue-950 mb-4">
              📄 Student ID Card
            </h4>
            <div className="space-y-3">
              <button
                onClick={() => setShowIDCard(true)}
                className="block w-full text-center py-2 bg-blue-950 text-white rounded-lg hover:bg-yellow-600 transition"
              >
                Show ID Card
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for ID Card */}
      {showIDCard && (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150 p-6 rounded-xl shadow-lg">
            {/* ID Card */}
            <div
              ref={cardRef}
              className="w-95 h-[480px] bg-white rounded-2xl shadow-xl border border-gray-300 p-5 relative overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <img
                  src={collegeLogo}
                  alt="College Logo"
                  className="w-12 h-12"
                />
                <h2 className="text-lg font-bold text-blue-950 text-center">
                  Vedanta Institute of Technology
                </h2>
              </div>

              {/* Student Photo */}
              <div className="flex justify-center mb-4">
                <img
                  src={StudentData.profilePicture}
                  alt="Student"
                  className="w-28 h-28 rounded-full border-2 border-blue-900 shadow-md object-cover"
                />
              </div>

              {/* Student Info */}
              <div className="text-center space-y-1">
                <h3 className="text-xl font-bold text-blue-950">
                  {StudentData.fullName}
                </h3>
                <p className="text-sm text-gray-700">
                  {StudentData.department} | Semester {StudentData.semester}
                </p>
                <p className="text-sm text-gray-600">
                  Roll No: {StudentData.rollNumber}
                </p>
                <p className="text-sm text-gray-600">
                  Reg No: {StudentData.regNumber}
                </p>
                <p className="text-sm text-gray-600">DOB: {StudentData.dob}</p>
              </div>

              {/* Footer */}
              <div className="absolute bottom-0 left-0 right-0 bg-blue-950 text-white text-xs text-center py-2 rounded-b-2xl">
                Valid Upto: {parseInt(StudentData.enrollmentYear) + 4} <br />
                Contact: {StudentData.phone}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-6 justify-center">
              <button
                onClick={handlePrint}
                className="px-4 py-2 bg-blue-950 text-white rounded-lg hover:bg-blue-800 transition"
              >
                Download
              </button>

              <button
                onClick={() => setShowIDCard(false)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentProfile;
