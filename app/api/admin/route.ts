import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { AdminModel } from '@/lib/models/admin.model';

export async function GET() {
  try {
    await connectDB();
    const admins = await AdminModel.find({}).select('-password');
    return NextResponse.json(admins, { status: 200 });
  } catch (error) {
    console.error('Error while getting Admin data:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve admin data' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const formData = await request.formData();
    const adminData = {
      name: formData.get('name'),
      mobile: Number(formData.get('mobile')),
      email: formData.get('email'),
      dob: formData.get('dob'),
      address: formData.get('address'),
      district: formData.get('district'),
      state: formData.get('state'),
      image: formData.get('image') ? 'image-placeholder' : '',
      username: formData.get('username'),
      password: formData.get('password'),
    };

    // Validate required fields
    if (!adminData.name || !adminData.email || !adminData.username || !adminData.password) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newAdmin = await AdminModel.create(adminData);
    return NextResponse.json(
      { message: 'Admin added successfully', admin: newAdmin },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error while adding Admin:', error);
    const message = error.code === 11000 
      ? 'Email or username already exists'
      : 'Error while adding Admin';
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
