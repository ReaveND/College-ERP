import React, { useState } from 'react';
import collegeLogo from "../assets/logo.png"; 

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bio: '',
    level: 'Freshman',
    gpa: '',
    dateEnrolled: '2022-10-19',
    hobbies: [],
    subjects: ['Computer Science'],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const group = name === 'hobbies' ? 'hobbies' : 'subjects';
      setFormData((prev) => ({
        ...prev,
        [group]: checked
          ? [...prev[group], value]
          : prev[group].filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('What is your name? (required)');
      return;
    }
    console.log('Submitted:', formData);
  };

  return (
    <>
    <div className="bg-[#0c2c5d] text-white text-center px-6 py-8 relative">
              {/* College Logo */}
              <img
                src={collegeLogo}
                alt="Logo"
                className="absolute top-3 left-6 w-28 h-28 rounded-full border-4 border-white object-cover ml-5"
              />
    
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase">
                Vedanta Institute of Technology
              </h1>
              <p className="text-sm sm:text-base mt-2 tracking-wide">
                Student Creation Form
              </p>
    </div>

    <div className="max-w-2xl mx-auto p-6 bg-gradient-to-t from-white to-[#f5f4f4] shadow-2xl rounded-md my-5">
      <h2 className="text-3xl font-semibold mb-4 text-center">Add New Student</h2>
      <hr className='my-5 w-[90%] mx-auto'/>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {/* {!formData.name.trim() && (
            <p className="text-red-500 text-sm mt-1">What is your name? (required)</p>
          )} */}
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>

        {/* Bio */}
        <div>
          <label className="block font-medium">Biographical Statement</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>

        {/* Level */}
        <div>
          <label className="block font-medium">Level</label>
          <select
            name="level"
            value={formData.level}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
          >
            <option>Freshman</option>
            <option>Sophomore</option>
            <option>Junior</option>
            <option>Senior</option>
          </select>
        </div>

        {/* GPA */}
        <div>
          <label className="block font-medium">GPA</label>
          <select
            name="gpa"
            value={formData.gpa}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
          >
            <option value="">Select GPA</option>
            <option>4.0</option>
            <option>3.5</option>
            <option>3.0</option>
            <option>2.5</option>
          </select>
        </div>

        {/* Date Enrolled */}
        <div>
          <label className="block font-medium">Date Enrolled</label>
          <input
            type="date"
            name="dateEnrolled"
            value={formData.dateEnrolled}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md border-green-500"
          />
        </div>

        {/* Hobbies */}
        <div>
          <label className="block font-medium mb-1">Hobbies</label>
          <div className="flex flex-wrap gap-4">
            {['Surfing', 'Running', 'Biking', 'Paddling'].map((hobby) => (
              <label key={hobby} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="hobbies"
                  value={hobby}
                  checked={formData.hobbies.includes(hobby)}
                  onChange={handleChange}
                />
                {hobby}
              </label>
            ))}
          </div>
        </div>

        {/* Subjects */}
        <div>
          <label className="block font-medium mb-1">Subjects</label>
          <div className="flex flex-wrap gap-4">
            {['Math', 'Chemistry', 'Computer Science'].map((subject) => (
              <label key={subject} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="subjects"
                  value={subject}
                  checked={formData.subjects.includes(subject)}
                  onChange={handleChange}
                />
                {subject}
              </label>
            ))}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      {/* Footer */}
      <footer className="mt-8 text-sm text-gray-600 border-t pt-4">
        Vedanta Institute of Technology<br />
        <a href="mailto:ics@hawaii.edu" className="text-blue-500">ics@hawaii.edu</a>
      </footer>
    </div>
    </>
  );
};

export default StudentForm;
