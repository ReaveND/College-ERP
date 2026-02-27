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

// ── Course ─────────────────────────────────────────
export const getCourses = () => axios.get(`${BASE}/course`);

export const addCourse = (data: FormData) =>
  axios.post(`${BASE}/course`, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

export const updateCourse = (id: string, data: FormData) =>
  axios.put(`${BASE}/course/${id}`, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

export const deleteCourse = (id: string) =>
  axios.delete(`${BASE}/course/${id}`);

// ── Department ─────────────────────────────────────
export const getDepartments = () => axios.get(`${BASE}/department`);

export const addDepartment = (data: any) =>
  axios.post(`${BASE}/department`, data);

export const updateDepartment = (id: string, data: any) =>
  axios.put(`${BASE}/department/${id}`, data);

export const getDepartmentById = (id: string) =>
  axios.get(`${BASE}/department/${id}`);

export const deleteDepartment = (id: string) =>
  axios.delete(`${BASE}/department/${id}`);

// ── Program ────────────────────────────────────────
export const getPrograms = () => axios.get(`${BASE}/program`);

export const addProgram = (data: any) =>
  axios.post(`${BASE}/program`, data);

export const getProgramById = (id: string) =>
  axios.get(`${BASE}/program/${id}`);

export const updateProgram = (id: string, data: any) =>
  axios.put(`${BASE}/program/${id}`, data);

export const deleteProgram = (id: string) =>
  axios.delete(`${BASE}/program/${id}`);
