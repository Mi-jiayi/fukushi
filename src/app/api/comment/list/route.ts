import { NextResponse } from 'next/server';
import  { commentDao } from  '@/db/dao';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const kanjyaId = url.searchParams.get('kanjyaId');
  const result = commentDao.list(Number(kanjyaId));
  return NextResponse.json(result);
}
