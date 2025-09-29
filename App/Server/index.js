const express = require('express');
const app = express();
const Connection = require('./Database/db.js');
const Routes = require('./Routes/route.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
app.use(cors());

Connection();

// const Student = require('./Model/student-model.js'); // Forced Index Creation
// const mongoose = require('mongoose');
// mongoose.connection.once('open', async () => {
//   try {
//     await Student.init(); // 🔧 Ensures indexes like unique email are built
//     console.log("Student indexes ensured.");
//   } catch (err) {
//     console.error("Failed to build indexes:", err);
//   }
// });

app.use(bodyParser.json({ extended : true }));
app.use(bodyParser.urlencoded({ extended : true }));
app.use('/', Routes);
app.use('/Uploads', express.static('Uploads'));
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));