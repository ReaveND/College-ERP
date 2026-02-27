import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema(
    {
        code: { type: String, required: true, unique: true },
        title: { type: String, required: true },
        description: { type: String, optional: true },
        department: { type: String, required: true },
        credits: { type: Number, required: true },
        semester: { type: String, required: true },
        academicYear: { type: String, required: true },
        maxEnrollment: { type: Number, optional: true },
        schedule: { type: String, optional: true },
        primaryInstructor: { type: mongoose.Schema.Types.ObjectId, ref: 'faculty', required: true },
        coInstructors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'faculty' }],
        location: { type: String, optional: true },
        prerequisites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'course' }],
        level: { type: String, optional: true },
        status: { type: Boolean, default: true },
        gradingScheme: { type: String, optional: true },
        fee: { type: Number, optional: true },
        syllabus: { type: String, optional: true }, // URL or path to the document
    },
    { timestamps: true }
);

export const CourseModel =
    mongoose.models.course || mongoose.model('course', courseSchema);
