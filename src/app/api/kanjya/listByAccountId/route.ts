import { NextResponse } from 'next/server';
import  { kanjyatDao } from  '@/db/dao';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const accountId = url.searchParams.get('accountId');
  const result = kanjyatDao.listByAccountId(Number(accountId));
  return NextResponse.json(result);
}
