'use client';

import { useState } from 'react';
import Link from 'next/link';
// 干掉这个自定义钩子函数，选择的 acoount 
// import { useAccount } from '@/app/_context/AccountContext';


export default function KanjyaList() {

    // 迁移到加载我们这个画面，直接调用API获取
    // 第一 account 第二 我这个account对应的 kanjyaList
    // 直接从store中获取
    // 现在这是假数据
    const [kanjyaList,setKanjyaList] = useState([
        { id: 1, kanjyaName: "ワイズ太郎1", date: "2024.07.19 11:50", content: "本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文" },
        { id: 2, kanjyaName: "ワイズ太郎2", date: "2024.07.22 17:31", content: "テスト" },
        { id: 3, kanjyaName: "ワイズ太郎3", date: "2024.07.22 17:31", content: "content" },
        { id: 4, kanjyaName: "ワイズ太郎4", date: "2024.07.22 17:31", content: "本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文" },
    ])
    return (
        <div className="space-y-4">
           {kanjyaList.map(
            (kanjya)=>
                <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4" key={kanjya.id}>
                    <div className="flex items-center space-x-4">
                    <div className="bg-gray-300 rounded-lg p-2">
                    <svg fill="#000000" width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"/>
                    </svg>
                    </div>
                    <span className="text-gray-800 text-lg font-medium"  >
                    {kanjya.kanjyaName}
                    </span>
                    </div>
                    <div >
                    <Link
                        href={`/kanjyaDetail`}
                        className="text-blue-500 hover:underline"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-500"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                    </Link>
                    </div>
                </div> 
           )}
        </div>
    );
}


