import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = (await request.json()) as { email?: string };

  if (!body.email || typeof body.email !== 'string') {
    return NextResponse.json({ ok: false, message: 'Invalid email.' }, { status: 400 });
  }

  return NextResponse.json({ ok: true, message: 'Lead captured.', email: body.email }, { status: 200 });
}
