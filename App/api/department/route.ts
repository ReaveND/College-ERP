import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { DepartmentModel } from '@/lib/models/department.model';

export async function GET() {
    try {
        await connectDB();
        const departments = await DepartmentModel.find({})
            .populate('hod', 'name image')
            .populate('programs', 'name code')
            .populate('parentDepartment', 'name code');
        return NextResponse.json(departments, { status: 200 });
    } catch (error) {
        console.error('Error while getting Department data:', error);
        return NextResponse.json(
            { error: 'Failed to retrieve department data' },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        await connectDB();
        const body = await request.json();

        // Validation
        if (!body.code || !body.name) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

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

        const newDepartment = await DepartmentModel.create(sanitizedData);
        return NextResponse.json(
            { message: 'Department created successfully', department: newDepartment },
            { status: 201 }
        );
    } catch (error: any) {
        console.error('Error while adding Department:', error);
        const message = error.code === 11000
            ? 'Department code already exists'
            : 'Error while adding Department';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
