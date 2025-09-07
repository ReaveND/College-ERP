import React from 'react';

const StudentProfile = ({ StudentData }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">My Profile</h2>

      <div className="flex items-center gap-6 mb-8">
        <img
          src={StudentData.profilePicture}
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover border-2 border-gray-300"
        />
        <div>
          <h3 className="text-xl font-bold text-gray-900">{StudentData.fullName}</h3>
          <p className="text-gray-700">Roll No: {StudentData.rollNumber}</p>
          <p className="text-gray-700">Registration No: {StudentData.regNumber}</p>
          <p className="text-gray-700">Department: {StudentData.department}</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">📞 Contact Info</h4>
          <p>Email: <span className="text-gray-700">{StudentData.email}</span></p>
          <p>Phone: <span className="text-gray-700">{StudentData.phone}</span></p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">🎓 Academic Info</h4>
          <p>Date of Birth: <span className="text-gray-700">{StudentData.dob}</span></p>
          <p>Semester: <span className="text-gray-700">{StudentData.semester}</span></p>
          <p>Enrollment Year: <span className="text-gray-700">{StudentData.enrollmentYear}</span></p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">👨‍👩‍👧 Guardian Info</h4>
          <p>Name: <span className="text-gray-700">{StudentData.guardianName}</span></p>
          <p>Phone: <span className="text-gray-700">{StudentData.guardianPhone}</span></p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">📄 Documents</h4>
          <div className="space-y-2">
            <a
              href={StudentData.idCardUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Download ID Card
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
