import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { AdminModel } from '@/lib/models/admin.model';
import { setSession } from '@/lib/session';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const { username, email, password } = await request.json();

    // Validate required fields
    if (!username || !email || !password) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Find admin by email
    const admin = await AdminModel.findOne({ email });

    if (!admin) {
      return NextResponse.json(
        { error: 'Admin not found' },
        { status: 404 }
      );
    }

    // Check credentials
    if (admin.username !== username || admin.password !== password) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 400 }
      );
    }

    // Set session
    await setSession({
      _id: admin._id.toString(),
      email: admin.email,
      name: admin.name,
      role: 'admin',
    });

    return NextResponse.json(
      {
        message: 'Login successful',
        user: {
          _id: admin._id,
          name: admin.name,
          email: admin.email,
          image: admin.image,
          role: 'admin',
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Login error:', error);
    const details = (error instanceof Error) ? error.message : String(error);
    // In non-production show error details to help debugging
    return NextResponse.json(
      process.env.NODE_ENV !== 'production'
        ? { error: 'Server error', details }
        : { error: 'Server error' },
      { status: 500 }
    );
  }
}
