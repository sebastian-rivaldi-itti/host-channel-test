import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest): Promise<NextResponse> {
  const hostname = req.headers.get('host');
  let channel: string;

  console.log('Hostname:', hostname);

  if (hostname === 'web.tuti.com.py') {
    channel = 'web';
  } else if (hostname === 'pos.tuti.com.py') {
    channel = 'pos';
  } else if (hostname === 'boxo.tuti.com.py') {
    channel = 'boxo';
  } else {
    channel = 'default';
  }

  return NextResponse.json(
    { host: hostname, channel },
    { status: 200 }
  );
}