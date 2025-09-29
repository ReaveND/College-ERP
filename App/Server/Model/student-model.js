const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{ type : String, require : true },
    fname:{ type : String, require : true },
    mname:{ type : String, require : true },
    mobile:{ type : Number, require : true },
    email:{ type : String, require : true, unique : true },
    dob:{ type : Date, require : true },
    gender:{ type : String, require : true },
    address:{ type : String, require : true },
    district:{ type : String, require : true },
    state:{ type : String, require : true },
    course:{ type : String, require : true },
    image:{ type : String, require : true },
    SCName:{ type : String, require : true },
    marks:{ type : Number, require : true },
    yop:{ type : Number, require : true },
    HSCName:{ type : String, require : true },
    HSmarks:{ type : Number, require : true },
    HSyop:{ type : Number, require : true },
});

const Student = mongoose.model('student', studentSchema);

module.exports = Student;