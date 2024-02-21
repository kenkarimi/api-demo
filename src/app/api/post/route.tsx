import { NextResponse } from 'next/server';
import { AccountRequired } from '@/app/_utils/GetEnumerations';

//To access this route handler, go to http://localhost:3000/api/ on the browser.
export async function POST(request: Request){ //the use of Request automatically disables caching on this route.
    //console.log('REQUEST HEADERS', request.headers);
    const accept = request.headers.get('accept');
    const content_type = request.headers.get('content-type');
    const user_agent = request.headers.get('user-agent');
    console.log('ACCEPT', accept);
    console.log('CONTENT-TYPE', content_type);
    console.log('USER-AGENT', user_agent);
    
    const { id, name, account } = await request.json();
    console.log('POST ID', id);
    console.log('POST NAME', name);
    
    /**
     * This proves that you can serialize & send enums from client to server
     */
    if(account === AccountRequired.Customer){
        console.log('POST: ACCOUNT CUSTOMER', account);
    } else if(account === AccountRequired.Admin){
        console.log('POST: ACCOUNT ADMIN', account);
    } else {}

    //return NextResponse.next();
    return NextResponse.json({ success: true, message: 'Server operation successful..' }, { status: 200 });
    //return NextResponse.json({ success: false, message: 'Server operation failed..' }, { status: 403 });
    //return NextResponse.json({ success: false, message: 'Server operation failed due to missing json request parameter in request body..' }, { status: 400 });
}