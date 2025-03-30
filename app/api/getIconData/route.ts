"use server"
import { NextResponse, NextRequest } from 'next/server';


// here's where i got info on this: https://nextjs.org/blog/building-apis-with-nextjs#3-creating-an-api-with-route-handlers

export async function GET(request: NextRequest) {
  try {
    // get query data
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');

    // call api
    const response = await fetch(`https://api.iconfinder.com/v4/icons/search?query=${query}&count=12`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.API_KEY}`,
      },
    });

    // parse response

    // if it's not status code 200 then return error
    if (response.status != 200) {
      return NextResponse.json(
        { error: 'Failed to fetch data, please try again another time' },
        { status: 500 }
      );
    }
    const data = await response.json();

    // return data along with success status
    return NextResponse.json({ message: data }, { status: 200 });

  } catch (e) {
    console.error('Hello API Error:', e);
    return NextResponse.json(
      { error: 'Failed to fetch data, please try again another time' },
      { status: 500 }
    );
  }
}
