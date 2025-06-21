import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_PATHS = ['/login', '/signup', '/favicon.ico'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public paths
  if (PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Temporarily allow all requests to debug the issue
  // TODO: Re-enable auth check once login is working
  return NextResponse.next();

  // Check for Supabase auth cookies - Supabase uses multiple possible cookie names
  // const cookies = request.cookies;
  // const hasAccessToken = cookies.has('sb-access-token');
  // const hasRefreshToken = cookies.has('sb-refresh-token');
  // const hasAuthCookie = cookies.has('supabase-auth-token');
  
  // // Also check for the newer Supabase cookie format
  // const cookieNames = Array.from(cookies.getAll()).map(cookie => cookie.name);
  // const hasNewAuthCookie = cookieNames.some(name => 
  //   name.startsWith('sb-') && name.includes('auth-token')
  // );
  
  // // Check if any auth cookie exists
  // const isAuthenticated = hasAccessToken || hasRefreshToken || hasAuthCookie || hasNewAuthCookie;

  // if (!isAuthenticated) {
  //   const loginUrl = new URL('/login', request.url);
  //   return NextResponse.redirect(loginUrl);
  // }

  // return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|static|favicon.ico).*)'],
};
