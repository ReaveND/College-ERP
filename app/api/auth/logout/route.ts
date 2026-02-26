import { NextRequest, NextResponse } from 'next/server';
import { clearSession } from '@/lib/session';

export async function POST(_request: NextRequest) {
  try {
    await clearSession();
    return NextResponse.json(
      { message: 'Logout successful' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { error: 'Logout failed' },
      { status: 500 }
    );
  }
}
