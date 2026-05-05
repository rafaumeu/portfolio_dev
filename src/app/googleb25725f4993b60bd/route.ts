import { NextResponse } from 'next/server'

export async function GET() {
  return new NextResponse('google-site-verification: googleb25725f4993b60bd.html', {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
