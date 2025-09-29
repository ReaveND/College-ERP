import axios from 'axios';
const URL = 'http://localhost:8000';

// API call to add Student
export const addStudent = async(data) => {
    try {
        return await axios.post(`${URL}/add`, data, {
      timeout: 2000, // ⏱️ 5-second timeout
    });
    } catch (error) {
        console.log("Error while calling addStudent API!", error);
    }
}

// API call to get all Students
export const getStudents = async() => {
    try {
       return axios.get(`${URL}/all`);
    } catch (error) {
        console.log("Error while getting Data!!", error);
    }
}