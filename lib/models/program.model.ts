import mongoose from 'mongoose';

const programSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        code: { type: String, required: true, unique: true },
        description: { type: String },
        duration: { type: Number, required: true }, // in years
        level: { type: String, enum: ['UG', 'PG', 'PhD', 'Diploma'], required: true },
    },
    { timestamps: true }
);

export const ProgramModel =
    mongoose.models.program || mongoose.model('program', programSchema);
