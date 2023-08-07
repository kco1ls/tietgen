import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import cookie from 'cookie'
 
export function middleware(req) {
  const parsedCookies = cookie.parse(req.headers.get('cookie') || '');

  let pathname = req.nextUrl.pathname;

  if (/\.(jpg|png|svg)$/.test(pathname)) {
    // If it's an image, let the request proceed as usual
    return NextResponse.next();
  }

  const languageNegotiated = parsedCookies.languageNegotiated;

  if (languageNegotiated || pathname.startsWith('/en')) {
    return NextResponse.next();
  }

  // Language has not been negotiated. Perform language negotiation.
  const acceptLanguage = req.headers.get('Accept-Language');
  const locale = acceptLanguage && acceptLanguage.includes('da') ? 'dk' : 'en';

  if (pathname.startsWith('/en')) {
    pathname = pathname.substring(3);
  }
  
  const url = req.nextUrl.origin + '/' + locale + pathname

  // Set the languageNegotiated cookie so that we know the language has been negotiated.
  const res = NextResponse.redirect(url);
  res.cookies.set({
    name: 'languageNegotiated',
    value: 'true',
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 year
    secure: true,
    sameSite: 'lax',
  });
  
  return res;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
  ],
}
