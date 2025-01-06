import { NextResponse } from 'next/server';
import  { commentDao } from  '@/db/dao';

export async function POST(request: Request) {
    const jsonData = await request.json();
    const { commentId } = jsonData;
    const result = commentDao.delete(commentId);
    return NextResponse.json(result);
}
