import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { FacultyModel } from '@/lib/models/faculty.model';
import { setSession } from '@/lib/session';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const { username, password } = await request.json();

    // Validate required fields
    if (!username || !password) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Find faculty by username
    const faculty = await FacultyModel.findOne({ username });

    if (!faculty) {
      return NextResponse.json(
        { error: 'Faculty not found' },
        { status: 404 }
      );
    }

    // Check credentials
    if (faculty.password !== password) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 400 }
      );
    }

    // Set session
    await setSession({
      _id: faculty._id.toString(),
      email: faculty.email,
      name: faculty.name,
      role: 'faculty',
    });

    return NextResponse.json(
      {
        message: 'Login successful',
        user: {
          _id: faculty._id,
          name: faculty.name,
          email: faculty.email,
          role: 'faculty',
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}
