const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{ type : String, required : true },
    fname:{ type : String, required : true },
    mname:{ type : String, required : true },
    mobile:{ type : Number, required : true },
    email:{ type : String, required : true, unique : true },
    dob:{ type : Date, required : true },
    gender:{ type : String, required : true },
    address:{ type : String, required : true },
    district:{ type : String, required : true },
    state:{ type : String, required : true },
    course:{ type : String, required : true },
    image:{ type : String, required : true },
    SCName:{ type : String, required : true },
    marks:{ type : Number, required : true },
    yop:{ type : Number, required : true },
    HSCName:{ type : String, required : true },
    HSmarks:{ type : Number, required : true },
    HSyop:{ type : Number, required : true },
});

const Student = mongoose.model('student', studentSchema);

module.exports = Student;