'use client';

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { addAdmin } from '@/lib/adminApi';

const inputClass =
  'bg-white text-black border border-gray-300 rounded-md px-3 py-2 w-full placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 file:border-0 file:bg-blue-950 file:text-white file:text-sm file:font-medium file:px-3 file:py-2 file:-my-2 file:-ml-3 file:mr-3 file:rounded-l-md file:cursor-pointer';

export default function AddAdminPage() {
  const [admin, setAdmin] = useState({
    name: '', mobile: '', email: '', dob: '',
    address: '', district: '', state: '',
    username: '', password: '', image: null as File | null,
  });

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const fileData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdmin({ ...admin, image: e.target.files?.[0] ?? null });
  };

  const submitData = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!admin.name) { alert('Please enter Name!'); return; }
    if (!admin.mobile) { alert('Please enter Mobile Number!'); return; }
    if (admin.mobile.length !== 10) { alert('Enter a valid 10-digit Mobile Number!'); return; }
    if (!admin.email) { alert('Please enter Email ID!'); return; }
    if (!admin.username) { alert('Please enter Username!'); return; }
    if (admin.username.length < 5) { alert('Username must be at least 5 characters!'); return; }
    if (!/^[A-Z]/.test(admin.username)) { alert('Username must start with a capital letter!'); return; }
    if (!admin.password) { alert('Please enter Password!'); return; }
    if (admin.password.length < 8) { alert('Password must be at least 8 characters!'); return; }
    if (!admin.dob) { alert('Please enter Date of Birth!'); return; }
    if (!admin.address) { alert('Please enter Address!'); return; }
    if (!admin.district) { alert('Please enter District!'); return; }
    if (!admin.state) { alert('Please enter State!'); return; }
    if (!admin.image) { alert('Please upload Profile Picture!'); return; }

    const formData = new FormData();
    formData.append('image', admin.image!, admin.image!.name);
    (['name','mobile','email','dob','address','district','state','username','password'] as const)
      .forEach(k => formData.append(k, admin[k] as string));

    try {
      const res = await addAdmin(formData);
      if (res.status === 201) {
        toast.success('Admin added successfully!');
      } else {
        toast.error('Something went wrong. Please try again!');
      }
    } catch (error: any) {
      if (error?.code === 11000 && error?.keyPattern?.email) {
        toast.error('Email already exists. Please use a different one.');
      } else {
        toast.error('Something went wrong while adding Admin!');
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

      <section className="px-4 text-center">
        <hr className="bg-black w-[60%] mx-auto" />
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold my-6">Admin Registration</h1>
        <hr className="bg-black w-[60%] mx-auto" />
      </section>

      <section className="px-4 sm:px-6 lg:px-10 my-6">
        <form className="w-full">
          <div className="bg-gradient-to-r from-blue-950 to-blue-900 text-white w-full rounded-xl shadow-2xl p-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl text-center mb-2">Add New Admin</h3>
            <hr className="bg-white mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: 'Name', name: 'name', type: 'text', placeholder: 'Enter Your Name' },
                { label: 'Mobile Number', name: 'mobile', type: 'text', placeholder: 'Enter Mobile Number' },
                { label: 'Email ID', name: 'email', type: 'email', placeholder: 'Enter Email ID' },
                { label: 'Username', name: 'username', type: 'text', placeholder: 'Enter Username' },
                { label: 'Password', name: 'password', type: 'password', placeholder: 'Enter Password' },
                { label: 'Date of Birth', name: 'dob', type: 'date', placeholder: '' },
                { label: 'Address', name: 'address', type: 'text', placeholder: 'Enter Address' },
                { label: 'District', name: 'district', type: 'text', placeholder: 'Enter District' },
                { label: 'State', name: 'state', type: 'text', placeholder: 'Enter State' },
              ].map(({ label, name, type, placeholder }) => (
                <div key={name} className="flex flex-col w-full">
                  <label className="mb-1">{label} <span className="text-white">*</span></label>
                  <input type={type} name={name} onChange={onValueChange} placeholder={placeholder} required className={inputClass} />
                </div>
              ))}
              <div className="flex flex-col w-full">
                <label className="mb-1">Profile Picture <span className="text-white">*</span></label>
                <label className="flex items-center w-full border border-gray-300 rounded-md overflow-hidden cursor-pointer bg-white">
                  <span className="bg-blue-950 text-white text-sm font-medium px-3 py-2 flex-shrink-0 hover:bg-blue-900 transition-colors">
                    Choose file
                  </span>
                  <span className="px-3 text-gray-500 text-sm truncate">
                    {admin.image ? admin.image.name : 'No file chosen'}
                  </span>
                  <input type="file" name="image" onChange={fileData} required className="sr-only" />
                </label>
              </div>
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
