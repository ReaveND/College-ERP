const express = require('express');
const Admin = require('../Model/admin-model.js');
const multer = require('multer');
const { getAdmin, loginAdmin } = require('../Controller/admin-controller.js');

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

// Admin Login
router.post('/login', loginAdmin);

// Admin Update
// router.put('/update/:id', updateAdmin);

router.put('/update/:id', upload.single('image'), async (req, res) => {
  const updateData = { ...req.body };
  if (req.file) updateData.image = req.file.filename;

  const updatedAdmin = await Admin.findByIdAndUpdate(req.params.id, updateData, {
    new: true,
    runValidators: true
  });

  if (!updatedAdmin) return res.status(404).json({ message: 'Admin not found' });
  res.json(updatedAdmin);
});

// Admin Delete

router.delete('/delete/:id', async (req, res) => {
  try {
    const deletedAdmin = await Admin.findByIdAndDelete(req.params.id);
    if (!deletedAdmin) return res.status(404).json({ message: 'Admin not found' });
    res.json({ message: 'Admin deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
