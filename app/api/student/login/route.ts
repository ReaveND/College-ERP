import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { StudentModel } from '@/lib/models/student.model';
import { setSession } from '@/lib/session';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const { email, mobile } = await request.json();

    if (!email || !mobile) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const student = await StudentModel.findOne({ email });

    if (!student) {
      return NextResponse.json({ error: 'Student not found' }, { status: 404 });
    }

    if (String(student.mobile) !== String(mobile)) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 400 });
    }

    await setSession({
      _id: student._id.toString(),
      email: student.email,
      name: student.name,
      role: 'student',
    });

    return NextResponse.json({
      message: 'Login successful',
      user: {
        _id: student._id,
        name: student.name,
        email: student.email,
        role: 'student',
      },
    });
  } catch (error) {
    console.error('Student login error:', error);
    return NextResponse.json({ error: 'Server error', detail: String(error) }, { status: 500 });
  }
}
