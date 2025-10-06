import axios from 'axios';
const URL = 'http://localhost:8000';

// API call to add Admin
export const addAdmin = async(data) => {
    try {
        return await axios.post(`${URL}/admin/add`, data, {
      timeout: 2000, // ⏱️ 5-second timeout
    });
    } catch (error) {
        console.log("Error while calling addAdmin API!", error);
    }
}

// API call to get all Admins
export const getAdmins = async() => {
    try {
       return axios.get(`${URL}/admin/all`);
    } catch (error) {
        console.log("Error while getting Data!!", error);
    }
}

// API call to add Student
export const addStudent = async(data) => {
    try {
        return await axios.post(`${URL}/student/add`, data, {
      timeout: 2000, // ⏱️ 5-second timeout
    });
    } catch (error) {
        console.log("Error while calling addStudent API!", error);
    }
}

// API call to get all Students
export const getStudents = async() => {
    try {
       return axios.get(`${URL}/student/all`);
    } catch (error) {
        console.log("Error while getting Data!!", error);
    }
}

// API call to add Faculty

export const addFaculty = async(data) => {
    try {
        return await axios.post(`${URL}/faculty/add`, data, {
      timeout: 2000, // ⏱️ 5-second timeout
    });
    } catch (error) {
        console.log("Error while calling addFaculty API!", error);
    }
}

// API call to get all Faculty
export const getFacultys = async() => {
    try {
       return axios.get(`${URL}/faculty/all`);
    } catch (error) {
        console.log("Error while getting Data!!", error);
    }
}