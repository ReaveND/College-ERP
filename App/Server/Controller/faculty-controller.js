const Faculty = require('../Model/faculty-model.js');

const getFaculty = async (req,res) => {
    try {
        const faculty = await Faculty.find({});
        res.status(200).json(faculty);
    } catch (error) {
        console.log("Error while getting Faculty data!", error);
    }
}

module.exports = { getFaculty };