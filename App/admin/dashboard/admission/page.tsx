'use client';

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { addStudent } from '@/lib/adminApi';

const inputClass =
  'bg-white text-black border border-gray-300 rounded-md px-3 py-2 w-full placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 file:border-0 file:bg-blue-950 file:text-white file:text-sm file:font-medium file:px-3 file:py-2 file:-my-2 file:-ml-3 file:mr-3 file:rounded-l-md file:cursor-pointer';
const selectClass = 'bg-white text-black border border-gray-300 rounded-md px-3 py-2 w-full placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500';

export default function AdmissionPage() {
  const [student, setStudent] = useState({
    name: '', fname: '', mname: '', mobile: '', email: '',
    dob: '', gender: '', address: '', district: '', state: '',
    course: '', image: null as File | null,
    SCName: '', marks: '', yop: '',
    HSCName: '', HSmarks: '', HSyop: '',
  });

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const fileData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudent({ ...student, image: e.target.files?.[0] ?? null });
  };

  const submitData = async (e: React.MouseEvent) => {
    e.preventDefault();
    const currentYear = new Date().getFullYear();
    const yop = parseInt(student.yop, 10);

    if (!student.name) { alert('Please enter Name!'); return; }
    if (!student.fname) { alert("Please enter Father's Name!"); return; }
    if (!student.mname) { alert("Please enter Mother's Name!"); return; }
    if (!student.mobile) { alert('Please enter Mobile Number!'); return; }
    if (student.mobile.length !== 10) { alert('Enter a valid 10-digit Mobile Number!'); return; }
    if (!student.email) { alert('Please enter Email ID!'); return; }
    if (!student.dob) { alert('Please enter Date of Birth!'); return; }
    if (!student.gender) { alert('Please select Gender!'); return; }
    if (!student.address) { alert('Please enter Address!'); return; }
    if (!student.district) { alert('Please enter District!'); return; }
    if (!student.state) { alert('Please enter State!'); return; }
    if (!student.course) { alert('Please select Course!'); return; }
    if (!student.image) { alert('Please upload Profile Picture!'); return; }
    if (!student.SCName) { alert('Please enter School Name!'); return; }
    if (!student.marks) { alert('Please enter Madhyamik Marks!'); return; }
    if (Number(student.marks) < 0 || Number(student.marks) > 100) { alert('Marks must be 0-100!'); return; }
    if (!student.yop) { alert('Please enter Year of Passing!'); return; }
    if (student.yop.length !== 4 || yop < 1995 || yop > currentYear - 2) { alert('Enter a valid Year!'); return; }
    if (!student.HSCName) { alert('Please enter H.S. School Name!'); return; }
    if (!student.HSmarks) { alert('Please enter H.S. Marks!'); return; }
    if (Number(student.HSmarks) < 0 || Number(student.HSmarks) > 100) { alert('H.S. Marks must be 0-100!'); return; }
    if (!student.HSyop) { alert('Please enter H.S. Year of Passing!'); return; }
    if (student.HSyop.length !== 4 || Number(student.HSyop) < 1995 || Number(student.HSyop) > currentYear) { alert('Enter a valid Year!'); return; }

    const formData = new FormData();
    formData.append('image', student.image!, student.image!.name);
    (['name','fname','mname','mobile','email','dob','gender','address','district','state','course','SCName','marks','yop','HSCName','HSmarks','HSyop'] as const)
      .forEach(k => formData.append(k, student[k] as string));

    try {
      const res = await addStudent(formData);
      if (res.status === 201) {
        toast.success('Student added successfully!');
      } else {
        toast.error('Something went wrong. Please try again!');
      }
    } catch (error: any) {
      if (error?.code === 11000 && error?.keyPattern?.email) {
        toast.error('Email already exists. Please use a different one.');
      } else {
        toast.error('Something went wrong while adding student!');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 rounded-2xl overflow-hidden">
      {/* Header */}
      <header className="bg-blue-950 flex flex-col sm:flex-row items-center justify-center px-4 py-4 mb-6 gap-4 shadow-md">
        <div className="flex items-center gap-4">
          <img src="/images/logo.png" alt="Logo" className="w-24 h-24 mx-auto object-cover rounded-full border-4 border-white" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center ml-3">
            Vedanta Institute of Technology
          </h2>
        </div>
      </header>

      {/* Title */}
      <section className="px-4 text-center">
        <hr className="bg-black w-[60%] mx-auto" />
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold my-6">Student Admission Form</h1>
        <hr className="bg-black w-[60%] mx-auto" />
      </section>

      {/* Form */}
      <section className="px-4 sm:px-6 lg:px-10 my-6">
        <form className="w-full">
          {/* Personal Details */}
          <div className="bg-gradient-to-r from-blue-950 to-blue-900 text-white w-full rounded-xl shadow-2xl p-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl text-center mb-2">Personal Details</h3>
            <hr className="bg-white mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: "Name", name: "name", type: "text", placeholder: "Enter Your Name" },
                { label: "Father's Name", name: "fname", type: "text", placeholder: "Enter Father's Name" },
                { label: "Mother's Name", name: "mname", type: "text", placeholder: "Enter Mother's Name" },
                { label: "Mobile Number", name: "mobile", type: "text", placeholder: "Enter Mobile Number" },
                { label: "Email ID", name: "email", type: "email", placeholder: "Enter Email ID" },
                { label: "Date of Birth", name: "dob", type: "date", placeholder: "" },
                { label: "Address", name: "address", type: "text", placeholder: "Enter Address" },
                { label: "District", name: "district", type: "text", placeholder: "Enter District" },
                { label: "State", name: "state", type: "text", placeholder: "Enter State" },
              ].map(({ label, name, type, placeholder }) => (
                <div key={name} className="flex flex-col w-full">
                  <label className="mb-1">{label} <span className="text-white">*</span></label>
                  <input type={type} name={name} onChange={onValueChange} placeholder={placeholder} required className={inputClass} />
                </div>
              ))}

              {/* Gender */}
              <div className="flex flex-col w-full">
                <label className="mb-1">Gender <span className="text-white">*</span></label>
                <select name="gender" onChange={onValueChange} required className={selectClass}>
                  <option disabled value="">--Select Gender--</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Course */}
              <div className="flex flex-col w-full">
                <label className="mb-1">Course <span className="text-white">*</span></label>
                <select name="course" onChange={onValueChange} required className={selectClass}>
                  <option disabled value="">--Select Course--</option>
                  <option value="BCA">BCA</option>
                  <option value="BTech">BTech</option>
                  <option value="BBA">BBA</option>
                  <option value="CSBS">CSBS</option>
                </select>
              </div>

              {/* Profile Picture */}
              <div className="flex flex-col w-full">
                <label className="mb-1">Profile Picture <span className="text-white">*</span></label>
                <label className="flex items-center w-full border border-gray-300 rounded-md overflow-hidden cursor-pointer bg-white">
                  <span className="bg-blue-950 text-white text-sm font-medium px-3 py-2 flex-shrink-0 hover:bg-blue-900 transition-colors">
                    Choose file
                  </span>
                  <span className="px-3 text-gray-500 text-sm truncate">
                    {student.image ? student.image.name : 'No file chosen'}
                  </span>
                  <input type="file" name="image" onChange={fileData} required className="sr-only" />
                </label>
              </div>
            </div>
          </div>

          {/* Academic Details */}
          <div className="bg-gradient-to-r from-blue-950 to-blue-900 text-white w-full rounded-xl shadow-2xl p-6 space-y-6 mt-8">
            <h3 className="text-2xl sm:text-3xl text-center mb-2">Academic Details</h3>
            <hr className="bg-white mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: "School Name", name: "SCName", placeholder: "Enter School Name" },
                { label: "Marks in Madhyamik (%)", name: "marks", placeholder: "Enter Madhyamik Marks" },
                { label: "Year of Passing", name: "yop", placeholder: "Enter Passing Year" },
                { label: "H.S. School Name", name: "HSCName", placeholder: "Enter H.S. School Name" },
                { label: "Marks in H.S. (%)", name: "HSmarks", placeholder: "Enter H.S. Marks" },
                { label: "H.S. Year of Passing", name: "HSyop", placeholder: "Enter H.S. Passing Year" },
              ].map(({ label, name, placeholder }) => (
                <div key={name} className="flex flex-col w-full">
                  <label className="mb-1 text-white">{label} <span className="text-white">*</span></label>
                  <input type="text" name={name} onChange={onValueChange} placeholder={placeholder} required className={inputClass} />
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-start my-6">
            <button
              type="submit"
              onClick={submitData}
              className="ml-3 bg-transparent text-green-600 font-medium px-6 py-2 rounded-md hover:scale-105 transition-all hover:bg-green-600 hover:text-white outline outline-2 outline-green-500"
            >
              Submit
            </button>
            <button
              type="reset"
              className="mx-3 bg-transparent text-red-600 font-medium px-6 py-2 rounded-md hover:scale-105 transition-all hover:bg-red-600 hover:text-white outline outline-2 outline-red-500"
            >
              Reset
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
