import { NextResponse } from 'next/server';
import  { kanjyatDao } from  '@/db/dao';

export async function GET(request: Request) {
  const { kanjyaId } = await request.json();
  const result = kanjyatDao.listByAccountId(kanjyaId);
  return NextResponse.json(result);
}
