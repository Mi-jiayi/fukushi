"use client";

import { IoPersonOutline } from "react-icons/io5";

const MainPage = () => {
  const posts = [
    { id: 1, name: "ワイズ太郎", date: "2024.07.19 11:50", content: "本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文" },
    { id: 2, name: "ワイズ太郎", date: "2024.07.22 17:31", content: "テスト" },
    { id: 3, name: "ワイズ太郎", date: "2024.07.22 17:31", content: "content" },
    { id: 4, name: "ワイズ太郎", date: "2024.07.22 17:31", content: "本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Header */}
      <div className="flex items-center mb-4">
        <button className="text-gray-500 hover:text-gray-800">
          <span className="text-lg font-medium">&larr; 一覧に戻る</span>
        </button>
      </div>

      {/* Patient Info */}
      <div className="bg-white p-4 rounded-lg shadow-md flex items-center mb-4">
        <IoPersonOutline className="text-gray-800 w-8 h-8 mr-4" />
        <span className="text-xl font-semibold text-gray-800">患者太郎</span>
      </div>

      {/* Posts List */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center mb-2">
              <IoPersonOutline className="text-gray-800 w-6 h-6 mr-2" />
              <span className="text-gray-800 font-medium">{post.name}</span>
            </div>
            <div className="text-gray-500 text-sm mb-2">{post.date}</div>
            <div className="text-gray-800 mb-4">{post.content}</div>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600">
              削除
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
