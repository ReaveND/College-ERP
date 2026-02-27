import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { FacultyModel } from '@/lib/models/faculty.model';
import { uploadToCloudinary } from '@/lib/cloudinary';

export async function GET() {
  try {
    await connectDB();
    const faculties = await FacultyModel.find({}).select('-password');
    return NextResponse.json(faculties, { status: 200 });
  } catch (error) {
    console.error('Error while getting Faculty data:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve faculty data' },
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
      imageUrl = await uploadToCloudinary(imageFile, 'college-erp/faculty');
    }

    const facultyData = {
      name: formData.get('name'),
      mobile: Number(formData.get('mobile')),
      email: formData.get('email'),
      dob: formData.get('dob'),
      gender: formData.get('gender'),
      address: formData.get('address'),
      district: formData.get('district'),
      state: formData.get('state'),
      image: imageUrl,
      qualification: formData.get('qualification'),
      specialization: formData.get('specialization'),
      department: formData.get('department'),
      designation: formData.get('designation'),
      username: formData.get('username'),
      password: formData.get('password'),
      experience: Number(formData.get('experience')),
      publication: formData.get('publication'),
      doj: formData.get('doj'),
    };

    if (!facultyData.name || !facultyData.email || !facultyData.username || !facultyData.password) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    if (!imageUrl) {
      return NextResponse.json({ error: 'Profile picture is required' }, { status: 400 });
    }

    const newFaculty = await FacultyModel.create(facultyData);
    return NextResponse.json(
      { message: 'Faculty added successfully', faculty: newFaculty },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error while adding Faculty:', error);
    const message = error.code === 11000
      ? 'Email or username already exists'
      : 'Error while adding Faculty';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
