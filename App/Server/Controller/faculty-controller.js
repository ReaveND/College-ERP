const Faculty = require('../Model/faculty-model.js');
const jwt = require('jsonwebtoken');

// Get all Faculty data
const getFaculty = async (req, res) => {
  try {
    const faculties = await Faculty.find({});
    res.status(200).json(faculties);
  } catch (error) {
    console.log("Error while getting Faculty data!", error);
    res.status(500).json({ error: "Failed to retrieve faculty data" });
  }
};

// Faculty Login Controller
const loginFaculty = async (req, res) => {
  const { username, password } = req.body;

  // Validate required fields
  if (!username || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Find faculty by username
    const faculty = await Faculty.findOne({ username });

    // If no faculty found
    if (!faculty) {
      return res.status(404).json({ error: 'Faculty not found' });
    }

    // If password mismatch
    if (faculty.password !== password) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: faculty._id, role: 'faculty' },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      name: faculty.name
    });

  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getFaculty, loginFaculty };
