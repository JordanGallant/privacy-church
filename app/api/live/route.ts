import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { stream, expiry } = body;

    // Validate required fields
    if (!stream) {
      return NextResponse.json(
        { error: 'stream parameter is required' },
        { status: 400 }
      );
    }

    // Call your stream-api server
    const response = await fetch('https://stream.slim.community/api/generate-stream-key', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        stream,
        expiry: expiry || 60,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json(
        { error: 'Failed to generate stream key', details: error },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error generating stream key:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Use POST method to generate stream keys' },
    { status: 405 }
  );
}