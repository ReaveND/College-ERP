import { NextResponse } from 'next/server';
import { getSession } from '@/lib/session';
import { connectDB } from '@/lib/db';
import { AdminModel } from '@/lib/models/admin.model';

export async function GET() {
    try {
        const session = await getSession();

        if (!session?.user || session.user.role !== 'admin') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await connectDB();
        const admin = await AdminModel.findById(session.user._id)
            .select('-password')
            .lean();

        if (!admin) {
            return NextResponse.json({ error: 'Admin not found' }, { status: 404 });
        }

        return NextResponse.json({ admin, sessionUser: session.user });
    } catch (error) {
        console.error('Error fetching admin profile:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
