import { NextResponse } from 'next/server';
import  { commentDao } from  '@/db/dao';

export async function POST(request: Request) {
  const jsonData = await request.json();
  const { commentId, content } = jsonData;
  const comment = {
    commentId,
    content,
  }
  const result = commentDao.edit(comment);
  return NextResponse.json(result);
}
