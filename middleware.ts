import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Add security headers
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  // Add cache control for static assets
  if (request.nextUrl.pathname.startsWith('/_next/static')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }

  // Add RSC-specific headers
  if (request.headers.get('RSC')) {
    response.headers.set('Cache-Control', 'no-store, must-revalidate');
    response.headers.set('RSC', '1');
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    '/_next/static/:path*',
  ],
};