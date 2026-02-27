import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { CourseModel } from '@/lib/models/course.model';
import { uploadToCloudinary } from '@/lib/cloudinary';

export async function GET() {
    try {
        await connectDB();
        const courses = await CourseModel.find({}).populate('primaryInstructor', 'name');
        return NextResponse.json(courses, { status: 200 });
    } catch (error) {
        console.error('Error while getting Course data:', error);
        return NextResponse.json(
            { error: 'Failed to retrieve course data' },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        await connectDB();

        const formData = await request.formData();

        // Upload syllabus to Cloudinary if provided
        const syllabusFile = formData.get('syllabus') as File | null;
        let syllabusUrl = '';
        if (syllabusFile && syllabusFile.size > 0) {
            syllabusUrl = await uploadToCloudinary(syllabusFile, 'college-erp/courses');
        }

        const courseData = {
            code: formData.get('code'),
            title: formData.get('title'),
            description: formData.get('description'),
            department: formData.get('department'),
            credits: Number(formData.get('credits')),
            semester: formData.get('semester'),
            academicYear: formData.get('academicYear'),
            maxEnrollment: formData.get('maxEnrollment') ? Number(formData.get('maxEnrollment')) : undefined,
            schedule: formData.get('schedule'),
            primaryInstructor: formData.get('primaryInstructor'),
            coInstructors: formData.getAll('coInstructors'),
            location: formData.get('location'),
            prerequisites: formData.getAll('prerequisites'),
            courseLevel: formData.get('courseLevel'),
            status: formData.get('status') === 'true',
            gradingScheme: formData.get('gradingScheme'),
            fee: formData.get('fee') ? Number(formData.get('fee')) : undefined,
            syllabus: syllabusUrl,
        };

        if (!courseData.code || !courseData.title || !courseData.department || !courseData.credits || !courseData.primaryInstructor) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const newCourse = await CourseModel.create(courseData);
        return NextResponse.json(
            { message: 'Course added successfully', course: newCourse },
            { status: 201 }
        );
    } catch (error: any) {
        console.error('Error while adding Course:', error);
        const message = error.code === 11000
            ? 'Course code already exists'
            : 'Error while adding Course';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
