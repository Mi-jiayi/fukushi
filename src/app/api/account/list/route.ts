import { NextResponse } from 'next/server';
import  { accountDao } from  '@/db/dao';

export async function GET() {
  const result = accountDao.list();
  return NextResponse.json(result);
}
