import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_PATHS = ['/login', '/signup', '/favicon.ico'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public paths
  if (PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // TEMPORARY FIX: allow time for Supabase to set cookie after login
  const referer = request.headers.get('referer') || '';
  const cameFromLogin = referer.includes('/login');

  // Check for Supabase auth cookie
  const hasAuthCookie = request.cookies.has('sb-access-token');

  if (!hasAuthCookie && !cameFromLogin) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|static|favicon.ico).*)'],
};
