'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { getFacultys, updateFaculty } from '@/lib/adminApi';
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

export default function EditFacultyPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '', mobile: '', email: '', dob: '', gender: '',
    address: '', district: '', state: '', image: '',
    qualification: '', specialization: '', department: '',
    designation: '', username: '', password: '',
    experience: '', publication: '', doj: '', file: null as File | null,
  });

  useEffect(() => {
    getFacultys().then(res => {
      const f = res.data.find((x: any) => x._id === id);
      if (f) {
        setFormData({
          ...f,
          dob: f.dob ? dayjs(f.dob).format('YYYY-MM-DD') : '',
          doj: f.doj ? dayjs(f.doj).format('YYYY-MM-DD') : '',
          file: null,
        });
      } else {
        toast.error('Faculty not found');
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
      const res = await updateFaculty(id!, payload);
      toast.success(`Updated ${res.data.name} successfully`);
      router.push('/admin/dashboard/faculty');
    } catch { toast.error('Update failed'); }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-4xl mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Edit Faculty</h2>
      <InputField label="Name" name="name" value={formData.name} onChange={handleChange} />
      <InputField label="Mobile" name="mobile" value={formData.mobile} onChange={handleChange} type="tel" />
      <InputField label="Email" name="email" value={formData.email} onChange={handleChange} type="email" />
      <InputField label="Date of Birth" name="dob" value={formData.dob} onChange={handleChange} type="date" />
      <InputField label="Gender" name="gender" value={formData.gender} onChange={handleChange} />
      <InputField label="Address" name="address" value={formData.address} onChange={handleChange} />
      <InputField label="District" name="district" value={formData.district} onChange={handleChange} />
      <InputField label="State" name="state" value={formData.state} onChange={handleChange} />
      <InputField label="Qualification" name="qualification" value={formData.qualification} onChange={handleChange} />
      <InputField label="Specialization" name="specialization" value={formData.specialization} onChange={handleChange} />
      <InputField label="Department" name="department" value={formData.department} onChange={handleChange} />
      <InputField label="Designation" name="designation" value={formData.designation} onChange={handleChange} />
      <InputField label="Username" name="username" value={formData.username} onChange={handleChange} />
      <InputField label="Password" name="password" value={formData.password} onChange={handleChange} type="password" />
      <InputField label="Experience (Years)" name="experience" value={formData.experience} onChange={handleChange} type="number" />
      <InputField label="Publications" name="publication" value={formData.publication} onChange={handleChange} />
      <InputField label="Date of Joining" name="doj" value={formData.doj} onChange={handleChange} type="date" />

      {formData.image && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Current Profile Image</label>
          <img src={`/Uploads/${formData.image}`} alt="Faculty" className="w-20 h-20 rounded-full object-cover mt-2 border" />
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

      <button type="submit" className="mt-6 w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Update Faculty</button>
    </form>
  );
}
