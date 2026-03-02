import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { StudentModel } from '@/lib/models/student.model';

export async function GET() {
  try {
    await connectDB();

    // Aggregate students by month (createdAt) and produce a 12-item array
    const results = await StudentModel.aggregate([
      { $match: {} },
      { $group: { _id: { $month: '$createdAt' }, count: { $sum: 1 } } },
    ]);

    const months = Array(12).fill(0);
    results.forEach((r: any) => {
      const idx = (r._id || 1) - 1; // _id is month 1-12
      if (idx >= 0 && idx < 12) months[idx] = r.count;
    });

    return NextResponse.json(months, { status: 200 });
  } catch (error) {
    console.error('Error while getting monthly stats:', error);
    return NextResponse.json({ error: 'Failed to retrieve monthly stats' }, { status: 500 });
  }
}
