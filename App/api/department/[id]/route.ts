import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { DepartmentModel } from '@/lib/models/department.model';

export async function GET(
    _request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        await connectDB();
        const department = await DepartmentModel.findById(params.id)
            .populate('hod', 'name email designation image')
            .populate('programs', 'name code level')
            .populate('parentDepartment', 'name code');

        if (!department) {
            return NextResponse.json({ error: 'Department not found' }, { status: 404 });
        }
        return NextResponse.json(department, { status: 200 });
    } catch (error) {
        console.error('Error while getting Department data:', error);
        return NextResponse.json(
            { error: 'Failed to retrieve department data' },
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

        // Sanitize body to remove empty strings for optional fields
        const sanitizedData = { ...body };
        const optionalFields = [
            'parentDepartment',
            'hod',
            'establishedYear',
            'facultySanctioned',
            'labsCount',
            'type',
            'shortName',
            'description',
            'email',
            'phone',
            'location',
            'budgetCode',
            'affiliatedUniversity'
        ];
        optionalFields.forEach((field: string) => {
            if ((sanitizedData as any)[field] === '') {
                delete (sanitizedData as any)[field];
            }
        });

        const updatedDepartment = await DepartmentModel.findByIdAndUpdate(params.id, sanitizedData, { new: true });
        if (!updatedDepartment) {
            return NextResponse.json({ error: 'Department not found' }, { status: 404 });
        }

        return NextResponse.json(
            { message: 'Department updated successfully', department: updatedDepartment },
            { status: 200 }
        );
    } catch (error: any) {
        console.error('Error while updating Department:', error);
        const message = error.code === 11000
            ? 'Department code already exists'
            : 'Error while updating Department';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

export async function DELETE(
    _request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        await connectDB();
        const deletedDepartment = await DepartmentModel.findByIdAndDelete(params.id);
        if (!deletedDepartment) {
            return NextResponse.json({ error: 'Department not found' }, { status: 404 });
        }
        return NextResponse.json(
            { message: 'Department deleted successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error while deleting Department:', error);
        return NextResponse.json(
            { error: 'Failed to delete department' },
            { status: 500 }
        );
    }
}
