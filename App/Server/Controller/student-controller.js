const Student = require('../Model/student-model.js');
const jwt = require('jsonwebtoken');

const getStudent = async (req,res) => {
    try {
        const students = await Student.find({});
        res.status(200).json(students);
    } catch (error) {
        console.log("Error while getting Student data!", error);
    }
}

const loginStudent = async (req, res) => {
  const { email, mobile } = req.body;

  //Validate required fields
  if (!email || !mobile) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    //Find student by email
    const student = await Student.findOne({ email });

    //If no student found, return clean error
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    //If password mismatch, return clean error
    if (String(student.mobile) !== String(mobile)) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    //Generate JWT token
    const token = jwt.sign(
      { id: student._id, role: 'student' },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      name: student.name
    });

  } catch (err) {
    console.error('Login error:', err); //Log actual error
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getStudent, loginStudent };