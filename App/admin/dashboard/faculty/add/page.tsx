'use client';

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { addFaculty } from '@/lib/adminApi';

const inputClass =
  'bg-white text-black border border-gray-300 rounded-md px-3 py-2 w-full max-w-xs placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 file:bg-blue-950 file:text-white file:px-2 file:rounded-sm file:cursor-pointer';
const selectClass = inputClass;

export default function AddFacultyPage() {
  const [faculty, setFaculty] = useState({
    name: '', mobile: '', email: '', dob: '', gender: '',
    address: '', district: '', state: '', image: null as File | null,
    qualification: '', specialization: '', department: '',
    designation: '', username: '', password: '',
    experience: '', publication: '', doj: '',
  });

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFaculty({ ...faculty, [e.target.name]: e.target.value });
  };
  const fileData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFaculty({ ...faculty, image: e.target.files?.[0] ?? null });
  };

  const submitData = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!faculty.name) { alert('Please enter Name!'); return; }
    if (!faculty.mobile) { alert('Please enter Mobile Number!'); return; }
    if (faculty.mobile.length !== 10) { alert('Enter a valid 10-digit Mobile Number!'); return; }
    if (!faculty.email) { alert('Please enter Email ID!'); return; }
    if (!faculty.dob) { alert('Please enter Date of Birth!'); return; }
    if (!faculty.gender) { alert('Please select Gender!'); return; }
    if (!faculty.address) { alert('Please enter Address!'); return; }
    if (!faculty.district) { alert('Please enter District!'); return; }
    if (!faculty.state) { alert('Please enter State!'); return; }
    if (!faculty.image) { alert('Please upload Profile Picture!'); return; }
    if (!faculty.qualification) { alert('Please enter Qualification!'); return; }
    if (!faculty.specialization) { alert('Please enter Specialization!'); return; }
    if (!faculty.department) { alert('Please select Department!'); return; }
    if (!faculty.designation) { alert('Please select Designation!'); return; }
    if (!faculty.username) { alert('Please enter Username!'); return; }
    if (faculty.username.length < 5) { alert('Username must be at least 5 characters!'); return; }
    if (!/^[A-Z]/.test(faculty.username)) { alert('Username must start with a capital letter!'); return; }
    if (!faculty.password) { alert('Please enter Password!'); return; }
    if (faculty.password.length < 8) { alert('Password must be at least 8 characters!'); return; }
    if (!faculty.experience) { alert('Please enter Experience!'); return; }
    if (!faculty.publication) { alert('Please enter Publications!'); return; }
    if (!faculty.doj) { alert('Please enter Date of Joining!'); return; }

    const formData = new FormData();
    formData.append('image', faculty.image!, faculty.image!.name);
    (['name','mobile','email','dob','gender','address','district','state','qualification','specialization','department','designation','username','password','experience','publication','doj'] as const)
      .forEach(k => formData.append(k, faculty[k] as string));

    try {
      const res = await addFaculty(formData);
      if (res.status === 201) {
        toast.success('Faculty Member added successfully!');
      } else {
        toast.error('Something went wrong. Please try again!');
      }
    } catch (error: any) {
      if (error?.code === 11000 && error?.keyPattern?.email) {
        toast.error('Email already exists. Please use a different one.');
      } else {
        toast.error('Something went wrong while adding Faculty!');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 rounded-2xl overflow-hidden">
      {/* Header */}
      <header className="bg-blue-950 flex items-center justify-center px-4 py-4 mb-6 gap-4 shadow-md">
        <img src="/images/logo.png" alt="Logo" className="w-24 h-24 mx-auto object-cover rounded-full border-4 border-white" />
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center ml-3">Vedanta Institute of Technology</h2>
      </header>

      <section className="px-4 text-center">
        <hr className="bg-black w-[60%] mx-auto" />
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold my-6">Faculty Recruitment Form</h1>
        <hr className="bg-black w-[60%] mx-auto" />
      </section>

      <section className="flex justify-center px-4 sm:px-6 lg:px-10 my-6">
        <form>
          {/* Personal Details */}
          <div className="bg-gradient-to-r from-blue-950 to-blue-900 text-white w-full max-w-6xl rounded-xl shadow-2xl p-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl text-center mb-2">Personal Details</h3>
            <hr className="bg-white mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
              {[
                { label: 'Name', name: 'name', type: 'text', placeholder: 'Enter Your Name' },
                { label: 'Mobile Number', name: 'mobile', type: 'text', placeholder: 'Enter Mobile Number' },
                { label: 'Email ID', name: 'email', type: 'email', placeholder: 'Enter Email ID' },
                { label: 'Date of Birth', name: 'dob', type: 'date', placeholder: '' },
                { label: 'Address', name: 'address', type: 'text', placeholder: 'Enter Address' },
                { label: 'District', name: 'district', type: 'text', placeholder: 'Enter District' },
                { label: 'State', name: 'state', type: 'text', placeholder: 'Enter State' },
              ].map(({ label, name, type, placeholder }) => (
                <div key={name} className="flex flex-col w-full max-w-xs">
                  <label className="mb-1 self-start">{label} <span className="text-white">*</span></label>
                  <input type={type} name={name} onChange={onValueChange} placeholder={placeholder} required className={inputClass} />
                </div>
              ))}
              {/* Gender */}
              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-1 self-start">Gender <span className="text-white">*</span></label>
                <select name="gender" onChange={onValueChange} required className={selectClass}>
                  <option disabled value="">--Select Gender--</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              {/* Profile Picture */}
              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-1 self-start">Profile Picture <span className="text-white">*</span></label>
                <input type="file" name="image" onChange={fileData} required className={inputClass} />
              </div>
            </div>
          </div>

          {/* Education & Joining */}
          <div className="bg-gradient-to-r from-blue-950 to-blue-900 text-white w-full max-w-6xl rounded-xl shadow-2xl p-6 space-y-6 mt-8">
            <h3 className="text-2xl sm:text-3xl text-center mb-2">Education Qualification &amp; Joining</h3>
            <hr className="bg-white mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
              {[
                { label: 'Education Qualification', name: 'qualification', type: 'text', placeholder: 'Enter Qualification' },
                { label: 'Specialization', name: 'specialization', type: 'text', placeholder: 'Enter Specialization' },
              ].map(({ label, name, type, placeholder }) => (
                <div key={name} className="flex flex-col w-full max-w-xs">
                  <label className="mb-1 text-white">{label} <span className="text-white">*</span></label>
                  <input type={type} name={name} onChange={onValueChange} placeholder={placeholder} required className={inputClass} />
                </div>
              ))}

              {/* Department */}
              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-1 self-start">Department <span className="text-white">*</span></label>
                <select name="department" onChange={onValueChange} required className={selectClass}>
                  <option disabled value="">--Select Department--</option>
                  <option value="BCA">BCA</option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="MCA">MCA</option>
                  <option value="M.Tech">M.Tech</option>
                </select>
              </div>

              {/* Designation */}
              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-1 self-start">Designation <span className="text-white">*</span></label>
                <select name="designation" onChange={onValueChange} required className={selectClass}>
                  <option disabled value="">--Select Designation--</option>
                  <option value="Professor">Professor</option>
                  <option value="Assistant Professor">Assistant Professor</option>
                  <option value="Lecturer">Lecturer</option>
                  <option value="Senior Lecturer">Senior Lecturer</option>
                  <option value="Visiting Faculty">Visiting Faculty</option>
                  <option value="HoD">HoD</option>
                  <option value="Lab Instructor">Lab Instructor</option>
                  <option value="Industry Expert">Industry Expert</option>
                </select>
              </div>

              {[
                { label: 'Username', name: 'username', type: 'text', placeholder: 'Enter Username' },
                { label: 'Password', name: 'password', type: 'password', placeholder: 'Enter Password' },
                { label: 'Experience (Years)', name: 'experience', type: 'number', placeholder: 'Enter Experience' },
                { label: 'Publications', name: 'publication', type: 'text', placeholder: 'Enter Publications' },
                { label: 'Date of Joining', name: 'doj', type: 'date', placeholder: '' },
              ].map(({ label, name, type, placeholder }) => (
                <div key={name} className="flex flex-col w-full max-w-xs">
                  <label className="mb-1 text-white">{label} <span className="text-white">*</span></label>
                  <input type={type} name={name} onChange={onValueChange} placeholder={placeholder} required className={inputClass} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-start my-6">
            <button type="submit" onClick={submitData} className="ml-3 bg-transparent text-green-600 font-medium px-6 py-2 rounded-md hover:scale-105 transition-all hover:bg-green-600 hover:text-white outline outline-2 outline-green-500">Submit</button>
            <button type="reset" className="mx-3 bg-transparent text-red-600 font-medium px-6 py-2 rounded-md hover:scale-105 transition-all hover:bg-red-600 hover:text-white outline outline-2 outline-red-500">Reset</button>
          </div>
        </form>
      </section>
    </div>
  );
}
