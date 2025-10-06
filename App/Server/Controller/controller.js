const Student = require('../Model/student-model.js');
const Faculty = require('../Model/faculty-model.js');
const Admin = require('../Model/admin-model.js');

const getAdmin = async (req, res) => {
    try {
        const admins = await Admin.find({});
        res.status(200).json(admins);
    } catch (error) {
        console.log("Error while getting Admin data!", error);
    }
}

const getStudent = async (req,res) => {
    try {
        const students = await Student.find({});
        res.status(200).json(students);
    } catch (error) {
        console.log("Error while getting Student data!", error);
    }
}

const getFaculty = async (req,res) => {
    try {
        const faculty = await Faculty.find({});
        res.status(200).json(faculty);
    } catch (error) {
        console.log("Error while getting Faculty data!", error);
    }
}

module.exports = { getAdmin, getStudent, getFaculty };