import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = body.email;

    console.log('Received email:', email);

    return NextResponse.json({
      message: 'done',
    });
  } catch (error) {
    console.error('Error processing request:', error);

    return NextResponse.json(
      { message: 'An error occurred' },
      { status: 500 }
    );
  }
}
