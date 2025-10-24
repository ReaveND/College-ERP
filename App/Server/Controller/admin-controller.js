const Admin = require('../Model/admin-model.js');
const jwt = require('jsonwebtoken');

const getAdmin = async (req, res) => {
    try {
        const admins = await Admin.find({});
        res.status(200).json(admins);
    } catch (error) {
        console.log("Error while getting Admin data!", error);
        res.status(500).json({ error: "Failed to retrieve admin data" });
    }
}

const loginAdmin = async (req, res) => {
  const { username, email, password } = req.body;

  //Validate required fields
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    //Find admin by email
    const admin = await Admin.findOne({ email });

    //If no admin found, return clean error
    if (!admin) {
      return res.status(404).json({ error: 'Admin not found' });
    }

    //If username or password mismatch, return clean error
    if (admin.username !== username || admin.password !== password) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    //Generate JWT token
    const token = jwt.sign(
      { id: admin._id, role: 'admin' },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      name: admin.name
    });

  } catch (err) {
    console.error('Login error:', err); //Log actual error
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getAdmin, loginAdmin };