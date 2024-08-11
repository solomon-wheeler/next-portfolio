import { NextResponse } from 'next/server';
import { register, collectDefaultMetrics } from 'prom-client';

collectDefaultMetrics({ prefix: 'web_server_' });

export async function GET() {
  const metrics = await register.metrics();

  return new NextResponse(metrics, {
    status: 200,
    headers: {
      'Content-Type': register.contentType,
      'Cache-Control': 'no-store',
    },
  });
}
