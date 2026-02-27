import axios from 'axios';

const BASE = '/api';

// ── Admin ──────────────────────────────────────────
export const getAdminMe = () => axios.get(`${BASE}/admin/me`);

export const getAdmins = () => axios.get(`${BASE}/admin`);

export const addAdmin = (data: FormData) =>
  axios.post(`${BASE}/admin`, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

export const updateAdmin = (id: string, data: FormData) =>
  axios.put(`${BASE}/admin/${id}`, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

export const deleteAdmin = (id: string) =>
  axios.delete(`${BASE}/admin/${id}`);

// ── Student ───────────────────────────────────────
export const getStudents = () => axios.get(`${BASE}/student`);

export const addStudent = (data: FormData) =>
  axios.post(`${BASE}/student`, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

export const updateStudent = (id: string, data: FormData) =>
  axios.put(`${BASE}/student/${id}`, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

export const deleteStudent = (id: string) =>
  axios.delete(`${BASE}/student/${id}`);

// ── Faculty ───────────────────────────────────────
export const getFacultys = () => axios.get(`${BASE}/faculty`);

export const addFaculty = (data: FormData) =>
  axios.post(`${BASE}/faculty`, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

export const updateFaculty = (id: string, data: FormData) =>
  axios.put(`${BASE}/faculty/${id}`, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

export const deleteFaculty = (id: string) =>
  axios.delete(`${BASE}/faculty/${id}`);
