import { NextRequest, NextResponse } from 'next/server';

const sleep = (milliseconds: number) => {
    return new Promise( (resolve) => setTimeout(resolve, milliseconds));
}

/**
 * Next.js Middleware allows you to run custom code before a request is completed. 
 * It acts as an intermediary, intercepting incoming HTTP requests so you can modify the response by rewriting, redirecting, altering headers, or handling cookies.
 * NOTE: Deprecated after v15: https://nextjs.org/docs/14/app/building-your-application/routing/middleware
 * It has been renamed to proxy.ts. The functionality remains the same, but the Next.js team made the change to clarify that this feature acts as a network and routing boundary, rather than traditional backend middleware.
 */
export const middleware = async (request: NextRequest) => {
    /**
     * use waitUntil() from NextFetchEvent if return statement (return NextResponse.next() is outside of the returned fetch/sleep promise(.then)
     * waitUntil() takes a promise as an argument and extends the lifetime of the middleware until the promise settles.
     * Example here: https://nextjs.org/docs/app/building-your-application/routing/middleware#waituntil-and-nextfetchevent 
     */
    return sleep(2000).then( async () => {
        if(request.nextUrl.pathname === '/api/home'){
            console.log('/api/home', 'NEXT');
            return NextResponse.next();
        } else if(request.nextUrl.pathname === '/api/post'){
            console.log('/api/post', 'NOT NEXT');
            const { id, name } = await request.json();
            console.log('MIDDELWARE POST ID', id);
            console.log('MIDDELWARE POST NAME', name);
            return NextResponse.next();
        } else if(request.nextUrl.pathname.startsWith('/api/put/')){
            console.log('/api/put/:path', 'NEXT');
            const { id, name } = await request.json();
            console.log('MIDDELWARE PUT ID', id);
            console.log('MIDDELWARE PUT NAME', name);
            return NextResponse.next();
        }
    });
}

export const config = {
    matcher: [
        '/api/home',
        '/api/post',
        '/api/put/:path*'
    ]
}