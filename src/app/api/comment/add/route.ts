import { NextResponse } from 'next/server';
import  { commentDao } from  '@/db/dao';

export async function POST(request: Request) {
  const jsonData = await request.json();
  const { accountId, kanjyaId, content, createAccountName } = jsonData;
  const comment = {
    accountId,
    kanjyaId,
    content,
    createAccountName
  }
  const result = commentDao.add(comment);
  console.log(result);
  return NextResponse.json(result);
}
