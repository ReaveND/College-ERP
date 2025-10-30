import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAdmins, updateAdmin } from '../Service/api';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';

const EditAdmin = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    dob: '',
    address: '',
    district: '',
    state: '',
    image: '',     // existing image filename
    file: null,    // new image file
    username: '',
    password: ''
  });

  useEffect(() => {
    getAdmins().then(res => {
      const admin = res.data.find(a => a._id === id);
      if (admin) {
        setFormData({
          ...admin,
          dob: admin.dob ? dayjs(admin.dob).format('YYYY-MM-DD') : '',
          file: null
        });
      } else {
        toast.error('Admin not found');
      }
    });
  }, [id]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = e => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const payload = new FormData();

    // Append all fields except file
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== 'file') payload.append(key, value);
    });

    // Append file if selected
    if (formData.file) {
      payload.append('image', formData.file);
    }

    try {
      const res = await updateAdmin(id, payload);
      toast.success(`Updated ${res.data.name} successfully`);
      navigate('/Admin/AdminTable');
    } catch {
      toast.error('Update failed');
    }
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

      {/* Current Image Preview */}
      {formData.image && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Current Profile Image</label>
          <img
            src={`http://localhost:8000/Uploads/${formData.image}`}
            alt="Admin"
            className="w-20 h-20 rounded-full object-cover mt-2 border"
          />
        </div>
      )}

      {/* Upload New Image */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Upload New Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mt-1 block w-[235px] border-1 bg-yellow-600"
        />
        <p className="text-xs text-gray-500 mt-1">Leave blank to keep existing image</p>
      </div>

      {/* New Image Preview */}
      {formData.file && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">New Image Preview</label>
          <img
            src={URL.createObjectURL(formData.file)}
            alt="Preview"
            className="w-20 h-20 rounded-full object-cover mt-2 border"
          />
        </div>
      )}

      <button type="submit" className="mt-6 w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Update Admin
      </button>
    </form>
  );
};

// Reusable input field component
const InputField = ({ label, name, value, onChange, type = 'text' }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
);

export default EditAdmin;