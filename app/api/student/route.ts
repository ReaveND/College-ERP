import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { StudentModel } from '@/lib/models/student.model';
import { uploadToCloudinary } from '@/lib/cloudinary';

export async function GET() {
  try {
    await connectDB();
    const students = await StudentModel.find({});
    return NextResponse.json(students, { status: 200 });
  } catch (error) {
    console.error('Error while getting Student data:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve student data' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const formData = await request.formData();

    // Upload image to Cloudinary
    const imageFile = formData.get('image') as File | null;
    let imageUrl = '';
    if (imageFile && imageFile.size > 0) {
      imageUrl = await uploadToCloudinary(imageFile, 'college-erp/students');
    }

    const studentData = {
      name: formData.get('name'),
      fname: formData.get('fname'),
      mname: formData.get('mname'),
      mobile: Number(formData.get('mobile')),
      email: formData.get('email'),
      dob: formData.get('dob'),
      gender: formData.get('gender'),
      address: formData.get('address'),
      district: formData.get('district'),
      state: formData.get('state'),
      course: formData.get('course'),
      image: imageUrl,
      SCName: formData.get('SCName'),
      marks: Number(formData.get('marks')),
      yop: Number(formData.get('yop')),
      HSCName: formData.get('HSCName'),
      HSmarks: Number(formData.get('HSmarks')),
      HSyop: Number(formData.get('HSyop')),
    };

    if (!studentData.name || !studentData.email || !studentData.course) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    if (!imageUrl) {
      return NextResponse.json({ error: 'Profile picture is required' }, { status: 400 });
    }

    const newStudent = await StudentModel.create(studentData);
    return NextResponse.json(
      { message: 'Student added successfully', student: newStudent },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error while adding Student:', error);
    const message = error.code === 11000
      ? 'Email already exists'
      : 'Error while adding Student';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
