import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { FacultyModel } from '@/lib/models/faculty.model';
import { uploadToCloudinary } from '@/lib/cloudinary';
import mongoose from 'mongoose';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: 'Invalid faculty ID' }, { status: 400 });
    }

    await connectDB();

    const formData = await request.formData();
    const updateData: any = {};

    for (const [key, value] of formData.entries()) {
      if (key === 'image') {
        // handled separately below
      } else if (['mobile', 'experience'].includes(key)) {
        updateData[key] = Number(value);
      } else if (typeof value === 'string' && value.trim() === '') {
        // skip blank fields — keeps the existing DB value (e.g. password)
      } else {
        updateData[key] = value;
      }
    }

    // If a new image file was provided, upload it to Cloudinary
    const imageFile = formData.get('image') as File | null;
    if (imageFile && imageFile.size > 0) {
      updateData.image = await uploadToCloudinary(imageFile, 'college-erp/faculty');
    }

    const updatedFaculty = await FacultyModel.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedFaculty) {
      return NextResponse.json({ error: 'Faculty not found' }, { status: 404 });
    }

    return NextResponse.json(updatedFaculty, { status: 200 });
  } catch (error) {
    console.error('Error updating faculty:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: 'Invalid faculty ID' }, { status: 400 });
    }

    await connectDB();

    const deletedFaculty = await FacultyModel.findByIdAndDelete(id);

    if (!deletedFaculty) {
      return NextResponse.json({ error: 'Faculty not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Faculty deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting faculty:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
