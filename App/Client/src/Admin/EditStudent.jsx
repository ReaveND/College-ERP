import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getStudents, updateStudent } from '../Service/api';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name:'',
    fname:'',
    mname:'',
    mobile:'',
    email:'',
    dob:'',
    gender:'',
    address:'',
    district:'',
    state:'',
    course:'',
    image:'',
    file:null,
    SCName:'',
    marks:'',
    yop:'',
    HSCName:'',
    HSmarks:'',
    HSyop:'',
  });

  useEffect(() => {
    getStudents().then(res => {
      const student = res.data.find(s => s._id === id);
      if (student) {
        setFormData({
          ...student,
          dob: student.dob ? dayjs(student.dob).format('YYYY-MM-DD') : '',
          file: null
        });
      } else {
        toast.error('Student not found');
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

    Object.entries(formData).forEach(([key, value]) => {
      if (key !== 'file') payload.append(key, value);
    });

    if (formData.file) {
      payload.append('image', formData.file);
    }

    try {
      const res = await updateStudent(id, payload);
      toast.success(`Updated ${res.data.name} successfully`);
      navigate('/Admin/StudentTable');
    } catch {
      toast.error('Update failed');
    }
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
      <InputField label="Marks" name="marks" value={formData.marks} onChange={handleChange} type="number" />
      <InputField label="Year of Passing" name="yop" value={formData.yop} onChange={handleChange} type="number" />
      <InputField label="Higher Secondary School" name="HSCName" value={formData.HSCName} onChange={handleChange} />
      <InputField label="Higher Secondary Marks" name="HSmarks" value={formData.HSmarks} onChange={handleChange} type="number" />
      <InputField label="HS Year of Passing" name="HSyop" value={formData.HSyop} onChange={handleChange} type="number" />

      {/* Current Image Preview */}
      {formData.image && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Current Profile Image</label>
          <img
            src={`http://localhost:8000/Uploads/${formData.image}`}
            alt="Student"
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
        Update Student
      </button>
    </form>
  );
};

// Reusable input field
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

export default EditStudent;