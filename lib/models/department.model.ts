import mongoose from 'mongoose';

const departmentSchema = new mongoose.Schema(
    {
        code: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        shortName: { type: String },
        description: { type: String },
        hod: { type: mongoose.Schema.Types.ObjectId, ref: 'faculty' },
        establishedYear: { type: Number },
        email: { type: String },
        phone: { type: String },
        location: { type: String },
        programs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'program' }],
        status: { type: Boolean, default: true },
        type: { type: String, enum: ['Teaching', 'Research', 'Administrative', 'Combined'] },
        parentDepartment: { type: mongoose.Schema.Types.ObjectId, ref: 'department' },
        facultySanctioned: { type: Number },
        labsCount: { type: Number },
        budgetCode: { type: String },
        affiliatedUniversity: { type: String },
    },
    { timestamps: true }
);

export const DepartmentModel =
    mongoose.models.department || mongoose.model('department', departmentSchema);
