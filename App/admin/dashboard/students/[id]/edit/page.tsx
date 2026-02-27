'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { getStudents, updateStudent } from '@/lib/adminApi';
import dayjs from 'dayjs';

const InputField = ({ label, name, value, onChange, type = 'text' }: {
  label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; type?: string;
}) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input type={type} name={name} value={value} onChange={onChange}
      className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
  </div>
);

export default function EditStudentPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '', fname: '', mname: '', mobile: '', email: '',
    dob: '', gender: '', address: '', district: '', state: '',
    course: '', image: '', file: null as File | null,
    SCName: '', marks: '', yop: '',
    HSCName: '', HSmarks: '', HSyop: '',
  });

  useEffect(() => {
    getStudents().then(res => {
      const s = res.data.find((x: any) => x._id === id);
      if (s) {
        setFormData({ ...s, dob: s.dob ? dayjs(s.dob).format('YYYY-MM-DD') : '', file: null });
      } else {
        toast.error('Student not found');
      }
    });
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, file: e.target.files?.[0] ?? null });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== 'file' && value !== null) payload.append(key, value as string);
    });
    if (formData.file) payload.append('image', formData.file);

    try {
      const res = await updateStudent(id!, payload);
      toast.success(`Updated ${res.data.name} successfully`);
      router.push('/admin/dashboard/students');
    } catch { toast.error('Update failed'); }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-4xl mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Edit Student</h2>
      <InputField label="Name" name="name" value={formData.name} onChange={handleChange} />
      <InputField label="Father's Name" name="fname" value={formData.fname} onChange={handleChange} />
      <InputField label="Mother's Name" name="mname" value={formData.mname} onChange={handleChange} />
      <InputField label="Mobile" name="mobile" value={formData.mobile} onChange={handleChange} type="tel" />
      <InputField label="Email" name="email" value={formData.email} onChange={handleChange} type="email" />
      <InputField label="Date of Birth" name="dob" value={formData.dob} onChange={handleChange} type="date" />
      <InputField label="Gender" name="gender" value={formData.gender} onChange={handleChange} />
      <InputField label="Address" name="address" value={formData.address} onChange={handleChange} />
      <InputField label="District" name="district" value={formData.district} onChange={handleChange} />
      <InputField label="State" name="state" value={formData.state} onChange={handleChange} />
      <InputField label="Course" name="course" value={formData.course} onChange={handleChange} />
      <InputField label="School Name" name="SCName" value={formData.SCName} onChange={handleChange} />
      <InputField label="Madhyamik Marks (%)" name="marks" value={formData.marks} onChange={handleChange} type="number" />
      <InputField label="Year of Passing" name="yop" value={formData.yop} onChange={handleChange} type="number" />
      <InputField label="H.S. School Name" name="HSCName" value={formData.HSCName} onChange={handleChange} />
      <InputField label="H.S. Marks (%)" name="HSmarks" value={formData.HSmarks} onChange={handleChange} type="number" />
      <InputField label="H.S. Year of Passing" name="HSyop" value={formData.HSyop} onChange={handleChange} type="number" />

      {formData.image && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Current Profile Image</label>
          <img src={`/Uploads/${formData.image}`} alt="Student" className="w-20 h-20 rounded-full object-cover mt-2 border" />
        </div>
      )}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Upload New Image</label>
        <input type="file" accept="image/*" onChange={handleFileChange} className="mt-1 block w-[235px] border bg-yellow-600" />
        <p className="text-xs text-gray-500 mt-1">Leave blank to keep existing image</p>
      </div>
      {formData.file && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">New Image Preview</label>
          <img src={URL.createObjectURL(formData.file)} alt="Preview" className="w-20 h-20 rounded-full object-cover mt-2 border" />
        </div>
      )}

      <button type="submit" className="mt-6 w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Update Student</button>
    </form>
  );
}
