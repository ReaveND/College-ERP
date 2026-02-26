import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { StudentModel } from '@/lib/models/student.model';
import mongoose from 'mongoose';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid student ID' },
        { status: 400 }
      );
    }

    await connectDB();

    const formData = await request.formData();
    const updateData: any = {};

    // Collect form data
    for (const [key, value] of formData.entries()) {
      if (key === 'mobile' || key === 'marks' || key === 'yop' || key === 'HSmarks' || key === 'HSyop') {
        updateData[key] = Number(value);
      } else if (key !== 'image') { // Skip file upload for now
        updateData[key] = value;
      }
    }

    const updatedStudent = await StudentModel.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedStudent) {
      return NextResponse.json(
        { error: 'Student not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedStudent, { status: 200 });
  } catch (error) {
    console.error('Error updating student:', error);
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid student ID' },
        { status: 400 }
      );
    }

    await connectDB();

    const deletedStudent = await StudentModel.findByIdAndDelete(id);

    if (!deletedStudent) {
      return NextResponse.json(
        { error: 'Student not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Student deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting student:', error);
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}
