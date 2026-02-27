import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { ProgramModel } from '@/lib/models/program.model';

export async function GET(
    _request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        await connectDB();
        const program = await ProgramModel.findById(params.id);
        if (!program) {
            return NextResponse.json({ error: 'Program not found' }, { status: 404 });
        }
        return NextResponse.json(program, { status: 200 });
    } catch (error) {
        console.error('Error while getting Program data:', error);
        return NextResponse.json(
            { error: 'Failed to retrieve program data' },
            { status: 500 }
        );
    }
}

export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        await connectDB();
        const body = await request.json();

        const updatedProgram = await ProgramModel.findByIdAndUpdate(params.id, body, { new: true });
        if (!updatedProgram) {
            return NextResponse.json({ error: 'Program not found' }, { status: 404 });
        }

        return NextResponse.json(
            { message: 'Program updated successfully', program: updatedProgram },
            { status: 200 }
        );
    } catch (error: any) {
        console.error('Error while updating Program:', error);
        const message = error.code === 11000
            ? 'Program code already exists'
            : 'Error while updating Program';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

export async function DELETE(
    _request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        await connectDB();
        const deletedProgram = await ProgramModel.findByIdAndDelete(params.id);
        if (!deletedProgram) {
            return NextResponse.json({ error: 'Program not found' }, { status: 404 });
        }
        return NextResponse.json(
            { message: 'Program deleted successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error while deleting Program:', error);
        return NextResponse.json(
            { error: 'Failed to delete program' },
            { status: 500 }
        );
    }
}
