"use client";

import { useState, useEffect } from "react";
import { getKanjyaList } from "@/app/actions";
import Link from "next/link";
import { Kanjya } from "../../model/schemas";

export default function KanjyaList() {
  const [kanjyaList, setKanjyaList] = useState<Kanjya[]>([]);
  // 患者リストを取得
  const fetchKanjyaList = async () => {
    try {
      const res = await getKanjyaList();
      setKanjyaList(res.data);
    } catch (error) {
      console.error("Error fetching kanjyas:", error);
    }
  };

  useEffect(() => {
    fetchKanjyaList();
  }, []);

  return (
    <div className="space-y-4">
      {kanjyaList.map((kanjya) => (
        <div key={kanjya.kanjyaId}>
          <Link href={`/kanjyaDetail/${kanjya.kanjyaId}/${kanjya.kanjyaName}`}>
            <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4">
              <div className="flex items-center space-x-4">
                <div className="bg-gray-300 rounded-lg p-2">
                  <svg
                    fill="#000000"
                    width="64px"
                    height="64px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
                    />
                  </svg>
                </div>
                <span className="text-black-800 text-lg font-semibold">
                  {kanjya.kanjyaName}
                </span>
              </div>
              <div>
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
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
