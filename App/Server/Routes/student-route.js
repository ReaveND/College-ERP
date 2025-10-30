const express = require('express');
const Student = require('../Model/student-model.js');
const multer = require('multer');
const { getStudent, loginStudent } = require('../Controller/student-controller.js');

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

// Creating new Student

router.post('/add', upload.single('image'), async(req, res) =>{
    try {
        const files = req.file;
        const student = await new Student({
            name: req.body.name,
            fname: req.body.fname,
            mname: req.body.mname,
            mobile: req.body.mobile,
            email: req.body.email,
            dob: req.body.dob,
            gender: req.body.gender,
            address: req.body.address,
            district: req.body.district,
            state: req.body.state,
            course: req.body.course,
            image: files.filename,
            SCName: req.body.SCName,
            marks: req.body.marks,
            yop: req.body.yop,
            HSCName: req.body.HSCName,
            HSmarks: req.body.HSmarks,
            HSyop: req.body.HSyop,
        })
        await student.save();
        res.status(201).json("Student Added Successfully!");
    } catch (error) {
        console.log("Error while adding Student!", error);
    }
});

// Getting Student data
router.get('/all', getStudent);

// Student Login
router.post('/login', loginStudent);

// Student Update
router.put('/update/:id', upload.single('image'), async (req, res) => {
  try {
    const updateData = { ...req.body };
    if (req.file) updateData.image = req.file.filename;

    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true
    });

    if (!updatedStudent) return res.status(404).json({ message: 'Student not found' });
    res.json(updatedStudent);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete Student
router.delete('/delete/:id', async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) return res.status(404).json({ message: 'Student not found' });
    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;