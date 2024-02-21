import { NextResponse } from 'next/server';
import { AccountRequired } from '@/app/_utils/GetEnumerations';

//Use put instead of post if a dynamic parameter is to be used in the pathname. Put still allows you to include parameters in the request's body alongside the dynamic parameter.
export async function PUT(request: Request, { params }: { params: any }){
    const { id } = params;
    console.log('PUT ID', id);

    const { name, account } = await request.json();
    console.log('PUT NAME', name);

    if(account === AccountRequired.Admin){
        console.log('PUT: ACCOUNT ADMIN', account);
    } else if(account === AccountRequired.Customer){
        console.log('PUT: ACCOUNT CUSTOMER', account);
    }

    const response = NextResponse.json({ success: true, message: 'Server operation successful..' }, { status: 200, headers: { 'content-type': 'application/json', 'x-hello-from-put-request': 'Habari yako?' } });
    response.cookies.set('next_response_cookie', 'This is a cookie set in the server.', {
        path: '/', //If path omitted, it returns '/' as it's default path.
        maxAge: 6000, //Specifies the number (in seconds). if both expires and maxAge are set, then maxAge takes precedence, but it is possible not all clients by obey this, so if both are set, they should point to the same date and time.
        expires: 6000000 //A number of milliseconds or Date interface(new Date('2023-09-30')) containing the expires of the cookie.
    });
    return response;
    //return NextResponse.json({ success: false, message: 'Server operation failed..' }, { status: 403 });
    //return NextResponse.json({ success: false, message: 'Server operation failed due to missing json request parameter in request body..' }, { status: 400 });
}