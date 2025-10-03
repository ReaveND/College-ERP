const Student = require('../Model/student-model.js');
const Faculty = require('../Model/faculty-model.js');

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
        const students = await Faculty.find({});
        res.status(200).json(students);
    } catch (error) {
        console.log("Error while getting Student data!", error);
    }
}

module.exports = { getStudent, getFaculty };