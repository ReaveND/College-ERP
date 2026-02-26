import axios from 'axios';

const API_URL = 'https://college-erp-5cd2.onrender.com';

// ── Admin ──────────────────────────────────────────
export const addAdmin = (data: FormData) =>
  axios.post(`${API_URL}/admin/add`, data);

export const getAdmins = () => axios.get(`${API_URL}/admin/all`);

export const updateAdmin = (id: string, data: FormData) =>
  axios.put(`${API_URL}/admin/update/${id}`, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

export const deleteAdmin = (id: string) =>
  axios.delete(`${API_URL}/admin/delete/${id}`);

// ── Student ───────────────────────────────────────
export const addStudent = (data: FormData) =>
  axios.post(`${API_URL}/student/add`, data);

export const getStudents = () => axios.get(`${API_URL}/student/all`);

export const updateStudent = (id: string, data: FormData) =>
  axios.put(`${API_URL}/student/update/${id}`, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

export const deleteStudent = (id: string) =>
  axios.delete(`${API_URL}/student/delete/${id}`);

// ── Faculty ───────────────────────────────────────
export const addFaculty = (data: FormData) =>
  axios.post(`${API_URL}/faculty/add`, data);

export const getFacultys = () => axios.get(`${API_URL}/faculty/all`);

export const updateFaculty = (id: string, data: FormData) =>
  axios.put(`${API_URL}/faculty/update/${id}`, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

export const deleteFaculty = (id: string) =>
  axios.delete(`${API_URL}/faculty/delete/${id}`);
