import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { ProgramModel } from '@/lib/models/program.model';

export async function GET() {
    try {
        await connectDB();
        const programs = await ProgramModel.find({});
        return NextResponse.json(programs, { status: 200 });
    } catch (error) {
        console.error('Error while getting Program data:', error);
        return NextResponse.json(
            { error: 'Failed to retrieve program data' },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        await connectDB();
        const body = await request.json();

        const newProgram = await ProgramModel.create(body);
        return NextResponse.json(
            { message: 'Program created successfully', program: newProgram },
            { status: 201 }
        );
    } catch (error: any) {
        console.error('Error while adding Program:', error);
        const message = error.code === 11000
            ? 'Program code already exists'
            : 'Error while adding Program';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
