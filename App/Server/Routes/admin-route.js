const express = require('express');
const Admin = require('../Model/admin-model.js');
const multer = require('multer');
const { getAdmin } = require('../Controller/controller.js');



const router = express.Router();

// Configuring multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// Creating new Admin
router.post('/add', upload.single('image'), async (req, res) => {
    try {
        const file = req.file;
        const admin = new Admin({
            name: req.body.name,
            mobile: req.body.mobile,
            email: req.body.email,
            dob: req.body.dob,
            address: req.body.address,
            district: req.body.district,
            state: req.body.state,
            image: file.filename,
            username: req.body.username,
            password: req.body.password,
        });

        await admin.save();
        res.status(201).json("Admin Added Successfully!");
    } catch (error) {
        console.log("Error while adding Admin!", error);
        res.status(500).json({ message: "Error while adding Admin!", error: error.message });
    }
});

// Getting all Admin data
router.get('/all', getAdmin);

module.exports = router;
