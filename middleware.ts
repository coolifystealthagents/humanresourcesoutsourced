import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const forwardedProtocol = request.headers.get('x-forwarded-proto')?.split(',')[0]?.trim();
  const cloudflareVisitor = request.headers.get('cf-visitor') || '';
  const hostname = (request.headers.get('host') || '').split(':')[0].toLowerCase();
  const visitorUsedHttp = forwardedProtocol === 'http' || /"scheme"\s*:\s*"http"/i.test(cloudflareVisitor);
  const duplicateBlogIndex = request.nextUrl.pathname === '/blog/page/1';

  if (visitorUsedHttp || hostname === 'www.humanresourcesoutsourced.com' || duplicateBlogIndex) {
    const url = request.nextUrl.clone();
    url.protocol = 'https:';
    url.hostname = 'humanresourcesoutsourced.com';
    url.port = '';
    if (duplicateBlogIndex) url.pathname = '/blog';
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = { matcher: '/((?!_next/static|_next/image|favicon.ico).*)' };
