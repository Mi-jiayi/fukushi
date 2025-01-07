import { NextResponse } from 'next/server';
import  { kanjyatDao } from  '@/db/dao';

export async function GET() {
  const result = kanjyatDao.list();
  return NextResponse.json(result);
}
