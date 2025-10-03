const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    name:{ type : String, required : true },
    mobile:{ type : Number, required : true },
    email:{ type : String, required : true, unique : true },
    dob:{ type : Date, required : true },
    gender:{ type : String, required : true },
    address:{ type : String, required : true },
    district:{ type : String, required : true },
    state:{ type : String, required : true },
    image:{ type : String, required : true },
    qualification:{ type : String, required : true },
    specialization:{ type : String, required : true },
    department:{ type : String, required : true },
    designation:{ type : String, required : true },
    username:{ type : String, required : true },
    password:{ type : String, required : true },
    experience:{ type : Number, required : true },
    publication:{ type : String, required: true},
    doj: { type : Date, required : true },
});

const Faculty = mongoose.model('faculty', facultySchema);

module.exports = Faculty;