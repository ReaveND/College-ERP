const express = require('express');
const Faculty = require('../Model/faculty-model.js');
const multer = require('multer');
const { getFaculty } = require('../Controller/faculty-controller.js');

const router = express.Router();

//Configuring multer for file uploads

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'Uploads');
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
});

const upload = multer({storage: storage});

// Creating new Faculty

router.post('/add', upload.single('image'), async(req, res) =>{
    try {
        const files = req.file;
        const faculty = await new Faculty({
            name: req.body.name,
            mobile: req.body.mobile,
            email: req.body.email,
            dob: req.body.dob,
            gender: req.body.gender,
            address: req.body.address,
            district: req.body.district,
            state: req.body.state,
            image: files.filename,
            qualification: req.body.qualification,
            specialization: req.body.specialization,
            department: req.body.department,
            designation: req.body.designation,
            username: req.body.username,
            password: req.body.password,
            experience: req.body.experience,
            publication: req.body.publication,
            doj: req.body.doj,
        })
        await faculty.save();
        res.status(201).json("Faculty Member Added Successfully!");
    } catch (error) {
        console.log("Error while adding Faculty Member!", error);
    }
});

// Getting Faculty data

router.get('/all', getFaculty);

module.exports = router;