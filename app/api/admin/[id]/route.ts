import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { AdminModel } from '@/lib/models/admin.model';
import mongoose from 'mongoose';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid admin ID' },
        { status: 400 }
      );
    }

    await connectDB();

    const formData = await request.formData();
    const updateData: any = {};

    // Collect form data
    for (const [key, value] of formData.entries()) {
      if (key === 'mobile') {
        updateData[key] = Number(value);
      } else if (key !== 'image') { // Skip file upload for now
        updateData[key] = value;
      }
    }

    const updatedAdmin = await AdminModel.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedAdmin) {
      return NextResponse.json(
        { error: 'Admin not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedAdmin, { status: 200 });
  } catch (error) {
    console.error('Error updating admin:', error);
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid admin ID' },
        { status: 400 }
      );
    }

    await connectDB();

    const deletedAdmin = await AdminModel.findByIdAndDelete(id);

    if (!deletedAdmin) {
      return NextResponse.json(
        { error: 'Admin not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Admin deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting admin:', error);
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}
