import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    return NextResponse.redirect(new URL('/student/dashboard', request.url));
  } catch (e) {
    return NextResponse.redirect(new URL('/student/dashboard', request.url));
  }
}
