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

// API call for Admin Login
export const logAdmin = async (credentials) => {
  try {
    return await axios.post(`${URL}/admin/login`, credentials, {
      timeout: 2000,
    });
  } catch (error) {
    console.log("Error while logging in Admin!", error);
    throw error; // Optional: rethrow to handle in component
  }
};

// API call for Student Login
export const logStudent = async (credentials) => {
  try {
    return await axios.post(`${URL}/student/login`, credentials, {
      timeout: 2000,
    });
  } catch (error) {
    console.log("Error while logging in Student!", error);
    throw error; // Optional: rethrow to handle in component
  }
};

// API call for Faculty Login
export const logFaculty = async (credentials) => {
  try {
    return await axios.post(`${URL}/faculty/login`, credentials, {
      timeout: 2000,
    });
  } catch (error) {
    console.log("Error while logging in Faculty!", error);
    throw error; // Optional: rethrow to handle in component
  }
};

// API call to Update Admin
export const updateAdmin = async (id, data) => {
  try {
    return await axios.put(`${URL}/admin/update/${id}`, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
      timeout: 2000
    });
  } catch (error) {
    console.log("Error while updating Admin data!", error);
  }
};

// API call to Delete Admin
export const deleteAdmin = async (id) => {
  try {
    return await axios.delete(`${URL}/admin/delete/${id}`);
  } catch (error) {
    console.log("Error while deleting admin!", error);
  }
};

// API call to Update Student
export const updateStudent = async (id, data) => {
  try {
    return await axios.put(`${URL}/student/update/${id}`, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
      timeout: 2000
    });
  } catch (error) {
    console.log("Error while updating student!", error);
  }
};

// API call to Delete Student
export const deleteStudent = async (id) => {
  try {
    return await axios.delete(`${URL}/student/delete/${id}`);
  } catch (error) {
    console.log("Error while deleting student!", error);
  }
};

// API call to Update Faculty
export const updateFaculty = async (id, data) => {
  try {
    return await axios.put(`${URL}/faculty/update/${id}`, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
      timeout: 2000
    });
  } catch (error) {
    console.log("Error while updating faculty!", error);
  }
};

// API call to Delete Faculty
export const deleteFaculty = async (id) => {
  try {
    return await axios.delete(`${URL}/faculty/delete/${id}`);
  } catch (error) {
    console.log("Error while deleting faculty!", error);
  }
};
