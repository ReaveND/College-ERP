'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { getAdmins, updateAdmin } from '@/lib/adminApi';
import dayjs from 'dayjs';
import { resolveImageUrl } from '@/lib/imageUrl';

const InputField = ({ label, name, value, onChange, type = 'text' }: {
  label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; type?: string;
}) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input type={type} name={name} value={value} onChange={onChange}
      className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
  </div>
);

export default function EditAdminPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '', mobile: '', email: '', dob: '',
    address: '', district: '', state: '',
    username: '', password: '', image: '', file: null as File | null,
  });

  useEffect(() => {
    getAdmins().then(res => {
      const admin = res.data.find((a: any) => a._id === id);
      if (admin) {
        setFormData({
          name: admin.name ?? '',
          mobile: String(admin.mobile ?? ''),
          email: admin.email ?? '',
          dob: admin.dob ? dayjs(admin.dob).format('YYYY-MM-DD') : '',
          address: admin.address ?? '',
          district: admin.district ?? '',
          state: admin.state ?? '',
          username: admin.username ?? '',
          password: admin.password ?? '',
          image: admin.image ?? '',
          file: null,
        });
      } else {
        toast.error('Admin not found');
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
      // Skip 'file' (handled below) and 'image' (only send if a new file was chosen)
      if (key !== 'file' && key !== 'image' && value !== null) payload.append(key, value as string);
    });
    if (formData.file) payload.append('image', formData.file);

    try {
      const res = await updateAdmin(id!, payload);
      // If editing own profile, keep localStorage in sync so sidebar reflects changes
      if (id === localStorage.getItem('adminId')) {
        localStorage.setItem('adminName', res.data.name ?? '');
        localStorage.setItem('adminEmail', res.data.email ?? '');
        localStorage.setItem('adminImage', res.data.image ?? '');
      }
      toast.success(`Updated ${res.data.name} successfully`);
      router.push('/admin/dashboard/admins');
    } catch { toast.error('Update failed'); }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-3xl mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Edit Admin</h2>
      <InputField label="Name" name="name" value={formData.name} onChange={handleChange} />
      <InputField label="Mobile" name="mobile" value={formData.mobile} onChange={handleChange} type="tel" />
      <InputField label="Email" name="email" value={formData.email} onChange={handleChange} type="email" />
      <InputField label="Date of Birth" name="dob" value={formData.dob} onChange={handleChange} type="date" />
      <InputField label="Address" name="address" value={formData.address} onChange={handleChange} />
      <InputField label="District" name="district" value={formData.district} onChange={handleChange} />
      <InputField label="State" name="state" value={formData.state} onChange={handleChange} />
      <InputField label="Username" name="username" value={formData.username} onChange={handleChange} />
      <InputField label="Password" name="password" value={formData.password} onChange={handleChange} type="password" />

      {formData.image && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Current Profile Image</label>
          <img src={resolveImageUrl(formData.image)} alt="Admin" className="w-20 h-20 rounded-full object-cover mt-2 border" />
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

      <button type="submit" className="mt-6 w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Update Admin</button>
    </form>
  );
}
