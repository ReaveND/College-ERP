import { NextRequest, NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';
import { Session } from '@/types';

const SESSION_CONFIG = {
  password: process.env.SESSION_SECRET || 'college-erp-session-secret-key',
  cookieName: 'college-erp-session',
};

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  // Debug logging for builds on Vercel to help trace 404s
  try {
    // eslint-disable-next-line no-console
    console.log('middleware incoming request:', { pathname, url: request.url });
  } catch (e) {}

  // Let all API routes pass through — they handle their own auth
  if (pathname.startsWith('/api/')) {
    return NextResponse.next();
  }

  // Public routes that don't require authentication
  const publicRoutes = ['/', '/admin/login', '/student/login', '/faculty/login', '/academics', '/our-faculty', '/placements', '/admission', '/contact', '/about', '/campus-view'];

  // Protected routes by role (handled inline below)

  // If it's a public route, allow access
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Get session (iron-session v8 Edge/middleware API: pass request + response)
  const response = NextResponse.next();
  let session: Session | null = null;
  try {
    session = await getIronSession<Session>(request, response, SESSION_CONFIG);
    // eslint-disable-next-line no-console
    console.log('middleware session present:', Boolean(session?.user));
  } catch (error) {
    console.error('Error getting session:', error);
  }

  // Check if user is authenticated
  if (!session?.user) {
    // Redirect to appropriate login page based on pathname
    if (pathname.startsWith('/admin')) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    } else if (pathname.startsWith('/student')) {
      return NextResponse.redirect(new URL('/student/login', request.url));
    } else if (pathname.startsWith('/faculty')) {
      return NextResponse.redirect(new URL('/faculty/login', request.url));
    }
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Check role-based access
  const userRole = session.user.role;
  
  if (pathname.startsWith('/admin') && userRole !== 'admin') {
    return NextResponse.redirect(new URL('/', request.url));
  }
  if (pathname.startsWith('/student') && userRole !== 'student') {
    return NextResponse.redirect(new URL('/', request.url));
  }
  if (pathname.startsWith('/faculty') && userRole !== 'faculty') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|images/|fonts/|icons/|.*\\.(?:jpg|jpeg|png|gif|svg|webp|ico|css|js|woff|woff2|ttf|otf)).*)',
  ],
};
