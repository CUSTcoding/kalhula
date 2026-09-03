import { NextRequest } from "next/server";
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const initMiddleware = createMiddleware(routing);

export default function proxy(req: NextRequest){

    const response = initMiddleware(req);
    const locale = req.headers.get('accept-language')?.includes('pt')
        ? 'pt'
        : 'en';

    if(!req.cookies.get('NEXT_LOCALE')){
        response.cookies.set('NEXT_LOCALE', locale)
    }

    return response;

}

export const config = {
  // Match all pathnames except for:
  // - api routes
  // - _next (static files)
  // - _vercel (Vercel internals)
  // - static files with a dot (e.g. favicon.ico, logo.png, etc.)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};

