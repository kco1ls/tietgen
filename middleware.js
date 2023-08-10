import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import cookie from 'cookie'
 
export function middleware(req) {
  const parsedCookies = cookie.parse(req.headers.get('cookie') || '');

  let pathname = req.nextUrl.pathname;

  if (/\.(jpg|png|svg)$/.test(pathname)) {
    return NextResponse.next();
  }

  const languageNegotiated = parsedCookies.languageNegotiated;

  if (languageNegotiated || pathname.startsWith('/en')) {
    return NextResponse.next();
  }

  const acceptLanguage = req.headers.get('Accept-Language');
  const locale = acceptLanguage && acceptLanguage.includes('da') ? 'dk' : 'en';

  if (pathname.startsWith('/en')) {
    pathname = pathname.substring(3);
  }
  
  const url = req.nextUrl.origin + '/' + locale + pathname

  const res = NextResponse.redirect(url);
  res.cookies.set({
    name: 'languageNegotiated',
    value: 'true',
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    secure: true,
    sameSite: 'lax',
  });
  
  return res;
}

export const config = {
  matcher: [
    '/((?!_next).*)',
  ],
}
