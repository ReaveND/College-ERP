import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { FacultyModel } from '@/lib/models/faculty.model';
import mongoose from 'mongoose';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid faculty ID' },
        { status: 400 }
      );
    }

    await connectDB();

    const formData = await request.formData();
    const updateData: any = {};

    // Collect form data
    for (const [key, value] of formData.entries()) {
      if (key === 'mobile' || key === 'experience') {
        updateData[key] = Number(value);
      } else if (key !== 'image') { // Skip file upload for now
        updateData[key] = value;
      }
    }

    const updatedFaculty = await FacultyModel.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedFaculty) {
      return NextResponse.json(
        { error: 'Faculty not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedFaculty, { status: 200 });
  } catch (error) {
    console.error('Error updating faculty:', error);
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
        { error: 'Invalid faculty ID' },
        { status: 400 }
      );
    }

    await connectDB();

    const deletedFaculty = await FacultyModel.findByIdAndDelete(id);

    if (!deletedFaculty) {
      return NextResponse.json(
        { error: 'Faculty not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Faculty deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting faculty:', error);
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}
