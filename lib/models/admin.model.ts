import mongoose from 'mongoose';
import { Admin } from '@/types';

const adminSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    mobile: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    dob: { type: Date, required: true },
    address: { type: String, required: true },
    district: { type: String, required: true },
    state: { type: String, required: true },
    image: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export const AdminModel =
  mongoose.models.admin || mongoose.model<Admin>('admin', adminSchema);
